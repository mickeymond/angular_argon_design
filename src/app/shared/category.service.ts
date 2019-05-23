import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ICategory } from './category.model';
import { EthService } from './eth.service';
import { Candidate } from './candidate.model';

declare let web3: any;
declare let require: any;

const _ = require('lodash');
const TruffleContract = require('truffle-contract');

const EventCategoryContract = TruffleContract(require('../../../build/contracts/EventCategory.json'));
EventCategoryContract.setProvider(web3.currentProvider);

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private categoryListener = new Subject<ICategory>();
    private candidatesListener = new Subject<Candidate[]>();

    private eventCategoryInstance: any;

    constructor(private ethService: EthService) {}

    getCategoryListener() {
        return this.categoryListener.asObservable();
    }

    getCandidatesListener() {
        return this.candidatesListener.asObservable();
    }

    async getCategory(address: string) {
        const now = Date.now();

        try {
            this.eventCategoryInstance = await EventCategoryContract.at(address);
            // console.log(this.eventCategoryInstance);
            const title = await this.eventCategoryInstance.title();
            const description = await this.eventCategoryInstance.description();
            const startDate = await this.eventCategoryInstance.startDate();
            const endDate = await this.eventCategoryInstance.endDate();

            const category: ICategory = {
                address,
                title,
                description,
                isLive: (now >= (startDate.toNumber()) * 1000) && (now <= (endDate.toNumber() * 1000))
            };

            this.categoryListener.next(category);

            this.getCandidates();
        } catch (error) {
            console.log(error);
        }
    }

    async getCandidates() {
        const allCandidates = [];

        const candidatesCount = await this.eventCategoryInstance.candidatesCount();
        // console.log(candidatesCount);
        for (let i = 1; i <= candidatesCount.toNumber(); i++) {
            const candidate = await this.eventCategoryInstance.candidates(i);
            // console.log(candidate);
            allCandidates.push({
                id: candidate[0].toNumber(),
                name: candidate[1],
                photo: candidate[2],
                numberOfVotes: candidate[3].toNumber(),
                deleted: candidate[4]
            });
        }

        this.candidatesListener.next(allCandidates);
    }

    async addCandidate(name: string, photo: string) {
        try {
            const receipt = await this.eventCategoryInstance.addCandidate(name, photo, {
                from: this.ethService.getCurrentAccount()
            });
            // console.log(receipt);
            this.getCandidates();
        } catch (error) {
            console.log(error);
        }
    }

    async castVote(id: number) {
        try {
            const receipt = await this.eventCategoryInstance.castVote(id, {
                from: this.ethService.getCurrentAccount(),
                value: 1000000
            });
            // console.log(receipt);
            this.getCandidates();
        } catch (error) {
            console.log(error);
        }
    }
}

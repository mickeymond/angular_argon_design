import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ICategory } from './category.model';

declare let web3: any;
declare let require: any;

const _ = require('lodash');
const TruffleContract = require('truffle-contract');

const EventCategoryContract = TruffleContract(require('../../../../contracts/EventCategory.json'));
EventCategoryContract.setProvider(web3.currentProvider);

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private categoryListener = new Subject<ICategory>();

    private eventCategoryInstance: any;

    constructor() {}

    getCategoryListener() {
        return this.categoryListener.asObservable();
    }

    async getCategory(address: string) {
        try {
            this.eventCategoryInstance = await EventCategoryContract.at(address);
            // console.log(this.eventCategoryInstance);
            const title = await this.eventCategoryInstance.title();
            const description = await this.eventCategoryInstance.description();

            const category: ICategory = {
                title,
                description
            };

            this.categoryListener.next(category);

            const candidatesCount = await this.eventCategoryInstance.candidatesCount();
            // console.log(candidatesCount);
            for (let i = 1; i <= candidatesCount.toNumber(); i++) {
                const candidate = await this.eventCategoryInstance.candidates(i);
                console.log(candidate);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async addCandidate(name: string, photo: string) {
        try {
            const receipt = await this.eventCategoryInstance.addCandidate(name, photo, {
                from: web3.eth.defaultAccount
            });
            console.log(receipt);
        } catch (error) {
            console.log(error);
        }
    }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IEvent } from './event.model';
import { EthService } from './eth.service';
import { ICategory } from './category.model';

declare let web3: any;
declare let require: any;

const _ = require('lodash');
const TruffleContract = require('truffle-contract');

const EventContract = TruffleContract(require('../../../build/contracts/Event.json'));
EventContract.setProvider(web3.currentProvider);

const EventCategoryContract = TruffleContract(require('../../../build/contracts/EventCategory.json'));
EventCategoryContract.setProvider(web3.currentProvider);

const colors = ['primary', 'warning', 'success', 'info'];

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private eventListener = new Subject<IEvent>();
    private categoriesListener = new Subject<any>();

    private eventContractInstance: any;

    constructor(private ethService: EthService) {}

    getEventListener() {
        return this.eventListener.asObservable();
    }

    getCategoriesListener() {
        return this.categoriesListener.asObservable();
    }

    async getEvent(address: string) {
        const now = Date.now();

        this.eventContractInstance = await EventContract.at(address);
        // console.log(this.eventContractInstance);
        const creator = await this.eventContractInstance.creator();
        const title = await this.eventContractInstance.title();
        const description = await this.eventContractInstance.description();
        const startDate = await this.eventContractInstance.startDate();
        const endDate = await this.eventContractInstance.endDate();

        const event: IEvent = {
            address,
            creator,
            title,
            description,
            start: startDate.toNumber(),
            end: endDate.toNumber(),
            color: _.sample(colors),
            isLive: (now >= (startDate.toNumber()) * 1000) && (now <= (endDate.toNumber() * 1000))
        };

        // console.log(this.event);
        this.eventListener.next(event);

        this.getCategories();
    }

    async addCategory(title: string, description: string) {
        try {
            const receipt = await this.eventContractInstance.addCategory(title, description, {
                from: this.ethService.getCurrentAccount()
            });
            // console.log(receipt);

            this.getCategories();
        } catch (error) {
            console.log(error);
        }
    }

    async getCategories() {
        const allCategories: ICategory[] = [];

        const now = Date.now();

        const categories = await this.eventContractInstance.getCategories();
        for (const address of categories) {
            // console.log(address);
            const categoryContract = await EventCategoryContract.at(address);

            const title = await categoryContract.title();
            const description = await categoryContract.description();
            const startDate = await categoryContract.startDate();
            const endDate = await categoryContract.endDate();

            allCategories.push({
                address,
                title,
                description,
                isLive: (now >= (startDate.toNumber()) * 1000) && (now <= (endDate.toNumber() * 1000))
            });
        }

        this.categoriesListener.next(allCategories);
    }
}

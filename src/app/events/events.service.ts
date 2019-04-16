import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { EthService } from '../eth.service';
import { IEvent } from './event.model';

declare let web3: any;
declare let require: any;

const _ = require('lodash');
const TruffleContract = require('truffle-contract');

const EventContract = TruffleContract(require('../../contracts/Event.json'));
EventContract.setProvider(web3.currentProvider);

const colors = ['primary', 'warning', 'success', 'info'];

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private eventsListener = new Subject<any[]>();

    private events: any[];

    constructor(private ethService: EthService) {}

    getEventsListener() {
        return this.eventsListener.asObservable();
    }

    async fetchEventsData(events: string[], eventCreator: any, search: any) {
        const allEvents: IEvent[] = [];
        for (const address of events.reverse()) {

            const eventContract = await EventContract.at(address);

            const creator = await eventContract.creator();
            const title = await eventContract.title();
            const description = await eventContract.description();
            const startDate = await eventContract.startDate();
            const endDate = await eventContract.endDate();

            allEvents.push({
                address,
                creator,
                title,
                description,
                start: startDate.toNumber() * 1000,
                end: endDate.toNumber() * 1000,
                color: _.sample(colors)
            });
        }
        // console.log(allEvents);

        if (eventCreator) {
            this.events = _.filter(allEvents, (event: IEvent) => event.creator === eventCreator);
            this.eventsListener.next(this.events);
        } else if (search) {
            this.events = _.filter(allEvents, (event: IEvent) => {
                return (event.title.includes(search) || event.description.includes(search));
            });
            this.eventsListener.next(this.events);
        } else {
            const now = Date.now();

            this.events = _.filter(allEvents, (event: IEvent) => (now >= event.start && now <= event.end));
            this.eventsListener.next(this.events);
        }
    }
}

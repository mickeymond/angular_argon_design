import { Injectable } from '@angular/core';
import { EthService } from '../eth.service';
import { Subject } from 'rxjs';

const eventJson = require('../../contracts/Event.json');
const _ = require('lodash');

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private eventsListener = new Subject<any[]>();

    private events: any[];
    private colors = ['primary', 'warning', 'success', 'info'];

    constructor(private ethService: EthService) {}

    getEventsListener() {
        return this.eventsListener.asObservable();
    }

    async fetchEventsData(events: string[], creator: any) {
        const allEvents = [];
        for(let address of events.reverse()) {
            const eventContract = await this.ethService.web3.eth.Contract(eventJson.abi, address);
            const creator = await eventContract.methods.creator().call();
            const title = await eventContract.methods.title().call();
            const description = await eventContract.methods.description().call();
            const startDate = await eventContract.methods.startDate().call();
            const endDate = await eventContract.methods.endDate().call();
            allEvents.push({
                address,
                creator,
                title,
                description,
                start: startDate.toNumber(),
                end: endDate.toNumber(),
                color: _.sample(this.colors)
            });
        }
        if(creator) {
            this.events = _.filter(allEvents, event => event.creator === creator);
            this.eventsListener.next(this.events);
        } else {
            this.events = allEvents;
            this.eventsListener.next(this.events);
        }
    }
}

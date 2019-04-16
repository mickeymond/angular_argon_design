import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EthService } from '../shared/eth.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit, OnDestroy {
    private ethEventsSubscription: Subscription;
    private eventsSubscription: Subscription;

    events = [];

    constructor(private ethService: EthService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.eventsSubscription = this.ethService.getEventsListener().subscribe(events => {
            this.events = events;
            // console.log(events);
        });

        this.ethEventsSubscription = this.ethService.getEthEventsListener().subscribe((events) => {
            this.route.queryParamMap.subscribe((queryMap: ParamMap) => {
                if (queryMap.has('creator')) {
                    this.ethService.fetchEventsData(events, queryMap.get('creator'), false);
                } else {
                    this.ethService.fetchEventsData(events, false, false);
                }
            });
        });

        this.ethService.getEvents();
    }

    ngOnDestroy() {
        this.ethEventsSubscription.unsubscribe();
        this.eventsSubscription.unsubscribe();
    }
}

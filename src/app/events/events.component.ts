import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EthService } from '../eth.service';
import { EventsService } from './events.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit, OnDestroy {
    private ethEventsSubscription: Subscription;
    private eventsSubscription: Subscription;

    events = [];

    constructor(private ethService: EthService, private eventsService: EventsService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.eventsSubscription = this.eventsService.getEventsListener().subscribe(events => {
            this.events = events;
            // console.log(events);
        });

        this.ethEventsSubscription = this.ethService.getEthEventsListener().subscribe((events) => {
            this.route.queryParamMap.subscribe((queryMap: ParamMap) => {
                if (queryMap.has('creator')) {
                    this.eventsService.fetchEventsData(events, queryMap.get('creator'), false);
                } else {
                    this.eventsService.fetchEventsData(events, false, false);
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

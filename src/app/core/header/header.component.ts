import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

import { EthService } from '../../eth.service';
import { EventsService } from 'src/app/events/events.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    private ethStatusListenerSubscription: Subscription;
    private ethAccountSubscription: Subscription;
    private ethEventsSubscription: Subscription;

    isDappBrowser = true;
    hasSearch = false;
    creator: string;
    private events = [];

    constructor(private ethService: EthService, private router: Router, private eventsService: EventsService) {}

    searchEvents(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.eventsService.fetchEventsData(this.events, false, form.value.search);
        form.resetForm();
    }

    ngOnInit() {
        this.ethAccountSubscription = this.ethService.getEthAccountListener().subscribe(account => {
            this.creator = account;
        });

        this.ethStatusListenerSubscription = this.ethService.getEthStatusListener().subscribe((status) => {
            this.isDappBrowser = status;
        });

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((path: NavigationEnd) => {
            if (path.url.startsWith('/events')) {
                this.hasSearch = true;
            } else {
                this.hasSearch = false;
            }
        });

        this.ethEventsSubscription = this.ethService.getEthEventsListener().subscribe(events => {
            this.events = events;
        });
    }

    ngOnDestroy() {
        this.ethStatusListenerSubscription.unsubscribe();
        this.ethAccountSubscription.unsubscribe();
        this.ethEventsSubscription.unsubscribe();
    }
}

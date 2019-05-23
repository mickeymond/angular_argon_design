import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { EventService } from '../../shared/event.service';
import { IEvent } from '../../shared/event.model';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html'
})
export class EventDetailComponent implements OnInit, OnDestroy {
    private eventSubscription: Subscription;
    private categoriesSubscription: Subscription;

    event: IEvent;
    categories = [];
    private eventAddress: string;

    constructor(private route: ActivatedRoute, private eventService: EventService) {}

    addCategory(form: NgForm) {
        if (form.invalid) {
            return;
        }
        // console.log(form.value);
        this.eventService.addCategory(form.value.title, form.value.description);
        form.resetForm();
    }

    ngOnInit() {
        this.eventSubscription = this.eventService.getEventListener().subscribe(event => {
            this.event = event;
            // console.log(this.event);
        });

        this.categoriesSubscription = this.eventService.getCategoriesListener().subscribe(categories => {
            this.categories = categories;
        });

        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            this.eventAddress = paramMap.get('address');
            // console.log(this.eventAddress);
            this.eventService.getEvent(this.eventAddress);
        });
    }

    ngOnDestroy() {
        this.eventSubscription.unsubscribe();
        this.categoriesSubscription.unsubscribe();
    }
}

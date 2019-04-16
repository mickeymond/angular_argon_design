import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CategoryDetailComponent } from './event-detail/category-detail/category-detail.component';

@NgModule({
    declarations: [
        EventsComponent,
        CreateEventComponent,
        EventDetailComponent,
        CategoryDetailComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ]
})
export class EventsModule {}

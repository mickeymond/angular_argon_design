import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { HomeComponent } from './core/home/home.component';
import { EthGuard } from './eth.guard';
import { InfoComponent } from './core/info/info.component';
import { CategoryDetailComponent } from './events/event-detail/category-detail/category-detail.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'events', component: EventsComponent, canActivate: [EthGuard] },
  { path: 'event/:address', component: EventDetailComponent, canActivate: [EthGuard], children: [
    { path: 'category/:cAddress', component: CategoryDetailComponent }
  ] },
  { path: 'info', component: InfoComponent, canActivate: [EthGuard] },
  { path: 'create', component: CreateEventComponent, canActivate: [EthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EthGuard]
})
export class AppRoutingModule { }

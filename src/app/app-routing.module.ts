import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './auth/register/register.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'events/:address', component: EventDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateEventComponent },
  { path: '**', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

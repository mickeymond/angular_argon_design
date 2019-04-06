import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventsComponent } from './events/events.component';
// import { RegisterComponent } from './auth/register/register.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';
import { EthGuard } from './eth.guard';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'events', component: EventsComponent, canActivate: [EthGuard] },
  { path: 'events/:address', component: EventDetailComponent, canActivate: [EthGuard] },
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateEventComponent, canActivate: [EthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EthGuard]
})
export class AppRoutingModule { }

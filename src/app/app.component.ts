import { Component, OnInit, OnDestroy } from '@angular/core';
import { EthService } from './eth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private ethListenerSubscription: Subscription;
  private ethMessageSubscription: Subscription;
  private ethEventsSubscription: Subscription;

  isDappBrowser = false;
  ethMessage: string;

  constructor(private ethService: EthService) {}

  ngOnInit() {
    this.ethListenerSubscription = this.ethService.getEthStatusListener().subscribe((status) => {
      this.isDappBrowser = status;
    });

    this.ethMessageSubscription = this.ethService.getEthMessageListener().subscribe((message) => {
      this.ethMessage = message;
    });

    this.ethEventsSubscription = this.ethService.getEthEventsListener().subscribe((events) => {
      console.log(events);
    });
  }

  ngOnDestroy() {
    this.ethListenerSubscription.unsubscribe();
    this.ethMessageSubscription.unsubscribe();
    this.ethEventsSubscription.unsubscribe();
  }
}

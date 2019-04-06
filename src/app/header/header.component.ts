import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EthService } from '../eth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    isDappBrowser = false;
    private ethListenerSubscription: Subscription;

    constructor(private ethService: EthService) {}

    ngOnInit() {
        this.ethListenerSubscription = this.ethService.getEthStatusListener().subscribe((status) => {
        this.isDappBrowser = status;
        // console.log(status);
        });
    }

    ngOnDestroy() {
        this.ethListenerSubscription.unsubscribe();
    }
}

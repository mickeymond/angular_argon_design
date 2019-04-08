import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EthService } from '../eth.service';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    isDappBrowser = true;
    hasSearch = false;
    creator: string;
    private ethStatusListenerSubscription: Subscription;
    private ethAccountSubscription: Subscription;


    constructor(private ethService: EthService, private router: Router) {}

    ngOnInit() {
        this.ethAccountSubscription = this.ethService.getEthAccountListener().subscribe(account => {
            this.creator = account;
        });

        this.ethStatusListenerSubscription = this.ethService.getEthStatusListener().subscribe((status) => {
            this.isDappBrowser = status;
        });

        this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((path: NavigationEnd) => {
            if(path.url.startsWith('/events')) {
                this.hasSearch = true;
            } else {
                this.hasSearch = false;
            }
        });
    }

    ngOnDestroy() {
        this.ethStatusListenerSubscription.unsubscribe();
        this.ethAccountSubscription.unsubscribe();
    }
}

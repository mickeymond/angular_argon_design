import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EthService } from './eth.service';

@Injectable()
export class EthGuard implements CanActivate {
    constructor(private ethService: EthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const isDappBrowser = this.ethService.getIsDappBrowser();
        if (!isDappBrowser) {
            this.router.navigate(['/']);
        }
        return isDappBrowser;
    }
}

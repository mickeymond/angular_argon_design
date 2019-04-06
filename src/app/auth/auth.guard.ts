import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class AuthGuard implements CanActivate {
    isAuthenticated: boolean = false;

    constructor(private afAuth: AngularFireAuth, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.afAuth.authState.subscribe(state => {
            console.log(state);
            if (!state) {
                this.router.navigate(['/login']);
            } else {
                this.isAuthenticated = true;
            }
        });
        return this.isAuthenticated;
    }
}
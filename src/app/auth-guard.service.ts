// this is to protect our routes by running code at a specified time

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable() // in order to injext the auth.service.ts
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private authServ: AuthService,
        private router: Router
        ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        return this.authServ.isAuthenticated()
            .then((authenticated: boolean) => {
                if(authenticated) {
                    return true
                } else {
                    // not authenticated, navigate away (home)
                    this.router.navigate(['/'])
                }
            }
            )
        }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state)
    }
}
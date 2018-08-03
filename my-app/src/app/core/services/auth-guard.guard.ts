import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectService } from './connect.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
constructor(
  private connectService: ConnectService
) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('AuthGuard#canActivate called');
    return this.connectService.isConnected$;
  }
}

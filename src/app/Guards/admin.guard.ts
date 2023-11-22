import { Injectable } from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor( private router: Router,_AuthService:AuthService ) {
    _AuthService.getProfile();
   }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
     if (localStorage.getItem('userToken')!==null && localStorage.getItem('role')=="SuperAdmin"){
    return true
  }
  else{
    this.router.navigate(['/dashboard'])
    return false;
  }
   
  }

}


 
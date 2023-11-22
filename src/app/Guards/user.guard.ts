import { Injectable } from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';


@Injectable()
export class UserGuard implements CanActivate {

  constructor( private router: Router,private _AuthService:AuthService ) { 
    _AuthService.getProfile()
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('userToken')!==null && localStorage.getItem('role')=="SuperUser"){
    return true
  }
  else{
    this.router.navigate(['/dashboard'])
    return false;
  }
     

}














  // if (localStorage.getItem('userToken')!==null && localStorage.getItem('role')=="SuperUser"){
  //   return true
  // }
  // else{
  //   return false;
  // }
};
 // if (localStorage.getItem('userToken')!==null && localStorage.getItem('role')=="SuperUser"){
  //   return true
  // }
  // else{
  //   return false;
  // }
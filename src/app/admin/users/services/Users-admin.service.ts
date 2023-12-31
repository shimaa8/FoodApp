import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminService {

constructor(private _HttpClient:HttpClient) { }

getAllUsers(parms:any):Observable<any>{
  return this._HttpClient.get('Users',{params:parms})
}
deletUsers(id:number):Observable<any>{
  return this._HttpClient.delete(`Users/${id}`)

}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/models/login';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _HttpClient:HttpClient) { }

onlogin(data:ILogin){
  return this._HttpClient.post('Users/Login',data)
}
// onadmin(data:string){
//   return this._HttpClient.post('auth/admin',data)
// }
onRequestRestPassword(data:string){
  return this._HttpClient.post('Users/Reset/Request',{email:data})
}

onRestPassword(data:string){
  return this._HttpClient.post('Users/Reset',data)
}


}

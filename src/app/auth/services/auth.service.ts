import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { ILogin } from 'src/app/models/login';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {
role:string|null='';
constructor(private _HttpClient:HttpClient) {
  if(localStorage.getItem('userToken')!==null){
    this.getProfile();
  }
 }

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

getProfile(){
 let enecode:any= localStorage.getItem('userToken');
 let decode:any=jwtDecode(enecode);
 console.log(decode.userGroup);
 console.log(decode.userName);
 localStorage.setItem('role',decode.userGroup);
 localStorage.setItem('userName',decode.userName);
 this.getRole();

 
 
}
getRole(){
  if(localStorage.getItem('role')!==null&&localStorage.getItem('role')){

   this.role= localStorage.getItem('role');
  }
}
}

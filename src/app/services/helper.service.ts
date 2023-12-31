import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private darkMode = false;

 


constructor(private _HttpClient:HttpClient) { }
getTags():Observable<any>{
return this._HttpClient.get('tag');
}
getCategories():Observable<any>{
  return this._HttpClient.get('Category',{params:{pageSize:100}})

}
getCurrentUser():Observable<any>{
  return this._HttpClient.get('Users/CurrentUser');

}
isDarkMode() {
  return this.darkMode;
}
setDarkMode(isDarkMode: boolean) {
  this.darkMode = isDarkMode;
  if (isDarkMode) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}
}



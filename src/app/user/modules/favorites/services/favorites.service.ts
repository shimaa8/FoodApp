import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

constructor(private _HttpClient:HttpClient) { }


onAddtoFav(id:number):Observable<any>{
  return this._HttpClient.post('userRecipe',{recipeId:id})
}
ongetAllFav():Observable<any>{
  return this._HttpClient.get('userRecipe');
}
onRemoveFav(id:number):Observable<any>{
  return this._HttpClient.delete(`userRecipe/${id}`);
}
}

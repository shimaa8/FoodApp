import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
myFav:any;
pageSize:number=20;
pageNumber:number|undefined=1;
  TableResponse: any;
  constructor(private _ToastrService :ToastrService,private _FavoritesService:FavoritesService) { }

  ngOnInit() {
    this.getAllFav();
  }

  getAllFav(){
   this._FavoritesService.ongetAllFav().subscribe({
    next:(res)=>{
      console.log(res);
      this.myFav=res.data;
      
    }
   })
  }
  onRemoveFav(id:number){
    this._FavoritesService.onRemoveFav(id).subscribe( {
      next:(res)=>{
        console.log(res);
        this.myFav=res.data;
        
      },error:()=>{

      },complete:()=>{
         this._ToastrService.success('Removed From Favorite','success');
         this.getAllFav();
      }
    })
  }
  handlePageEvent(e: PageEvent) {
    console.log(e);
    
    this.pageSize=e.pageSize;
    this.pageNumber=this.TableResponse?.pageNumber;
    this.gettableData()
    
  }
  gettableData() {
    throw new Error('Method not implemented.');
  }

  
}

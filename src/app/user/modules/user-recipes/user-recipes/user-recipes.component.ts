import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IRecipeTable, IRecipe, ITag } from 'src/app/admin/recipes/models/recipe';
import { RecipeService } from 'src/app/admin/recipes/services/recipe.service';
import { HelperService } from 'src/app/services/helper.service';
import { RecipeDataComponent } from '../recipe-data/recipe-data.component';
import { FavoritesService } from '../../favorites/services/favorites.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.css']
})
export class UserRecipesComponent implements OnInit {
  searchValue:string=''
  pageSize:number=20;
  pageNumber:number|undefined=1;
  TableResponse:IRecipeTable|undefined;
  TableData:IRecipe[]=[];
  tagId:any;
  RecipeData:any;
  tags:ITag[]=[];
data: any;

  constructor(private _ToastrService:ToastrService,private _FavoritesService:FavoritesService, private _RecipeService:RecipeService,private _HelperService:HelperService,public dialog: MatDialog
     ) { }

  ngOnInit() {
    this.getAllTags();
    this.gettableData()
  }


  openDialog(reipeItem:IRecipe) {
   const dialogRef= this.dialog.open(RecipeDataComponent, {
      data: reipeItem,
      width:'40%'
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log(result);
        this.addToFav(result);

      }
      
    });

  }

  addToFav(id:number){
    this._FavoritesService.onAddtoFav(id).subscribe({
      next:(res)=>{
       console.log(res);
       
      },error:(err)=>{
        console.log(err);
        
      },complete:()=>{
          this._ToastrService.success('Added to Your Favorite','Success')
      }
    })

  }
  gettableData(){
    let parms=
      {
        pageSize:this.pageSize,
        PageNumber: this.pageNumber,
        name:this.searchValue,
       tagId: this.tagId
      }
    
    this._RecipeService.getRecipes(parms).subscribe({
    next:(res:IRecipeTable)=>{
         this.TableResponse=res; 
         this.TableData=this.TableResponse?.data;   
         console.log(this.TableData?.length);
         
    }    
    })
  
  }
getAllTags(){
  this._HelperService.getTags().subscribe({
  next:(res)=>{
    console.log(res);
    this.tags=res;
  }
  })
}
handlePageEvent(e: PageEvent) {
  console.log(e);
  
  this.pageSize=e.pageSize;
  this.pageNumber=this.TableResponse?.pageNumber;
  this.gettableData()
  
}
}

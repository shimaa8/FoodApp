import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IRecipeTable, IRecipe, ITag } from 'src/app/admin/recipes/models/recipe';
import { RecipeService } from 'src/app/admin/recipes/services/recipe.service';
import { HelperService } from 'src/app/services/helper.service';
import { RecipeDataComponent } from '../recipe-data/recipe-data.component';

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

  constructor(private _RecipeService:RecipeService,private _HelperService:HelperService,public dialog: MatDialog
     ) { }

  ngOnInit() {
    this.getAllTags();
    this.gettableData()
  }


  openDialog(reipeItem:IRecipe) {
    this.dialog.open(RecipeDataComponent, {
      data: reipeItem,
      width:'40%'
      
    });

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
}

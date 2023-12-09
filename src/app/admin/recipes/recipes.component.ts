import { Component, OnInit} from '@angular/core';
import { IRecipe, IRecipeTable, ITag } from './models/recipe';
import { RecipeService } from './services/recipe.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  searchValue:string=''
  pageSize:number=20;
  pageNumber:number|undefined=1;
  TableResponse:IRecipeTable|undefined;
  TableData:IRecipe[]=[];
  tagId:any;
  RecipeData:any;
  tags:ITag[]=[];
data: any;

  constructor(private _RecipeService:RecipeService,private _HelperService:HelperService
     ) { }

  ngOnInit() {
    this.getAllTags();
    this.gettableData();
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
    next:(data:IRecipeTable)=>{
         this.TableResponse=data; 
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




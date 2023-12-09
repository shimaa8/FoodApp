import { CategoryService } from './../../services/category.service';
import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../../models/category';

@Component({
  selector: 'app-Add-Edit-category',
  templateUrl: './Add-Edit-category.component.html',
  styleUrls: ['./Add-Edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {
categoryName:string=''
isUpdatedpage:boolean=false;
categoryData:any;
categoryId:any;

  constructor( @Optional() private dialogRef:MatDialogRef<AddEditCategoryComponent>,private _ActivatedRoute:ActivatedRoute,private _CategoryService:CategoryService) { 
   this.categoryId=_ActivatedRoute.snapshot.params['id'];
   if(this.categoryId){
    this.isUpdatedpage=true;
    this.getCategoryById(this.categoryId);
   }else{
    this.isUpdatedpage=false;
   }
  }

  ngOnInit() {
  }
onclose(){
  this.dialogRef.close();
}

getCategoryById(id:number){
  this._CategoryService.getCategorieById(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.categoryData=res;
      
    },error:(err)=>{

    },complete:()=>{
      
    }
  })
}
}

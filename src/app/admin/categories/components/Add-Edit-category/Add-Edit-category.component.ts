import { CategoryService } from './../../services/category.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import {   MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, @Optional() private dialogRef:MatDialogRef<AddEditCategoryComponent>,private _ActivatedRoute:ActivatedRoute,private _CategoryService:CategoryService) { 
 
  }

  ngOnInit() {
  }
onclose(){
  this.dialogRef.close();
}


}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { ICategory, ICategoryTable } from './models/category';
import {PageEvent} from '@angular/material/paginator';
import { AddEditCategoryComponent } from './components/Add-Edit-category/Add-Edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  searchValue:string=''
  pageSize:number=20;
  pageNumber:number|undefined=1;
  ResponseTable:ICategoryTable|undefined;
  TableData:ICategory[]|undefined=[];
  constructor(private _CategoryService:CategoryService,private dialog:MatDialog,private ToastrService:ToastrService ) { }

  ngOnInit() {
    
    this.gettableData();
  }
  
gettableData(){
  let parms=
    {
      pageSize:this.pageSize,
      PageNumber: this.pageNumber,
      name:this.searchValue
    }
  
  this._CategoryService.getCategories(parms).subscribe({
      
  })
  
 
 
}
handlePageEvent(e: PageEvent) {
  console.log(e);
  
  this.pageSize=e.pageSize;
  this.pageNumber=this.ResponseTable?.pageNumber;
  this.gettableData()
  
}

openDialog(): void {
  const dialogRef = this.dialog.open(AddEditCategoryComponent, {
    data: {},
    width:'40%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    if(result){
     this.onAddCategory(result);
    }
    
  });
}
  onAddCategory(data:String){
    this._CategoryService.AddCategory(data).subscribe({
      next:(res)=>{
        this.ResponseTable=res;
        this.TableData=this.ResponseTable?.data
        
      },error:(err)=>{
        console.log(err);
        
      },complete:()=>{
          this.ToastrService.success('Category Added ','fun');
          this.gettableData();
      }
    })
  }
}






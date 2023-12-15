import { ToastrService } from 'ngx-toastr';
import { DeleteDialogComponent } from 'src/app/sheard/delete-dialog/delete-dialog.component';
import { IUser, IUserTable } from './models/admin-users';
import { UsersAdminService } from './services/Users-admin.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICategory } from '../categories/models/category';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  pageSize:number=25;
  pageNumber:number|undefined=1;
  searchValue:string='';
  groupId:number=0;
  TableResponse:IUserTable|undefined
  TableData:IUser[]|undefined=[];
  _CategoryService: any;

  constructor(private _UsersAdminService:UsersAdminService,private dialog:MatDialog,private tostar :ToastrService) { }

  ngOnInit() {
    this.gettableData();
  }
  gettableData(){
    let parms={}
    if(this.groupId==1||this.groupId==2){
      parms={
      pageSize:this.pageSize,
      PageNumber: this.pageNumber,
      userName:this.searchValue,
      groups:this.groupId
      }
    }else{
      parms={
      pageSize:this.pageSize,
      PageNumber: this.pageNumber,
      userName:this.searchValue,
      
    }
  } 
      
    
    this._UsersAdminService.getAllUsers(parms).subscribe({
    next:(res:IUserTable)=>{
         this.TableResponse=res; 
         this.TableData=this.TableResponse?.data;   
         console.log(this.TableData);
         
    }    
    })
  
  }

  ondeletUsers(id:number){
    this._UsersAdminService.deletUsers(id).subscribe({
      next:(res:any)=>{
        this.TableResponse=res;
        this.TableData=this.TableResponse?.data
        
      },error:(err:any)=>{
        console.log(err);
        
      },complete:()=>{
          this.tostar.success('Users deleted successfully');
          this.gettableData();
      }
    })
  }
  
  openDeleteDialog(UserData:any): void {
    console.log(UserData);
    
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: UserData,
      width:'40%'
    });
    
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    console.log(result.id);
    
    if(result){
       this.ondeletUsers(result.id);      
    }
    
  });
  
}
}

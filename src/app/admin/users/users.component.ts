import { IUser, IUserTable } from './models/admin-users';
import { UsersAdminService } from './services/Users-admin.service';
import { Component, OnInit } from '@angular/core';

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
  TableData:IUser[]=[];
  constructor(private _UsersAdminService:UsersAdminService) { }

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
}

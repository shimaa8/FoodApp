import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  currentUser:any;
  Message:string=''
  imgSrc:any;
  hideConfirm:boolean=true
  editProfile=new FormGroup({
    userName:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    country:new FormControl(null,[Validators.required]),
    phoneNumber:new FormControl(null,[Validators.required,Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')]),
    profileImage:new FormControl(null,[Validators.required]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),  
    
  },
  )
  constructor(private router:Router, private _HelperService:HelperService,private toastr:ToastrService,private _AuthService:AuthService){
  }

  ngOnInit(): void {
    this.getCurrentUser()
   
  }
getCurrentUser(){
  this._HelperService.getCurrentUser().subscribe({
    next:(res)=>{
      
      this.currentUser=res;
      console.log(this.currentUser);
    },error:(err)=>{
      console.log(err);
      
    },complete:()=>{
    this.imgSrc='https://upskilling-egypt.com:443/api/v1/'+this.currentUser+this.imgSrc;
      this.editProfile.patchValue({
        userName:this.currentUser.userName,
        email:this.currentUser.email,
        country:this.currentUser.country,
        phoneNumber:this.currentUser.phoneNumber,
        confirmPassword:this.currentUser.confirmPassword,

      })
    }
  })
}

onSubmit(data:FormGroup){
    
  let mydata=new FormData();
  mydata.append('userName',data.value.userName);
  mydata.append('email',data.value.email);
  mydata.append('country',data.value.country);
  mydata.append('phoneNumber',data.value.phoneNumber);
  mydata.append('profileImage',this.imgSrc,this.imgSrc.name);

  mydata.append('confirmPassword',data.value.confirmPassword);
 
this._AuthService.edituser(mydata).subscribe({
  next:(res)=>{
    console.log(res);
    this.Message=res.message;
    
  },error:(err)=>{
    this.toastr.error( err.error.message,'Error');

  },complete:()=>{
    this.toastr.success( this.Message,'Successfully');
  }
})
  
  

  
  
}

files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.imgSrc=event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}

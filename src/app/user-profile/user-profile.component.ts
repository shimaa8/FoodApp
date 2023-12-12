import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentuser:any;
  Message:string=''
  imgSrc:any;
  hideConfirm:boolean=true
  editProfile=new FormGroup({
    userName:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    country:new FormControl(null,[Validators.required]),
    phoneNumber:new FormControl(null,[Validators.required,Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')]),
    profileImage:new FormControl(null,[Validators.required]),
   
    confirmPassword:new FormControl(null, new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,16}$'
      ),
    ]),),
  },
  )
  constructor(private _HelperService:HelperService,private toastr:ToastrService,private _AuthService:AuthService){
    

   
  }
 
  ngOnInit() {
    this.getCurrentuser();
  }

  getCurrentuser(){
    this._HelperService.getCurrentUser().subscribe({
      next:(res)=>{
        this.currentuser=res;
        console.log(this.currentuser);
        
        
      },error:(err)=>{
        console.log(err);
        
      },complete:()=>{
        this.imgSrc='https://upskilling-egypt.com:443/api/v1/'+this.currentuser+this.imgSrc;

        this.editProfile.patchValue({
          userName:this.currentuser.userName,
          email:this.currentuser.email,
          country:this.currentuser.country,
          phoneNumber:this.currentuser.phoneNumber,
          confirmPassword:this.currentuser.confirmPassword,






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
      
    },error:()=>{

    },complete:()=>{
      this.toastr.success( ' user Profile updated!','success');
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

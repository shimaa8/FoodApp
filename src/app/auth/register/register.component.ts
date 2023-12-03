import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestResetPasswordComponent } from '../request-reset-password/request-reset-password.component';
import { AuthService } from '../services/auth.service';
import { VerifyComponent } from '../verify/verify.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  imgSrc:any
  Message:string='';
  registerForm=new FormGroup({
    userName:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    country:new FormControl(null,[Validators.required]),
    phoneNumber:new FormControl(null,[Validators.required]),
    profileImage:new FormControl(null),
    password:new FormControl(null,[Validators.required]),
    confirmPassword:new FormControl(null,[Validators.required]),
  })
  constructor( private _AuthService:AuthService,private toastr: ToastrService,private dialog: MatDialog,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(data:FormGroup){
    let mydata=new FormData();
    console.log(data.value);
    let myMap=new Map(Object.entries(data.value));
    console.log(myMap);
    for (const [key,val] of myMap){
      console.log(key,val);
      console.log(data.value[key]);
      
      mydata.append(key,data.value[key]);
      
    }
    
    
    this._AuthService.onRegister(mydata).subscribe({
      next:(res:any)=>{
        console.log(res);
        
       
        
      },error:(err)=>{
        
        this.toastr.error(err.error.message, ' Error!');


        
      },complete:()=>{
         this.openDialog()        
        this.toastr.success(this.Message, 'successfully!');


      }
    })
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VerifyComponent, {
      data: {},
      width:'40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.onResetRequest(result);
      
    });
  }

  onResetRequest(data:string){
      
       
    this._AuthService.onRequestRestPassword(data).subscribe({
      next:(res)=>{
           console.log(res);
           
      },
      error:(err)=>{
        this.toastr.error(err.error.message, ' Error');

        
      },
      complete:()=>{
        this.toastr.success(this.Message, 'Successfully!');
        this.router.navigate(['/auth/ResetPassword']);
        localStorage.setItem('email',data);

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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  hide:boolean=true;
  userEmail=localStorage.getItem('email');
  ResetForm=new FormGroup({
    email:new FormControl(this.userEmail,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.pattern('/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    seed:new FormControl(null,[Validators.required]),

  })
  dialogRef: any;

  constructor( private _AuthService:AuthService,private toastr: ToastrService) { }

  ngOnInit() {
  }
  onSubmit(data:FormGroup){
    console.log(data);
    this._AuthService.onRestPassword(data.value).subscribe({
      next:(res:any)=>{
        console.log(res);
      
        
       
        
      },error:(err:any)=>{
        
        this.toastr.error('Hello world!', 'Toastr fun!');


        
      },complete:()=>{
        this.toastr.success('Hello world!', 'Toastr fun!');


      }
    })
    
    
  }
  
  
}

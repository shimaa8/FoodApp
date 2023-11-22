import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {
email:string='';
  dialogRef: any;
  constructor(_dialogRef: MatDialogRef<RequestResetPasswordComponent>) { }

  ngOnInit() {
  }
  
  onClose(){
    this.dialogRef.close();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {
email:string='';
  dialogRef: any;
  constructor(dialogRef: MatDialogRef<RequestResetPasswordComponent>) { }

  ngOnInit() {
  }
  
  onClose(){
    this.dialogRef.close();
  }
  
}

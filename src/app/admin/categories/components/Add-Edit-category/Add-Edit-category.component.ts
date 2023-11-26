import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-Add-Edit-category',
  templateUrl: './Add-Edit-category.component.html',
  styleUrls: ['./Add-Edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {
categoryName:string=''
  constructor(private dialogRef:MatDialogRef<AddEditCategoryComponent>) { }

  ngOnInit() {
  }
onclose(){
  this.dialogRef.close();
}
}

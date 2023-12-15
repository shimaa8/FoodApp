import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentuser:any;
  userName=localStorage.getItem('userName')?localStorage.getItem('userName'):'Guest';

  constructor(private _HelperService:HelperService,private router:Router){
    this._HelperService.getCurrentUser().subscribe({
      next:(res)=>{
        console.log(res);
        this.currentuser=res;
        
      },error:(err)=>{

      },complete:()=>{
        this.router.navigate(['/dashboard/userProfile'])
      }
    })
  }
 

}

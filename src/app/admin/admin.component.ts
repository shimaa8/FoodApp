import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

/** @title Basic drawer */
@Component({
  selector: 'app-admin',
  templateUrl: '../admin/admin.component.html',
  styleUrls: ['../admin/admin.component.css'],
  standalone: true,
  imports:[MatSidenavModule],
})
export class AdminComponent {
 
}

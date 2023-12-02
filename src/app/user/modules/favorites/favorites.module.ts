import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from 'src/app/sheard/sheard.module';
import { FavoritesComponent } from './favorites/favorites.component';


const routes:Routes=[
  {path:'',component:FavoritesComponent}
]

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SheardModule
  ]
})
export class FavoritesModule { }

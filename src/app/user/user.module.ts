import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from '../sheard/sheard.module';


const routes:Routes=[
  {path:'users',component:UserComponent},
  {path: 'recipes',loadChildren: () => import('./modules/user-recipes/user-recipes.module').then(m => m.UserRecipesModule)},
  {path: 'favorites',loadChildren: () => import('./modules/favorites/favorites.module').then(m => m.FavoritesModule)}, 
 

]

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SheardModule,
  ],
  declarations:[UserComponent]
})
export class UserModule { }

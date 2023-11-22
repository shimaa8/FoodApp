import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from '../sheard/sheard.module';
import { AdminComponent } from '../admin/admin.component';

const routes:Routes=[
  {path:'',component:AdminComponent},

  {path: 'users',loadChildren: () => import('./users/users.module').then(m => m.UsersModule)}, 
  {path: 'recipes',loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'categories',loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)},

       

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SheardModule,
  ],
  declarations:[]

})
export class AdminModule {
  constructor(){
  }
  
 }



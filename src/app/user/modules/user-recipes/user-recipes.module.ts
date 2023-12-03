import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserRecipesComponent } from './user-recipes/user-recipes.component';
import { SheardModule } from 'src/app/sheard/sheard.module';
import { RecipeDataComponent } from './recipe-data/recipe-data.component';

const routes:Routes=[
  {path:'',component:UserRecipesComponent}
]



@NgModule({
  declarations: [UserRecipesComponent,RecipeDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SheardModule
  ]
})
export class UserRecipesModule { }

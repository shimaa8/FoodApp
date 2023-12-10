import { SheardModule } from './../../sheard/sheard.module';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCategoryComponent } from './components/Add-Edit-category/Add-Edit-category.component';

const routes: Routes=[
  {path:'',component:CategoriesComponent},


]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SheardModule
    
  ],
  declarations: [CategoriesComponent,AddEditCategoryComponent]
})
export class CategoriesModule { }

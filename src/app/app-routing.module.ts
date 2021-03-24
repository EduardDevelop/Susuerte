import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeFormComponent } from './change-form/change-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "first", component:HomeComponent},
  {path: "firstt", component:ChangeFormComponent},
  {path:"**", pathMatch:"full", redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

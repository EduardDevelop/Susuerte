import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeComponentsComponent } from './change-components/change-components.component';
import { ChangeFormComponent } from './change-form/change-form.component';
import { HomeComponent } from './home/home.component';
import { JuegoComponent } from './juego/juego.component';
import { LoteriasComponent } from './loterias/loterias.component';
import { WarningComponent } from './warning/warning.component';

const routes: Routes = [
  {path: "home", component:ChangeComponentsComponent},
  {path: "loterias", component:LoteriasComponent},
  {path: "juego", component:JuegoComponent},
  {path: "first", component:HomeComponent},
  {path: "firstt", component:ChangeFormComponent},
  {path:"warning", component:WarningComponent},
  {path:"**", pathMatch:"full", redirectTo:'warning'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

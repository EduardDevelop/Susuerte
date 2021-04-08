import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilletesComponent } from './billetes/billetes.component';
import { ChangeComponentsComponent } from './change-components/change-components.component';
import { ChangeFormComponent } from './change-form/change-form.component';
import { HomeComponent } from './home/home.component';
import { IngresoNumeroComponent } from './ingreso-numero/ingreso-numero.component';
import { JuegoComponent } from './juego/juego.component';
import { LoteriasComponent } from './loterias/loterias.component';
import { OperadoresComponent } from './operadores/operadores.component';
import { PataUniaComponent } from './pata-unia/pata-unia.component';
import { TipoJuegoComponent } from './tipo-juego/tipo-juego.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WarningComponent } from './warning/warning.component';

const routes: Routes = [
  {path: "home", component:ChangeComponentsComponent},
  {path: "loterias", component:LoteriasComponent},
  {path: "juego", component:JuegoComponent},
  {path: "first", component:HomeComponent},
  {path: "firstt", component:ChangeFormComponent},
  {path:"warning", component:WarningComponent},
  {path:"tipo", component:TipoJuegoComponent},
  {path:"input", component:IngresoNumeroComponent},
  {path:"pago", component:BilletesComponent},
  {path:"extras", component:PataUniaComponent},
  {path:"operadores", component:OperadoresComponent},
  {path:"**", pathMatch:"full", redirectTo:'warning'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

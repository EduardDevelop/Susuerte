import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ChangeFormComponent } from './change-form/change-form.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalPayComponent } from './modal-pay/modal-pay.component';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { ModalAcceptComponent } from './modal-accept/modal-accept.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WarningComponent } from './warning/warning.component';
import { ChangeComponentsComponent } from './change-components/change-components.component';
import { LoteriasComponent } from './loterias/loterias.component';
import { JuegoComponent } from './juego/juego.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TipoJuegoComponent } from './tipo-juego/tipo-juego.component';
import { IngresoNumeroComponent } from './ingreso-numero/ingreso-numero.component';
import { BilletesComponent } from './billetes/billetes.component';
import { PataUniaComponent } from './pata-unia/pata-unia.component';
import { OperadoresComponent } from './operadores/operadores.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChangeFormComponent,
    ModalPayComponent,
    ModalAcceptComponent,
    ToolbarComponent,
    WarningComponent,
    ChangeComponentsComponent,
    LoteriasComponent,
    JuegoComponent,
    TipoJuegoComponent,
    IngresoNumeroComponent,
    BilletesComponent,
    PataUniaComponent,
    OperadoresComponent,
   
  ],
  entryComponents:[ModalPayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    BackButtonDisableModule.forRoot()
   
  ],
  providers: [],
  exports:[
    ToolbarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
BackButtonDisableModule.forRoot({
  preserveScrollPosition: true
})

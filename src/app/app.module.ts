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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChangeFormComponent,
    ModalPayComponent,
    ModalAcceptComponent,

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
  ],
  providers: [],
  exports:[
    ModalAcceptComponent,
    AppComponent,
    HomeComponent,
    ChangeFormComponent,
    ModalPayComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

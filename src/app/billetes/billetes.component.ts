import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalPayComponent } from '../modal-pay/modal-pay.component';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-billetes',
  templateUrl: './billetes.component.html',
  styleUrls: ['./billetes.component.css']
})
export class BilletesComponent implements OnInit {

  constructor(public dialog: MatDialog,private servicio: SignalrcustomService,private router:Router) { }
titulo="";

  ngOnInit(): void {
    if(this.servicio.acciones=="jugar"){
      this.titulo="Por favor elija el valór de su apuesta";
      this.servicio.tipoServicio="apuesta"
    
    }else   if(this.servicio.acciones=="recargas"){
      this.titulo="Por favor elija en valór de la recarga"
      this.servicio.tipoServicio="recarga"
    }else   if(this.servicio.acciones=="giros"){
      this.titulo="Por favor elija en valór del giro"
      this.servicio.tipoServicio="giro"
    }
  }
  valor(valor:string){
   
    this.servicio.valapuesta=valor;
if(this.servicio.pata=="no"&&this.servicio.unia=="no"){
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta }, disableClose: true});
}
if(this.servicio.pata=="si"&&this.servicio.unia=="no"){
  if(this.titulo=="Por favor elija el valór de su apuesta"){
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
    this.titulo="Por favor elija el valor de la pata"
    this.servicio.tipoServicio="pata"
    this.servicio.valapuesta=valor;
    
}else if(this.titulo=="Por favor elija el valor de la pata"){
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
  this.servicio.valpata=valor;  
  
  
  
}
  
}
if(this.servicio.pata=="si"&&this.servicio.unia=="si"){
  
  if(this.titulo=="Por favor elija el valór de su apuesta"){
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
    this.titulo="Por favor elija el valor de la pata"
    this.servicio.tipoServicio="pata"
    this.servicio.valapuesta=valor;
    
}else if(this.titulo=="Por favor elija el valor de la pata"){
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
  this.titulo="Por favor elija el valor de la uña"
  this.servicio.tipoServicio="uña"
  this.servicio.valpata=valor;  
  
  
  
}else if(this.titulo=="Por favor elija el valor de la uña" ){
 

  
  this.servicio.valunia=valor; 

  
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
  
  
}
  }
  

if(this.servicio.acciones=="recargas"){
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
  this.servicio.valrecarga=valor;
}
if(this.servicio.acciones=="giros"){
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
  this.servicio.valgiro=valor;
}
   if(this.servicio.juego=="2"){
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
   }  
   if(this.servicio.juego=="1"){
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
  } 
    
  }
  enviar(){
    if(this.servicio.juego=="4" ){
      this.router.navigate(['/extras'], {  });
    }else if(this.servicio.juego=="3"){

      this.router.navigate(['/extras'], {  });
    }else if(this.servicio.juego=="2"  ){
      this.router.navigate(['/juego'], {  });
    }else if(this.servicio.juego=="1")
{ 
  this.router.navigate(['/juego'], {  });
}else if(this.servicio.acciones=="recargas"){
  this.router.navigate(['/input'], {  });
}else if(this.servicio.acciones=="giros"){
  this.router.navigate(['/input'], {  });
}
  }
}

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
  console.log("FASEE"+this.servicio.fase);
  
    if(this.servicio.acciones=="jugar"&&this.servicio.fase==0){
      this.titulo="Por favor elija el valor de su apuesta";
      this.servicio.titulo="apuesta"
      this.servicio.tipoServicio="apuesta"
    
    }
    if(this.servicio.fase==2&&this.servicio.titulo==""){
      
      
      this.titulo="Por favor elija el valor de su apuesta";
      this.servicio.titulo="apuesta"
      this.servicio.tipoServicio="apuesta"

    }else if(this.servicio.fase==2&&this.servicio.titulo=="apuesta"){
      this.titulo="Por favor elija el valor de la pata";
      this.servicio.titulo="pata"
      this.servicio.tipoServicio="apuesta"
      this.servicio.fase=0;
    }
    if(this.servicio.fase==3&&this.servicio.titulo==""){
      this.titulo="Por favor elija el valor de su apuesta";
      this.servicio.titulo="apuesta"
      this.servicio.tipoServicio="apuesta"

    }
    else if(this.servicio.fase==3&&this.servicio.titulo=="apuesta"){
    
      this.titulo="Por favor elija el valor de la pata";
      this.servicio.titulo="pata"
      this.servicio.tipoServicio="apuesta"
    }else if(this.servicio.fase==3&&this.servicio.titulo=="pata"){
      this.titulo="Por favor elija el valor de la uña";
      this.servicio.titulo="unia"
    }
   else   if(this.servicio.acciones=="recargas"){
      this.titulo="Por favor elija en valor de la recarga"
      this.servicio.tipoServicio="recarga"
    }else   if(this.servicio.acciones=="giros"){
      this.titulo="Por favor elija en valor del giro"
      this.servicio.tipoServicio="giro"
    }
  }
  valor(valor:string){
   
if(this.servicio.pata=="no"&&this.servicio.unia=="no"){
  this.servicio.valunia='0'
  this.servicio.valpata='0'
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta }, disableClose: true});
}
if((this.servicio.pata=="si"&&this.servicio.unia=="no")){
  this.servicio.valunia='0'
  if(this.titulo=="Por favor elija el valor de su apuesta"){
    this.servicio.valapuesta=valor;
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
    this.titulo="Por favor elija el valor de la pata"
    this.servicio.titulo="pata"
    this.servicio.tipoServicio="pata"
   
    
}else if(this.titulo=="Por favor elija el valor de la pata"){
  this.servicio.valpata=valor; 
 
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valpata}, disableClose: true});
  
}
  
}
 if(this.servicio.pata=="si"&&this.servicio.unia=="si"){
  if(this.servicio.titulo=="apuesta"){
    this.titulo="Por favor elija el valor de la pata"
    this.servicio.valapuesta=valor;
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
    this.servicio.titulo="pata"

  }else
   if(this.servicio.titulo=="pata"){
    this.servicio.titulo="unia"
    this.servicio.valpata=valor;
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valpata}, disableClose: true});
    this.titulo="Por favor elija el valor de la uña"
  }else
   if(this.servicio.titulo=="unia"){
   
    this.servicio.valunia=valor;
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valunia}, disableClose: true});
    
  }
}
if(this.titulo=="Por favor elija el valor de la pata"&&this.servicio.fase==2){
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valpata}, disableClose: true});
 this.servicio.valunia='0'
  this.servicio.valpata=valor; 
  this.servicio.titulo="unia" 

}

  

if(this.servicio.acciones=="recargas"){
  this.servicio.valrecarga=valor;
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valrecarga}, disableClose: true});
 
}
if(this.servicio.acciones=="giros"){
  this.servicio.valgiro=valor;
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valgiro}, disableClose: true});
 
}
   if(this.servicio.juego=="2"){
     this.servicio.valpata='0'
     this.servicio.valunia='0'
     this.servicio.tipo='nada'
    this.servicio.valapuesta=valor;
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
   }  
   if(this.servicio.juego=="1"){
    this.servicio.valpata='0'
    this.servicio.valunia='0'
    this.servicio.tipo='nada'
     this.servicio.valapuesta=valor;
    let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
  } 
    
  }
  other(){
    this.router.navigate(['/input'], {  });
    this.servicio.other=true;
 
    
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


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ModalPayComponent } from '../modal-pay/modal-pay.component';
import { SignalrcustomService } from '../servicios/signalrcustom.service';


@Component({
  selector: 'app-ingreso-numero',
  templateUrl: './ingreso-numero.component.html',
  styleUrls: ['./ingreso-numero.component.css']
})
export class IngresoNumeroComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;
  Link=""
  titulo="";
  durationInSeconds = 5;
  constructor(public dialog: MatDialog,public snackBar: MatSnackBar,private servicio:SignalrcustomService, private router:Router) { }
  max:number;
 valores=[];
  input = new FormControl('', [Validators.required]);
  ngOnInit(): void {
    if(this.servicio.acciones=="jugar"&&this.servicio.other==true){
      var intro = document.getElementById('intro');
      intro.style.display='none';
    }
 if(this.servicio.acciones=="recargas"){
   this.titulo="Por favor ingrese el número de celular"
   var intro = document.getElementById('intro');
intro.style.display='none';
 }else if(this.servicio.acciones=="jugar"){
  this.titulo="Por favor ingrese su número ganador"
 }else if(this.servicio.acciones=="giros"){
  var intro = document.getElementById('intro');
  intro.style.display='none';
  this.titulo="Por favor ingrese el número de celular"

    
 }
if(this.servicio.other==true){
  this.titulo="Ingrese el valor"
}

  }
  valor(valor:string){
    if(this.servicio.other==true){
      if(this.valores.length<6){
        this.valores.push(valor);
        let val =this.valores.join(" ");
            this.input.setValue(val);
            
      }
   
      
    }
   
    if(this.servicio.acciones=="jugar"&&this.servicio.other==false){
      if(this.valores.length<Number(this.servicio.juego)){
        this.valores.push(valor);
        let val =this.valores.join(" ");
            this.input.setValue(val);
            
      }
   
    }else if(this.servicio.acciones=="recargas"&&this.servicio.other==false){
      if(this.valores.length<10){
        this.valores.push(valor);
        let val =this.valores.join(" ");
            this.input.setValue(val);
            
      }
    }else if(this.servicio.acciones=="giros"&&this.servicio.other==false){
      
      if(this.valores.length<10){
        this.valores.push(valor);
        let val =this.valores.join(" ");
            this.input.setValue(val);
            
      }
  
    }

  
   

    if(valor=="borrar"){
      this.input.setValue("");
    this.valores=[];
      
    }


    
  }
  aleatorio(){
    
    if(this.servicio.juego=="4"){
      this.valores=[];
      for (let index = 0; index < 4; index++) {
        let random=Math.floor(Math.random()*10);
        this.valores.push(random)
        let val =this.valores.join(" ");
        this.input.setValue(val);
        
     }
     this.servicio.numero=this.valores.join('')
    }
    if(this.servicio.juego=="3"){
      this.valores=[];
      for (let index = 0; index < 3; index++) {
        let random=Math.floor(Math.random()*10);
        this.valores.push(random)
        let val =this.valores.join(" ");
        this.input.setValue(val);
        
     }
     this.servicio.numero=this.valores.join('')
    }
    if(this.servicio.juego=="2"){
      this.valores=[];
      for (let index = 0; index < 2; index++) {
        let random=Math.floor(Math.random()*10);
        this.valores.push(random)
        let val =this.valores.join(" ");
        this.input.setValue(val);
        
     }
     this.servicio.numero=this.valores.join('')
    }
    if(this.servicio.juego=="1"){
      this.valores=[];
      let random=Math.floor(Math.random()*10);
      
        this.valores.push(Number(random))
        let val =this.valores.join(" ");
        this.input.setValue(val);
        
     
    }
    this.servicio.numero=this.valores.join('')
  }

    
 

  enviar(){
    if(this.servicio.acciones=="recargas"&&this.servicio.other==false){
      if(this.valores.length<10){
        this.snackBar.open('⚠️       Debe ingresar 10 numeros       ⚠️'+this.valores.length, '', {
          duration: 2000,
          panelClass: ['red-snackbar']
        });
        
            
      }
    }
    if(this.servicio.other==true){
     
      
      if(this.valores.length==4){
        this.valores[1]=0;
        this.valores[2]=0;
        this.valores[3]=0;
        
      }else if(this.valores.length==5){
        this.valores[2]=0;
        this.valores[3]=0;
        this.valores[4]=0;
       
      }else if(this.valores.length==6){
        this.valores[3]=0;
        this.valores[4]=0;
        this.valores[5]=0;
    
      }
      if(this.servicio.acciones=="jugar"&&this.servicio.juego=="4"){
        if(this.servicio.pata=="si"&&this.servicio.unia=='no'){
          console.log("fase2");
          
          this.servicio.fase=2;
        }else if(this.servicio.pata=="si"&&this.servicio.unia=='si'){
          this.servicio.fase=3;
        }else if(this.servicio.pata=="no"&&this.servicio.unia=='si'){
          this.servicio.fase=4;
        }
      }else   if(this.servicio.acciones=="juego"&&this.servicio.juego=="3"){
        if(this.servicio.pata=="si"&&this.servicio.unia=='no'){
          this.servicio.fase=2;
        }else if(this.servicio.pata=="si"&&this.servicio.unia=='si'){
          this.servicio.fase=3;
        }else if(this.servicio.pata=="no"&&this.servicio.unia=='si'){
          this.servicio.fase=4;
        }

      }
      this.servicio.valapuesta=this.valores.join('');

      if(this.valores.length>=4){
        this.valores=[];
        this.input.setValue("");
        let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:this.servicio.valapuesta}, disableClose: true});
        
        this.servicio.other=false;
      }else{
        this.snackBar.open('⚠️ No se pueden ingresar valores menores a $1000⚠️', '', {
          duration: 2000,
          panelClass: ['red-snackbar']
        });
      }
     
    }

  if(this.servicio.acciones=="giros"&&this.titulo=="Por favor ingrese el número de celular"){
    if(this.valores.length<10){
      this.snackBar.open('⚠️  Debe ingresar 10 numeros ⚠️ ', '', {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
      
          
    }
  }

  if(this.valores.length==10&&this.titulo=="Por favor ingrese el número de celular"){
    if(this.servicio.acciones=="recargas"){
      this.servicio.numeroCelular=this.valores.join('');
      this.valores=[];
      this.input.setValue("");
      this.router.navigate(['/pago'], {  });
    } if(this.servicio.acciones=="giros"){
      
      this.input.setValue("");
      this.titulo="ingrese su numero de cedula"
      this.servicio.numeroCelular=this.valores.join('');
      this.valores=[];
    }      
     
      }
      if(this.valores.length>0&&this.titulo=="ingrese su numero de cedula"){
          this.servicio.cedulaRemitente=this.valores.join('')
          this.valores=[];
          this.input.setValue("");
          this.titulo="ingrese el numero de cedula de quien recibe"
          
          
          }
          if(this.valores.length>0&&this.titulo=="ingrese el numero de cedula de quien recibe"){
            this.servicio.cedulaRecibe=this.valores.join('')
            this.valores=[];
            this.input.setValue("");
            
            this.router.navigate(['/pago'], {  });
            
            this.titulo="";
            }
      if(this.servicio.acciones=="giros"&&this.titulo=="ingrese su numero de cedula"){
        
        if(this.valores.length==0){
          this.snackBar.open('⚠️       Debe ingresar minimo 1 digito       ⚠️', '', {
            duration: 2000,
            panelClass: ['red-snackbar']
          });
          
              
        }

      }
      if(this.servicio.acciones=="giros"&&this.titulo=="ingrese el numero de cedula de quien recibe"){
        
        if(this.valores.length==0){
          this.snackBar.open('⚠️       Debe ingresar minimo 1 digito        ⚠️', '', {
            duration: 2000,
            panelClass: ['red-snackbar']
          });
          
              
        }else{

        }

      }
  
  if(this.servicio.acciones=="jugar"&&this.servicio.fase==0){
    if(this.servicio.juego=="4" ){
      if(this.valores.length<4){
        this.snackBar.open('⚠️       Debe ingresar 4 numeros       ⚠️', '', {
          duration: 2000,
          panelClass: ['red-snackbar']
        });
        
            
      }else if(this.valores.length==4){
        this.servicio.numero=this.valores.join('');
        this.router.navigate(['/extras'], {  });
      }
      
    }

    if(this.servicio.juego=="3" ){
      if(this.valores.length<3){
        this.snackBar.open('⚠️      Debe ingresar 3 numeros       ⚠️', '', {
          duration: 2000,
          panelClass: ['red-snackbar']
        });
        
            
      }else if(this.valores.length==3){
        this.servicio.numero=this.valores.join('');
        this.router.navigate(['/extras'], {  });
      }
      
    }

    if(this.servicio.juego=="2" ){
      if(this.valores.length<2){
        this.snackBar.open('⚠️     Debe ingresar 2 numeros   ⚠️', '', {
          duration: 2000,
          panelClass: ['red-snackbar']
        });
        
            
      }else if(this.valores.length==2){
        this.servicio.numero=this.valores.join('');
        this.router.navigate(['/pago'], {  });
      }
      
    }

    if(this.servicio.juego=="1" ){
      if(this.valores.length<1){
        this.snackBar.open('⚠️     Debe ingresar 1 numero      ⚠️', '', {
          duration: 2000,
          panelClass: ['red-snackbar']
        });
        
            
      }else if(this.valores.length==1){
        this.servicio.numero=this.valores.join('');
        this.router.navigate(['/pago'], {  });
      }
      
    }
  
  }

 




  }
  back(){
    this.servicio.other=false;
    if(this.servicio.acciones=="jugar"){
      this.router.navigate(['/juego'], {  });
    }else if(this.servicio.acciones=="recargas"){
      this.router.navigate(['/operadores'], {  });
    }else if(this.servicio.acciones=="giros"){
      this.router.navigate(['/first'], {  });
    }
  }

}


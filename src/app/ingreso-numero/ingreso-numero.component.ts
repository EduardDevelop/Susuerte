import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  constructor(public snackBar: MatSnackBar,private servicio:SignalrcustomService, private router:Router) { }
  max:number;
 valores=[];
  input = new FormControl('', [Validators.required]);
  ngOnInit(): void {
 if(this.servicio.acciones=="recargas"){
   this.titulo="Por favor ingrese el número de celular"
 }else if(this.servicio.acciones=="jugar"){
  this.titulo="Por favor ingrese su número ganador"
 }else if(this.servicio.acciones=="giros"){
  this.titulo="Por favor ingrese el número de celular"

    
 }
  }
  valor(valor:string){
   
    if(this.servicio.acciones=="jugar"){
      if(this.valores.length<Number(this.servicio.juego)){
        this.valores.push(valor);
        let val =this.valores.join(" ");
            this.input.setValue(val);
            
      }
   
    }else if(this.servicio.acciones=="recargas"){
      if(this.valores.length<10){
        this.valores.push(valor);
        let val =this.valores.join(" ");
            this.input.setValue(val);
            
      }
    }else if(this.servicio.acciones=="giros"){
      
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
  enviar(){

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
      this.servicio.numeroCelular=this.valores.join();
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
          this.snackBar.open('⚠️       Debe ingresar minimo1 digito        ⚠️', '', {
            duration: 2000,
            panelClass: ['red-snackbar']
          });
          
              
        }else{

        }

      }
  if(this.servicio.acciones=="recargas"){
    if(this.valores.length<10){
      this.snackBar.open('⚠️       Debe ingresar 10 numeros       ⚠️', '', {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
      
          
    }
  }
  if(this.servicio.acciones=="jugar"){
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
    if(this.servicio.acciones=="jugar"){
      this.router.navigate(['/juego'], {  });
    }else if(this.servicio.acciones=="recargas"){
      this.router.navigate(['/operadores'], {  });
    }else if(this.servicio.acciones=="giros"){
      this.router.navigate(['/first'], {  });
    }
  }

}


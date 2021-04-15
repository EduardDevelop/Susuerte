import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangeFormComponent } from '../change-form/change-form.component';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-modal-accept',
  templateUrl: './modal-accept.component.html',
  styleUrls: ['./modal-accept.component.css']
})
export class ModalAcceptComponent implements OnInit {
titulo=''
dialogRef:any;
interval;
  constructor(private servicio:SignalrcustomService,public dialog: MatDialog, private router:Router) { 
if(this.servicio.acciones=='jugar'){
  this.titulo="¡Mucha Suerte!"
}else if(this.servicio.acciones=='recargas'){
this.titulo="Recargas"
}else if(this.servicio.acciones=='giros'){
  this.titulo="Giro"
  }
  }
  time=0;
  restante:Number;
  singal="";
  ngOnInit(): void {
    
    this.servicio.emNotificaR.subscribe((valorR) =>{
      this.restante=Number(valorR);
   
    });
         
      this.startTimer();
      
      
    
  }
  imprimir()
  {
    if(this.servicio.acciones=="jugar"){
      let valapuesta=Number(this.servicio.valapuesta)
      let valpata=Number(this.servicio.valpata)
      let valunia=Number(this.servicio.valunia)
      let total=valapuesta+valpata+valunia;
      let totals=String(total);
      let dato="0001"+"+"+this.servicio.loteria+"+"+this.servicio.numero+"+"+this.servicio.tipo+"+"+this.servicio.valapuesta+"+"+this.servicio.valpata+"+"+this.servicio.valunia+"+"+totals;
      this.servicio.hubConnection.invoke("SendMessage", "chance",dato);
      this.servicio.hubConnection.invoke("SendMessage", "imprimir", "");
    
    }else if(this.servicio.acciones=="recargas"){
      
      let dato="0001"+"+"+this.servicio.operador+"+"+this.servicio.numeroCelular+"+"+this.servicio.valrecarga;
      this.servicio.hubConnection.invoke("SendMessage", "recarga",dato);
      this.servicio.hubConnection.invoke("SendMessage", "imprimir","");
    
    }
    if(this.servicio.acciones=="giros"){
      let dato="0001"+"+"+this.servicio.numeroCelular+"+"+this.servicio.cedulaRemitente+"+"+this.servicio.cedulaRecibe+"+"+this.servicio.valgiro;
      this.servicio.hubConnection.invoke("SendMessage", "giro",dato);
      this.servicio.hubConnection.invoke("SendMessage", "imprimir","");
    
    }
    
  }
 
  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
      if(this.time==3){
    
        this.dialog.closeAll();
       clearInterval(this.interval);
       if(this.servicio.acciones=="giros"){
        this.imprimir();
        this.redirect();

       }
       if(this.servicio.acciones=="recargas"){
        this.imprimir();
        this.redirect();

       }
       

       if(this.servicio.acciones=="jugar"){

      if(this.servicio.fase==2){
        
    this.router.navigate(['/pago'], {  });
          if(this.servicio.valpata!=""){
          
            
           this.redirect();
           this.imprimir();
       

          }
        
      
      }else if(this.servicio.fase==3){
        if(this.servicio.valpata!=""&&this.servicio.valunia!=""){
          
          
          this.redirect();
          this.imprimir();
    
        }
      }else if(this.servicio.fase==4){
        if(this.servicio.valunia!=""){
          
          
          this.redirect();
          this.imprimir();
    
        }
      }
        
        if(this.servicio.pata=="si"&&this.servicio.unia=="no"){
       
          
          if(this.servicio.valpata!=""){
           this.redirect();
           this.imprimir();
       

          }
        
        }else
        if(this.servicio.juego=="2"){
          this.redirect();
          this.imprimir();

        }else
        if(this.servicio.juego=="1"){
          this.redirect();
          this.imprimir();

        }
        if(this.servicio.pata=="si"&&this.servicio.unia=="si"){
        if(this.servicio.valpata!=""&&this.servicio.valunia!=""){
          
          
          this.redirect();
          this.imprimir();
    
        }
        }else
        if(this.servicio.pata=="no"&&this.servicio.unia=="no"){
        this.redirect();
         this.imprimir();
   
        }
       }
       
       
        
      }
      
    },1000)

    
  }
  redirect(){

    
    this.router.navigate(['/warning'], {  });
    
    this.servicio.acciones=""
    this.servicio.ingresado=""
    this.servicio.juego=""
    this.servicio.loteria=""
    this.servicio.numero=""
    this.servicio.numeroCelular=""
    this.servicio.operador=""
    this.servicio.valapuesta=""
    this.servicio.valpata=""
    this.servicio.valunia=""
    this.servicio.tipo=""
  }
}

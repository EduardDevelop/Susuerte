import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalAcceptComponent } from '../modal-accept/modal-accept.component';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-modal-pay',
  templateUrl: './modal-pay.component.html',
  styleUrls: ['./modal-pay.component.css']
})
export class ModalPayComponent implements OnInit {
  dialogRef:any;

  constructor(@Inject(MAT_DIALOG_DATA)public data:any, private servicio: SignalrcustomService,public dialog: MatDialog, private router:Router) { 
    
  }
  interval;
  tipoServicio=this.servicio.tipoServicio;
  ingresado=" ";
  

  restante=" ";
  restantex:Number;
  ngOnInit(): void {
    this.servicio.emNotificaR.subscribe((valorR) =>{
     
      this.restante=String(valorR);
      this.restantex=Number(this.restante)
      if(this.restantex==0){
        this.dialog.closeAll();
      
       clearInterval(this.interval);
        this.dialogRef = this.dialog.open(ModalAcceptComponent,{
      
        });
      }
   
    });
    this.startTimers();
    this.servicio.emNotificax.subscribe((valor) =>{
      this.ingresado=valor;
      this.timer=30;
  
    
    });
      this.servicio.hubConnection.invoke("SendMessage", "aceptar", String(this.data.val));
  }
  
  timer=30;
  
  startTimers() {
    this.interval = setInterval(() => {
      this.timer--;
      if(this.timer==0){
        this.dialog.closeAll();
      
       clearInterval(this.interval);
      
       if(Number(this.ingresado)==0){
        this.servicio.hubConnection.invoke("SendMessage", "cancelar", "").catch(function (err) {
          return console.error(err.toString());
          
      });
      
       }else if(Number(this.ingresado)!=0){
        this.dialogRef = this.dialog.open(ModalAcceptComponent,{
          
        });
        if(this.servicio.acciones=="recargas"){
          this.servicio.valrecarga=this.ingresado;
        }else if(this.servicio.acciones=="giros"){
          this.servicio.valgiro=this.ingresado;
        }else if(this.servicio.acciones=="jugar"){
          this.servicio.valapuesta=this.ingresado;
        }
        

        this.imprimir();
       }
     
       if(this.servicio.acciones=="giros"){
        this.redirect();
       }
       if(this.servicio.acciones=="recargas"){
        this.redirect();
       }
       
      }
      
    },1000)

    
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
    this.servicio.other=false;
  }
 


}

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
  
  timer=30;
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
      this.redirect();
       }else if(Number(this.ingresado)!=0){
        this.dialogRef = this.dialog.open(ModalAcceptComponent,{
         
        });
        
        if(this.servicio.acciones=="recargas"){
          this.servicio.valrecarga=this.ingresado;
        }else if(this.servicio.acciones=="giros"){
          this.servicio.valgiro=this.ingresado;
        }else if(this.servicio.acciones=="jugar"){
          if(this.servicio.juego=='4'||this.servicio.juego=='3'){
            if(this.servicio.pata=='si'&&this.servicio.unia=='si'){
              if(this.servicio.valpata==""){
                this.servicio.valapuesta=this.ingresado
                this.servicio.valpata='0'
                this.servicio.valunia='0'
              } if(this.servicio.valapuesta!=""){
                this.servicio.valpata=this.ingresado
               
                this.servicio.valunia='0'

              } if(this.servicio.valapuesta!=""&&this.servicio.valpata!=""&&parseFloat(this.servicio.valpata)==parseFloat(this.data.val)){
                this.servicio.valunia=this.ingresado
              }else {
                this.servicio.valunia='0'
              }
            }
            if(this.servicio.pata=="si"&&this.servicio.unia=="no"){
              if(this.servicio.valpata==""){
                this.servicio.valapuesta=this.ingresado
                this.servicio.valpata='0'
                this.servicio.valunia='0'
              } if(this.servicio.valapuesta!=""){
                this.servicio.valpata=this.ingresado
               
                this.servicio.valunia='0'

              } 
            }
            if(this.servicio.pata=="no"&&this.servicio.unia=="si"){
              if(this.servicio.valunia==""){
                this.servicio.valapuesta=this.ingresado
                this.servicio.valpata='0'
                this.servicio.valunia='0'
              } if(this.servicio.valapuesta!=""){
                this.servicio.valunia=this.ingresado
               
                this.servicio.valunia='0'

              } 
            }
          }
          if(this.servicio.juego=='2'){
            this.servicio.valpata='0'
            this.servicio.valunia='0'
            this.servicio.valapuesta=this.ingresado;
          }else if(this.servicio.juego=="1"){
            this.servicio.valpata='0'
            this.servicio.valunia='0'
            this.servicio.valapuesta=this.ingresado;
          }
          
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
    this.servicio.pata=""
    this.servicio.unia=""
    this.servicio.fase=0
  }


}

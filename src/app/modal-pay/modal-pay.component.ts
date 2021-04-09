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
  

  restante:Number;
  ngOnInit(): void {
    this.servicio.emNotificaR.subscribe((valorR) =>{
      this.restante=Number(valorR);
      if(this.restante==0){
        
        this.dialogRef = this.dialog.open(ModalAcceptComponent,{
      
        });
      }
   
    });
    this.startTimers();
    this.servicio.emNotificax.subscribe((valor) =>{
      this.ingresado=valor;
     
  
    
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
      
       this.servicio.hubConnection.invoke("SendMessage", "cancelar", String(this.data.val));
       this.router.navigate(['/warning'], {  });
      }
      
    },1000)

    
  }
 


}

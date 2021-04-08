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
    this.startTimers();
    this.servicio.emNotificax.subscribe((valor) =>{
      this.ingresado=valor;
      this.servicio.emNotificaR.subscribe((valorR) =>{
        this.restante=Number(valorR);
      });
      if(this.restante==0){
        this.startTimer();
        this.dialogRef = this.dialog.open(ModalAcceptComponent,{
          width: '20%',
          height:'20%',
         
          panelClass: 'my-dialog',
        });
        
      }
    
    });

  
      this.servicio.hubConnection.invoke("SendMessage", "aceptar", String(this.data.val));
      
   
  }
  time=0;
  timer=30;
  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
      if(this.time==3){
        this.servicio.emNotificaimp.emit("OK")
        this.dialog.closeAll();
       clearInterval(this.interval);
       
        
      }
      
    },1000)

    
  }
  startTimers() {
    this.interval = setInterval(() => {
      this.timer--;
      if(this.timer==0){
        this.dialog.closeAll();
       clearInterval(this.interval);
       this.router.navigate(['/warning'], {  });
        
      }
      
    },1000)

    
  }
 


}

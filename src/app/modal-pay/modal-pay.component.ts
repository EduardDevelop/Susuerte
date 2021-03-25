import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalAcceptComponent } from '../modal-accept/modal-accept.component';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-modal-pay',
  templateUrl: './modal-pay.component.html',
  styleUrls: ['./modal-pay.component.css']
})
export class ModalPayComponent implements OnInit {
  dialogRef:any;

  constructor(@Inject(MAT_DIALOG_DATA)public data:any, private servicio: SignalrcustomService,public dialog: MatDialog) { 
    
  }
  interval;

  ingresado=" ";
  restante:Number;

 
  ngOnInit(): void {

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


}

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
  ngOnInit(): void {
    
    this.servicio.emNotificaR.subscribe((valorR) =>{
      this.restante=Number(valorR);
   
    });
         
      this.startTimer();
      
      
    
  }
 
  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
      if(this.time==5){
        this.servicio.emNotificaimp.emit("OK")
        this.dialog.closeAll();
       clearInterval(this.interval);
       this.router.navigate(['/warning'], {  });
       
        
      }
      
    },1000)

    
  }
}

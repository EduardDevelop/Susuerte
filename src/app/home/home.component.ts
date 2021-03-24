import { Component, OnInit } from '@angular/core';
import { Message } from '../message.models';
import { SignalrcustomService } from '../servicios/signalrcustom.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showSpinner=true;
  showButton=false;
 message : Message []=[]; 
  constructor(private servicio: SignalrcustomService) { }

  ngOnInit(): void {
    this.servicio.emNotifica.subscribe((valor) =>{
      this.message.push(valor);
      this.showSpinner=this.servicio.showSpinner;
      this.showButton=true;
      console.log(valor);
    });
   
  }


}

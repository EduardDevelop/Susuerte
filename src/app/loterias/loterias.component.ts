import { Component, OnInit } from '@angular/core';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-loterias',
  templateUrl: './loterias.component.html',
  styleUrls: ['./loterias.component.css']
})
export class LoteriasComponent implements OnInit {

  constructor(private servicio: SignalrcustomService) { }

  ngOnInit(): void {

  
     
      }
      valor(valor:string){
        this.servicio.loteria=valor;
       
        
      }
  }



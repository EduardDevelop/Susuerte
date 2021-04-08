import { Component, OnInit } from '@angular/core';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-tipo-juego',
  templateUrl: './tipo-juego.component.html',
  styleUrls: ['./tipo-juego.component.css']
})
export class TipoJuegoComponent implements OnInit {

  constructor(private servicio: SignalrcustomService) { }

  ngOnInit(): void {
  }
  valor(valor:string){
    this.servicio.tipo=valor;
    console.log("el valor es: "+valor);
    
  }
}

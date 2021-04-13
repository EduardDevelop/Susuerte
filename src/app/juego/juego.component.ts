
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  constructor(private servicio: SignalrcustomService,private router: Router) { }

  ngOnInit(): void {
  }
  valor(valor:string){
    this.servicio.juego=valor;
   
    
  }
}

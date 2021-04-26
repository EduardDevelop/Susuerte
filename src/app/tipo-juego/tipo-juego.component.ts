import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-tipo-juego',
  templateUrl: './tipo-juego.component.html',
  styleUrls: ['./tipo-juego.component.css']
})
export class TipoJuegoComponent implements OnInit {

  constructor(private servicio: SignalrcustomService, private router: Router) { }

  ngOnInit(): void {
  }
  valor(valor:string){
    this.servicio.tipo=valor;
  
    
  }
  back(){
    this.router.navigate(['/juego'], {  });
    this.servicio.juego=""
  }
}

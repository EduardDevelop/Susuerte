import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent implements OnInit {

  constructor(private servicio:SignalrcustomService, private router: Router) { }

  ngOnInit(): void {
  }
  valor(valor:string){
    this.servicio.operador=valor;
    this.router.navigate(['/input'], {  });
  }

}

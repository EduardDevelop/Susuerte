import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalrcustomService } from '../servicios/signalrcustom.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private servicio:SignalrcustomService, private router:Router) { }

  ngOnInit(): void {

   
  }
  navigate(valor:string){
    this.servicio.acciones=valor;
    if(valor=="consultar" ){
      // this.router.navigate(['/consulta'], {  });
    }else if(valor=="jugar"){

      this.router.navigate(['/loterias'], {  });
    }else if(valor=="giros"  ){
       this.router.navigate(['/input'], {  });
    }else if(valor=="recargas")
{ 
  this.router.navigate(['/operadores'], {  });
} 
  }


}

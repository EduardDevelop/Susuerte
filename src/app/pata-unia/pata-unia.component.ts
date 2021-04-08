import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-pata-unia',
  templateUrl: './pata-unia.component.html',
  styleUrls: ['./pata-unia.component.css']
})
export class PataUniaComponent implements OnInit {

  constructor(private servicio: SignalrcustomService, private router: Router ) { }
linkSip="assets/images/SI.png"
linkNop="assets/images/NO.png"
linkSiu="assets/images/SI.png"
linkNou="assets/images/NO.png"
des="";
dess="";
  ngOnInit(): void {
  }
  valor(valor:string){
   
if(valor=='sip'){
  this.des=valor;
  this.linkSip="assets/images/SI2.png"
  this.linkNop="assets/images/NO.png"
  this.servicio.pata="si";

}else if(valor=='nop'){
  this.des=valor;
  this.linkNop="assets/images/NO2.png"
  this.linkSip="assets/images/SI.png"
  this.servicio.pata="no";
}else if(valor=='siu'){
  this.dess=valor;
  this.linkSiu="assets/images/SI2.png"
  this.linkNou="assets/images/NO.png"
  this.servicio.unia="si";
}else if(valor=='nou'){
  this.dess=valor;
  this.linkNou="assets/images/NO2.png"
  this.linkSiu="assets/images/SI.png"
  this.servicio.unia="no";
}
    
  }
  enviar(){
 
    if(this.des!="" && this.dess!=""){
      
      this.router.navigate(['/pago'], {  });

    }

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loterias',
  templateUrl: './loterias.component.html',
  styleUrls: ['./loterias.component.css']
})
export class LoteriasComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {

  
     
      }
      valor(valor:string){

        console.log("el valor es: "+valor);
        
      }
  }



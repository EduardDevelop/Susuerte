import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ModalPayComponent } from '../modal-pay/modal-pay.component';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.css']
})
export class ChangeFormComponent implements OnInit {

  form: FormGroup;

  fourCD=0;
  fourCC=0;
  threeCC=0;
  threeCD=0;
  twoCD=0;
  oneCD=0;

count = 0;
radios="";

  constructor(private servicio: SignalrcustomService,public dialog: MatDialog, private formBuilder: FormBuilder) { 
  
  }
 selected:string[]=["1.000","2.000","5.000","10.000","20.000","50.000"];
 selecteds = '';


 ngOnInit(): void {

  this.servicio.emNotificaimp.subscribe((valor) =>{
  
 
  
  });


  this.form = new FormGroup({
    valorPay: new FormControl('', [Validators.required]),
    numberCh: new FormControl("", [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(4),Validators.minLength(4)]),
    radio: new FormControl('',[]),
   
  });

  this.form.valueChanges
  .subscribe(value => {
    console.log(value.radio);
    this.onSelectionChange(value.radio);
   
  });
   
    }

    filterName : string = null;
    handleChange(){


      this.form.controls['numberCh'].setValue("");
    }

 

    onSelectionChange(valor:any)  {

     
 if(valor=='FCD'){
        this.form.controls["numberCh"].setValidators([Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(4),Validators.minLength(4)]);
      }else if(valor=='FCC'){
        this.form.controls["numberCh"].setValidators([ Validators.required, Validators.pattern('^[0-9]*$'),Validators.maxLength(4),Validators.minLength(4)]);
      }else if(valor=='TCD'){
        this.form.controls["numberCh"].setValidators([Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(3),Validators.minLength(3)]);
      }else if(valor=='TCC'){
        this.form.controls["numberCh"].setValidators([ Validators.required, Validators.pattern('^[0-9]*$'),Validators.maxLength(3),Validators.minLength(3)]);
      }else if(valor=='P'){
        this.form.controls["numberCh"].setValidators([Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(2),Validators.minLength(2)]);
      }else if(valor=='U'){
        this.form.controls["numberCh"].setValidators([Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(1),Validators.minLength(1)]);
      }
    }

  

  


  getValue(selected:string){

console.log(selected);
this.fourCD=this.transform(4500*(1000*Number(this.selecteds)));
this.fourCC=this.transform(208*(1000*Number(this.selecteds)));
this.threeCC=this.transform(83*(1000*Number(this.selecteds)));
this.threeCD=this.transform(400*(1000*Number(this.selecteds)));
this.twoCD=this.transform(50*(1000*Number(this.selecteds)));
this.oneCD=this.transform(5*(1000*Number(this.selecteds)));

  }

  
  public transform(value: any) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
}

openModalPay() {  
  let dialogRef = this.dialog.open(ModalPayComponent,{data: {val:1000*Number(this.selecteds)}});

}

}

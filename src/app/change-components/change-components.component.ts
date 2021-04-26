import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalrcustomService } from '../servicios/signalrcustom.service';

@Component({
  selector: 'app-change-components',
  templateUrl: './change-components.component.html',
  styleUrls: ['./change-components.component.css']
})
export class ChangeComponentsComponent implements OnInit {
  showSpinner=true;

  constructor(private servicio: SignalrcustomService,private router: Router) { }

  ngOnInit(): void {
    this.servicio.emNotifica.subscribe((valor) =>{
      this.showSpinner=this.servicio.showSpinner;
      this.router.navigate(["/warning"]);
      this.showSpinner=false;
    });

    
  }

}

import { LocationStrategy } from '@angular/common';
import { HostListener } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'susuerte-app';
  constructor(private location: LocationStrategy){
    history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    }); 
    
  }
  @HostListener('window:hashchange', ['$event'])
  hashChangeHandler(e) {
    window.location.hash = "dontgoback";
  }


}

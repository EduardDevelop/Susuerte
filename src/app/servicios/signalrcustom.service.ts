import { Injectable } from '@angular/core';
import {HubConnectionBuilder, HubConnection} from '@aspnet/signalr'
import { EventEmitter } from '@angular/core';
import { Message } from '../message.models';


@Injectable({
  providedIn: 'root'
})
export class SignalrcustomService {
  showSpinner=true;
  ingresado="";
  imp=false;
  public hubConnection : HubConnection;
  emNotifica: EventEmitter<Message> = new EventEmitter();
  emNotificax: EventEmitter<string> = new EventEmitter();
  emNotificaimp: EventEmitter<string> = new EventEmitter();
  constructor() { 
    console.log("Inicio de servicios")
    let builder = new HubConnectionBuilder();
    this.hubConnection = builder.withUrl("https://localhost:5001/chathub").build();
    this.hubConnection.on("ReceiveMessage",(user, message) =>{
      let art1 = JSON.stringify({'user':user, 'message': message});
   
      if(user== 'iniciar'){
        this.showSpinner=false;
      }
      if(user=='MoneyTrans'){
      this.ingresado=message;
      this.emNotificax.emit(message);
      
    
      }
       let art : Message = JSON.parse(art1);
       this.emNotifica.emit(art);
       
      console.log(user+" "+ message);
      
    } );
    this.hubConnection.start().then(() =>{
      console.log('Connection started');
      this.hubConnection.invoke("SendMessage", "iniciar", "").catch(function (err) {
        return console.error(err.toString());
    });
  });


}
}

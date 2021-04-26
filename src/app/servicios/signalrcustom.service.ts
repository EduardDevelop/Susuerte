import { Injectable } from '@angular/core';
import {HubConnectionBuilder, HubConnection} from '@aspnet/signalr'
import { EventEmitter } from '@angular/core';
import { Message } from '../message.models';


@Injectable({
  providedIn: 'root'
})
export class SignalrcustomService {
  showSpinner=true;

  tipoServicio="";
  next="";
  other=false;
  acciones="";
  operador="";
  titulo="";
  loteria="";
  juego="";
  fase=0;
  tipo="";
  numero="";
  pata="";
  cedulaRemitente="";
  cedulaRecibe="";
  unia="";
  valpata="";
  valgiro="";
  valunia="";
  valapuesta="";
  valrecarga="";
  ingresado="";
  imp=false;
  // ---------------------- GIROS------------------
  numeroCelular="";

  public hubConnection : HubConnection;
  emNotifica: EventEmitter<Message> = new EventEmitter();
  emNotificaR: EventEmitter<Message> = new EventEmitter();
  emNotificax: EventEmitter<string> = new EventEmitter();
  emNotificaimp: EventEmitter<string> = new EventEmitter();
  constructor() { 
   
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
      if(user=='Faltante'){
        this.emNotificaR.emit(message);
      }
       let art : Message = JSON.parse(art1);
       this.emNotifica.emit(art);
       

      
    } );
    this.hubConnection.start().then(() =>{
   
      this.hubConnection.invoke("SendMessage", "iniciar", "").catch(function (err) {
        return console.error(err.toString());
    });
  });


}
}

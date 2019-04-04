import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocektService {
  private socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  private checkStatus() {
    // Verificamos conexion con el server
    this.socket.on('connect', () => {
      console.log('conectado con el servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emit( evento: string, payload?: any, callback?: Function ) {
    console.log('Emitiendo', evento);
    // emit('EVENTO', payload, callback?)
    this.socket.emit( evento, payload, callback );

  }

  listen(evento: string) {
    // Este metodo necesita regresar un observable
    // Sobre el cual se pueda subcribir en cualquier parte de la app
    return this.socket.fromEvent(evento);
  }





}

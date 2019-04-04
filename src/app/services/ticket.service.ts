import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebsocektService } from './websocekt.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  url: string = 'http://localhost:5000/';
  body;
  headers = new HttpHeaders();

  constructor(private _http: HttpClient,
    private ws: WebsocektService) { }

  getLastTicket() {
    return this._http.get(`${this.url}ticket/last`);
  }

  create() {
    return this._http.post(`${this.url}ticket/create`, this.body);
  }

  asignarTicket( oficina: number) {
    const paylaod = {
      escritorio: oficina
    };
    this.ws.emit('asignar-ticket', paylaod);
  }

  getOficinas() {
    return this.ws.listen('escritorios-ocupados');
  }

}

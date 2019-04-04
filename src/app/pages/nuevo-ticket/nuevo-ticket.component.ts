import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {
  numeroTicket: number;

  constructor(private _ticket: TicketService) { }

  ngOnInit() {
    this.getLastTicket();
  }

  Generar() {
    this._ticket.create().subscribe(data => {
      this.numeroTicket = data[0].ticket;
    });
  }

  getLastTicket() {
    this._ticket.getLastTicket().subscribe( data => {
      this.numeroTicket = data[0].numeroTicket;
    });
  }

}

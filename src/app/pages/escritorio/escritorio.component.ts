import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {
  atendiendo: number;
  escritorio: number;

  constructor(private _activatedRouter: ActivatedRoute,
              private _ticketService: TicketService) {
    this._activatedRouter.params.subscribe(param => {
      this.escritorio = param['id'];
    });
  }

  ngOnInit() {
  }

  atender() {
    this._ticketService.asignarTicket(this.escritorio);
  }
}

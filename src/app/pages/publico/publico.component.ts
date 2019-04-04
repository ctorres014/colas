import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Oficina } from 'src/interface/oficina.interface';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {
  asignaciones: Oficina[] = [];

  constructor(private _ticketService: TicketService) { }

  ngOnInit() {
    this._ticketService.getOficinas().subscribe( ofi => {
      console.log('ofi', ofi);
      this.asignaciones = ofi[0];
    });
  }

}

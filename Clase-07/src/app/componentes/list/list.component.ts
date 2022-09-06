import { Component, OnInit } from '@angular/core';
import { TurnoModel } from 'src/app/models/turno.models';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  turnos: TurnoModel[] = [];

  constructor(private service: TurnoService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp:TurnoModel[])=>{
      this.turnos = resp;
    })
  }

}

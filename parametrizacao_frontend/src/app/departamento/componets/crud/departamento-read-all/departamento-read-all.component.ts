import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/departamento/departamento.model';

@Component({
  selector: 'app-departamento-read-all',
  templateUrl: './departamento-read-all.component.html',
  styleUrls: ['./departamento-read-all.component.css']
})
export class DepartamentoReadAllComponent implements OnInit {
  departamento: Departamento[] = []

  displayedColumns: string[] = [ 'nome', 'hotelFk' ];

  constructor() { }

  ngOnInit(): void {
  }

}

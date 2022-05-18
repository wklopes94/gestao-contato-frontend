import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from 'src/app/departamento/departamento.model';
import { DepartamentoService } from 'src/app/departamento/departamento.service';

@Component({
  selector: 'app-departamento-read-all',
  templateUrl: './departamento-read-all.component.html',
  styleUrls: ['./departamento-read-all.component.css']
})
export class DepartamentoReadAllComponent implements OnInit {


  displayedColumns: string[] = [ 'nome', 'hotelFk', 'acao'];

  id_hot: String = "";

  departamento: Departamento[] = [];

  constructor(private service: DepartamentoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  //  this.id_hot = this.route.snapshot.paramMap.get("id_hot")!;
  }

  findAll(): void{

  }

}

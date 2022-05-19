import { Departamento } from './../../../departamento.model';

import { DepartamentoService } from 'src/app/departamento/departamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';






@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})

export class DepartamentoComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator
  departamento: Departamento[] = []
  displayedColumns: string[] = [ 'nome', 'hotelFk', 'acao'];
  //dataSource = MatTableDataSource<Departamento>;



  constructor(private service: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
    //this.dataSource=new MatTableDataSource(this.departamento);
    //this.dataSource.paginator=this.paginator;
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.departamento = resposta;

    })
  }

  DepartamentoCreate(): void{
    this.router.navigate(["departamento/create"])
  }

}

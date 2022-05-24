import { Departamento } from './../../../departamento.model';
import { DepartamentoService } from 'src/app/departamento/departamento.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
   selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements AfterViewInit {

  departamentos: Departamento[] = []
  displayedColumns: string[] = [ 'nome', 'hotelFk', 'acao'];
  dataSource = new MatTableDataSource<Departamento>(this.departamentos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: DepartamentoService, private router: Router) { }

  ngAfterViewInit(): void {
    this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(resposta => {
    this.departamentos = resposta;
    this.dataSource = new MatTableDataSource<Departamento>(this.departamentos);
    this.dataSource.paginator = this.paginator;
    console.log(resposta)

    })

  }

  DepartamentoCreate(): void{
    this.router.navigate(["departamento/create"])
  }


}

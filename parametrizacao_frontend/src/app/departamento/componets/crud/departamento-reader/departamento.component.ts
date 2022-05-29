import { Departamento } from './../../../departamento.model';
import { DepartamentoService } from 'src/app/departamento/departamento.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { hotel } from 'src/app/hotel/componets/CRUD/reader/hotel.model';
import { HotelServiceService } from 'src/app/hotel/hotel-service.service';

@Component({
   selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements AfterViewInit {
  hoteis: hotel[] = []
  departamentos: Departamento[] = []

  displayedColumns: string[] = [ 'nome', 'hotelFk', 'acao'];
  dataSource = new MatTableDataSource<Departamento>(this.departamentos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private serviceHot: HotelServiceService, private service: DepartamentoService, private router: Router) { }


  ngAfterViewInit(): void {
    this.findAllHotel();
    this.findAllDep();

  }

  findAllHotel(){
    this.serviceHot.findAll().subscribe(resposta => {
    this.hoteis = resposta;
    console.log(resposta)
    })

  }

  findAllDep(){
    this.service.findAll().subscribe(resposta => {
    this.departamentos = resposta;
    this.dataSource = new MatTableDataSource<Departamento>(this.departamentos);
    this.dataSource.paginator = this.paginator;
    console.log(resposta)

    })

  }

  DepartamentoCreate(): void{
    this.router.navigate(["departamento/create"])
    console.log
  }


}

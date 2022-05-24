import { HotelServiceService } from './../../../hotel-service.service';

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { hotel } from './hotel.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements AfterViewInit{
  hoteis: hotel[] = [];
  displayedColumns: string[] = [ 'nome', 'numero','departamentos', 'acao'];
  dataSource = new MatTableDataSource<hotel>(this.hoteis);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: HotelServiceService, private router: Router) { }

  ngAfterViewInit()  {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.hoteis = resposta;
      this.dataSource = new MatTableDataSource<hotel>(this.hoteis);
      this.dataSource.paginator = this.paginator;
      console.log(resposta)
    })
  }
  HotelCreate(): void{
    this.router.navigate(["hotel/create"])
  }

}


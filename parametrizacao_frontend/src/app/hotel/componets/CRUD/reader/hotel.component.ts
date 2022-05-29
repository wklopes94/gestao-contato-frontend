import { hotel } from 'src/app/hotel/componets/CRUD/reader/hotel.model';
import { HotelServiceService } from './../../../hotel-service.service';

import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})


export class HotelComponent implements AfterViewInit{
  hoteis: hotel[] = [];

  hotel: hotel ={
    id: '',
    nome: '',
    numeroFixo: ''

  }

  displayedColumns: string[] = [ 'nome', 'numero','departamentos', 'acao'];
  dataSource = new MatTableDataSource<hotel>(this.hoteis);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service: HotelServiceService, private router: Router ) {


   }

  searchKey!: string;

  ngAfterViewInit()  {
    this.findAll();
  }

  findAll(){
      this.service.findAll().subscribe(resposta => {
        this.hoteis = resposta;
        this.dataSource = new MatTableDataSource<hotel>(this.hoteis);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(resposta)
      })

  }

  findByName(){
    this.service.findByName(this.hotel.nome).subscribe(resposta => {
      if(this.hotel.nome == null){
        this.findAll();
      }else{
        this.dataSource = new MatTableDataSource<hotel>(resposta);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(resposta)

      }

    })
  }

  HotelCreate(): void{
    this.router.navigate(["hotel/create"])
  }

  applyFilter(searchKey: string){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

}


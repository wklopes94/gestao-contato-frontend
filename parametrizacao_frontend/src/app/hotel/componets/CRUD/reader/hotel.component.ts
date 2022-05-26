import { HotelServiceService } from './../../../hotel-service.service';

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { hotel } from './hotel.model';
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

  displayedColumns: string[] = [ 'nome', 'numero','departamentos', 'acao'];
  dataSource = new MatTableDataSource<hotel>(this.hoteis);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service: HotelServiceService, private router: Router ) { }

  searchKey!: string;

  ngAfterViewInit()  {
    this.findAll();
    this.applyFilter();
    this.dataSource.filterPredicate = this.createFilter();
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
  HotelCreate(): void{
    this.router.navigate(["hotel/create"])
  }

  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

// Custom filter method fot Angular Material Datatable

  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach((word: any) => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }

}


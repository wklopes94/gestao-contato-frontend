import { ExtensaoService } from './../../../extensao.service';
import { ExtensaoModel } from './extensao-model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-extensao',
  templateUrl: './extensao.component.html',
  styleUrls: ['./extensao.component.css']
})
export class ExtensaoComponent implements AfterViewInit {

  extensoes: ExtensaoModel[] = []
  displayedColumns: string[] = ['numero','departamentoFk', 'acao'];
  dataSource = new MatTableDataSource<ExtensaoModel>(this.extensoes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ExtensaoService, private router: Router) { }

  ngAfterViewInit(): void {
    this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(resposta => {
    this.extensoes = resposta;
    this.dataSource = new MatTableDataSource<ExtensaoModel>(this.extensoes);
    this.dataSource.paginator = this.paginator;
    console.log(resposta)

    })

  }
/*
  ExtensaoCreate(): void{
    this.router.navigate(["departamento/create"])
  }
*/

}

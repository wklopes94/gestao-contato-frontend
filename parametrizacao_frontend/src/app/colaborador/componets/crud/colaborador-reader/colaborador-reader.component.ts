import { ColaboradorService } from './../../../colaborador.service';
import { ColaboradorModel } from './../../../colaborador-model';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-colaborador-reader',
  templateUrl: './colaborador-reader.component.html',
  styleUrls: ['./colaborador-reader.component.css']
})
export class ColaboradorReaderComponent implements AfterViewInit {

  colaboradores: ColaboradorModel[] = []

  colaborador: ColaboradorModel = {
    id: '',
    nomeColab: '',
    telefoneColab: '',
    emailColab: '',
    enderecoColab: '',
    extensaofk: '',
    numeroRh: '',
    tipoColabFk: '',
    departamentoFk: ''
  }

  displayedColumns: string[] = [ 'nomeColab', 'telefoneColab', 'emailColab','enderecoColab','extensaofk','numeroRh','tipoColabFk','departamentoFk','acao'];
  dataSource = new MatTableDataSource<ColaboradorModel>(this.colaboradores);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ColaboradorService, private router: Router ) { }

  ngAfterViewInit()  {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.colaboradores = resposta;
      this.dataSource = new MatTableDataSource<ColaboradorModel>(this.colaboradores);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(resposta)
    })
}

    colaboradorCreate(): void{
      this.router.navigate(["colaborador/create"])
      console.log
    }


}

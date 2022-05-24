import { TipoColaboradorService } from './../tipo-colaborador.service';
import { TipoColaboradorModel } from './../tipo-colaborador-model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tipo-colaborador',
  templateUrl: './tipo-colaborador.component.html',
  styleUrls: ['./tipo-colaborador.component.css']
})
export class TipoColaboradorComponent implements AfterViewInit {

  tipoColaboradores: TipoColaboradorModel[] = []
  displayedColumns: string[] = ['tipoColaborador', 'acao'];
  dataSource = new MatTableDataSource<TipoColaboradorModel>(this.tipoColaboradores);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: TipoColaboradorService, private router: Router) { }

  ngAfterViewInit(): void {
    this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(resposta => {
    this.tipoColaboradores = resposta;
    this.dataSource = new MatTableDataSource<TipoColaboradorModel>(this.tipoColaboradores);
    this.dataSource.paginator = this.paginator;
    console.log(resposta)

    })

  }

  DeparCreate(): void{
    this.router.navigate(["tipocolaborador/create"])
  }
}

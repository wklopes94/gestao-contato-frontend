import { TipoColaboradorService } from './../tipo-colaborador.service';
import { TipoColaboradorModel } from './../tipo-colaborador-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-colaborador',
  templateUrl: './tipo-colaborador.component.html',
  styleUrls: ['./tipo-colaborador.component.css']
})
export class TipoColaboradorComponent implements OnInit {

  tipoColaborador: TipoColaboradorModel[] = []



  constructor(private service: TipoColaboradorService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }
  displayedColumns: string[] = ['tipoColaborador', 'acao'];

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.tipoColaborador = resposta;

    })

  }

  DeparCreate(): void{
    this.router.navigate(["departamento/create"])
  }


}

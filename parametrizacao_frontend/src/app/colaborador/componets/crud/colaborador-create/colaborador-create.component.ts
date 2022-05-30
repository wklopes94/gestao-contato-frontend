import { ExtensaoModel } from './../../../../extensao/componets/crud/extensao-reader/extensao-model';
import { TipoColaboradorModel } from './../../../../tipo-colaborador/componets/crud/tipo-colaborador-model';
import { TipoColaboradorService } from './../../../../tipo-colaborador/componets/crud/tipo-colaborador.service';
import { HotelServiceService } from './../../../../hotel/hotel-service.service';
import { Departamento } from 'src/app/departamento/departamento.model';
import { Router } from '@angular/router';
import { ColaboradorService } from './../../../colaborador.service';
import { DepartamentoService } from './../../../../departamento/departamento.service';
import { ExtensaoService } from './../../../../extensao/extensao.service';
import { ColaboradorModel } from './../../../colaborador-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.css']
})
export class ColaboradorCreateComponent implements OnInit {

  tipoColaboradores: TipoColaboradorModel[] = []
  departamentos : Departamento[] = []
  Extensoes: ExtensaoModel[] = []

  tipoColaborador: TipoColaboradorModel = {
    id: '',
    tipoColaborador: ''
  }

  departamento: Departamento ={
    id: '',
    nome: '',
    hotelFk: ''
  }

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


  constructor(private servicoExtensao: ExtensaoService,
              private servicoHotel: HotelServiceService,
              private servicoTipoColab: TipoColaboradorService ,
              private serviceDep: DepartamentoService,
              private serviceColab: ColaboradorService ,
              private router: Router) { }

  ngOnInit(): void {
    this.findAllDep();
    this.findAllTipoColab();
  }

  createDep(): void{
    this.serviceColab.createColab(this.colaborador, this.colaborador.departamentoFk, this.colaborador.tipoColabFk ).subscribe((resposta) => {
      this.router.navigate(['departamento'])
      this.servicoHotel.message('Colaborador Criado com Sucesso');
      console.log(resposta)
    })
  }

  DepartamentoCancel(): void{
    this.router.navigate(["colaborador"])
  }

  findAllTipoColab(){
    this.servicoTipoColab.findAll().subscribe(resposta => {
      console.log(resposta)
      this.tipoColaboradores = resposta;

    })
  }

  findAllDep(){
    this.serviceDep.findAll().subscribe(resposta => {
      console.log(resposta)
      this.departamentos = resposta;

    })
  }

}

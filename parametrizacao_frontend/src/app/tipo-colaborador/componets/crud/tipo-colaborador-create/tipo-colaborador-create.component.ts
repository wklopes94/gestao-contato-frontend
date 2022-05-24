import { Router } from '@angular/router';
import { TipoColaboradorService } from './../tipo-colaborador.service';
import { Component, OnInit } from '@angular/core';
import { TipoColaboradorModel } from '../tipo-colaborador-model';
import { HotelServiceService } from 'src/app/hotel/hotel-service.service';

@Component({
  selector: 'app-tipo-colaborador-create',
  templateUrl: './tipo-colaborador-create.component.html',
  styleUrls: ['./tipo-colaborador-create.component.css']
})
export class TipoColaboradorCreateComponent implements OnInit {

  tipoColaborador: TipoColaboradorModel = {
    tipoColaborador: ''
  }

  constructor(private serviceMsg: HotelServiceService,private service: TipoColaboradorService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.tipoColaborador).subscribe((resposta) => {
      this.router.navigate(['tipocolaborador'])
      this.serviceMsg.message('Tipo de Colaborador Criado com Sucesso');


    })
}
TipoColabCancel(): void{
  this.router.navigate(['tipocolaborador'])
}
}

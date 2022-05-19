import { hotel } from './../../../../hotel/componets/CRUD/reader/hotel.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/departamento/departamento.model';
import { DepartamentoService } from 'src/app/departamento/departamento.service';
import { HotelServiceService } from 'src/app/hotel/hotel-service.service';

@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styleUrls: ['./departamento-create.component.css']
})

export class DepartamentoCreateComponent implements OnInit {

  hotel: hotel ={
    id: '',
    nome: '',
    numeroFixo: ''

  }
  hoteis: hotel[] = []

  departamento: Departamento = {
    nome: '',
    hotelFk: ''

  }
  constructor(private servicoHotel: HotelServiceService ,private service: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  create(): void{
    this.service.create(this.departamento).subscribe((resposta) => {
      this.router.navigate(['departamento'])
    })

  }

  DepartamentoCancel(): void{
    this.router.navigate(["departamento"])
  }

  findAll(){
    this.servicoHotel.findAll().subscribe(resposta => {
      console.log(resposta)
      this.hoteis = resposta;

    })
  }

}

import { DepartamentoService } from 'src/app/departamento/departamento.service';
import { Component, OnInit } from '@angular/core';
import { hotel } from 'src/app/hotel/componets/CRUD/reader/hotel.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { HotelServiceService } from '../hotel/hotel-service.service';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  hoteis: any[] = [];
  hotelSelect: any[] = [];

  departamentos: any[] = [];
  departamentosSelect: any[] = [];

  colaboradores: any[] = [];
  colaboradoresSelect: any[] = [];


  hotel: any ={
    id: '',
    nome: '',
    numeroFixo: '',
    departamentosModel:[{
      id:'',
      nome:'',

    }]

  }

  dataSource = new MatTableDataSource<hotel>(this.hoteis);


  constructor(private service: HotelServiceService,
              private serviceDep: DepartamentoService,
              private router: Router ) { }

  ngOnInit(): void {
    this.findAllHotel();
  }


  findAllHotel(){
        this.service.findAll().subscribe(resposta => {
        this.hoteis = resposta;
        this.hotelSelect = resposta;
        this.dataSource = new MatTableDataSource<hotel>(this.hoteis);
        console.log(resposta)
      })
  }

  findByName(){
    this.service.findByName(this.hotel.nome).subscribe(resposta => {
      if(this.hotel.nome == null){
        this.findAllHotel();
      }else{
        this.hoteis = resposta;
        this.departamentosSelect = resposta;
        console.log(resposta)

      }
    })
  }

  findByDepartamento(){
    //this.serviceDep.findAllByHotel()

  }


}

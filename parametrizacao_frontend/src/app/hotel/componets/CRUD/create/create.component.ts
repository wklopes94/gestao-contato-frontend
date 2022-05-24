import { Router } from '@angular/router';

import { HotelServiceService } from './../../../hotel-service.service';

import { Component, OnInit } from '@angular/core';
import { hotel } from '../reader/hotel.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  hotel: hotel = {
    nome: '',
    numeroFixo: ''

  }


  constructor(private service: HotelServiceService, private router: Router){}


  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.hotel).subscribe((resposta) => {
      this.router.navigate(['hotel'])
      this.service.message('Hotel Criado com Sucesso');


    })

  }
  HotelCancel(): void{
    this.router.navigate(["hotel"])
  }

}

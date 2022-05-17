import { HotelServiceService } from './../../../hotel-service.service';

import { Component, OnInit } from '@angular/core';
import { hotel } from './hotel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

    hoteis: hotel[] = []

  displayedColumns: string[] = [ 'nome', 'numero','departamentos', 'acao'];

  constructor(private service: HotelServiceService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.hoteis = resposta;

    })
  }
  HotelCreate(): void{
    this.router.navigate(["hotel/create"])
  }
}

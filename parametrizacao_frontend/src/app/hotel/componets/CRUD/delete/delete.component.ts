import { HotelServiceService } from './../../../hotel-service.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hotel } from '../reader/hotel.model';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  hoteis: hotel = {
    id:'',
    nome: '',
    numeroFixo: ''

  }

  constructor(private service: HotelServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.hoteis.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.hoteis.id!).subscribe((resposta) =>{
      this.hoteis = resposta
      console.log(this.hoteis)
    })
  }

  delete(): void{
      this.service.delete(this.hoteis.id!).subscribe((resposta) =>{

  })
  this.router.navigate(['hotel'])
  }

  HotelCancel(): void{
    this.router.navigate(["hotel"])
  }
  }

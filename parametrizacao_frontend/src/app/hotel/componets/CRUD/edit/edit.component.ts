import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelServiceService } from 'src/app/hotel/hotel-service.service';
import { hotel } from '../reader/hotel.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hoteis: hotel = {
    id:'',
    nome: '',
    numeroFixo: ''

  }

  constructor(private service: HotelServiceService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.hoteis.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
      this.service.findById(this.hoteis.id!).subscribe(resposta =>{
      this.hoteis = resposta;
      console.log(this.hoteis)
    })
  }

  HotelCancel(): void{
    this.router.navigate(["hotel"])
  }
  update(): void{
    this.service.update(this.hoteis).subscribe((resposta) =>{
    this.router.navigate(['hotel']);

    }, err => {
        console.log(err)
    })

  }


}

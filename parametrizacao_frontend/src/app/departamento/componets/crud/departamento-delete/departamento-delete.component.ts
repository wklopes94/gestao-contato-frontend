import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from 'src/app/departamento/departamento.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/departamento/departamento.model';
import { HotelServiceService } from 'src/app/hotel/hotel-service.service';

@Component({
  selector: 'app-departamento-delete',
  templateUrl: './departamento-delete.component.html',
  styleUrls: ['./departamento-delete.component.css']
})
export class DepartamentoDeleteComponent implements OnInit {

  departamento: Departamento = {
    id:'',
    nome: '',
    hotelFk: ''

  }

  constructor(private servicoHotel: HotelServiceService,private service: DepartamentoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.departamento.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.departamento.id!).subscribe((resposta) =>{
      this.departamento = resposta
      console.log(this.departamento)
    })
  }
  delete(): void{
    this.service.delete(this.departamento.id!).subscribe((resposta) =>{

})
this.router.navigate(['departamento'])
this.servicoHotel.message('Departamento eliminado com Sucesso');
}

HotelCancel(): void{
  this.router.navigate(["departamento"])
}
}

import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from './../../../departamento.service';
import { Departamento } from './../../../departamento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento-update',
  templateUrl: './departamento-update.component.html',
  styleUrls: ['./departamento-update.component.css']
})
export class DepartamentoUpdateComponent implements OnInit {

  departamento: Departamento = {
    id:'',
    nome: '',
    hotelFk: ''

  }

  constructor(private service: DepartamentoService, private route: ActivatedRoute , private router: Router) { }

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

  HotelCancel(): void{
    this.router.navigate(["departamento"])
  }
  update(): void{
    this.service.update(this.departamento).subscribe((resposta) =>{
    this.router.navigate(['departamento']);

    }, err => {
        console.log(err)
    })

  }


}

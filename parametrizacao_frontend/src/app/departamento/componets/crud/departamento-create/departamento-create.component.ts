import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/departamento/departamento.model';
import { DepartamentoService } from 'src/app/departamento/departamento.service';

@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styleUrls: ['./departamento-create.component.css']
})
export class DepartamentoCreateComponent implements OnInit {

  departamento: Departamento = {
    nome: '',
    hotelFk: ''

  }


  constructor(private service: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.departamento).subscribe((resposta) => {
      this.router.navigate(['departamento'])
    })

  }

  DepartamentoCancel(): void{
    this.router.navigate(["departamento"])
  }


}

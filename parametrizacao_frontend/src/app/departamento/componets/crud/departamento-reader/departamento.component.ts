import { DepartamentoService } from 'src/app/departamento/departamento.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/departamento/departamento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  departamento: Departamento[] = []

  displayedColumns: string[] = [ 'nome', 'utilizador', 'acao'];

  constructor(private service: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.departamento = resposta;

    })
  }

}

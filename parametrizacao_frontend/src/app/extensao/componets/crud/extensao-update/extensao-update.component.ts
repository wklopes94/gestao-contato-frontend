import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from './../../../../departamento/departamento.service';
import { ExtensaoModel } from './../extensao-reader/extensao-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extensao-update',
  templateUrl: './extensao-update.component.html',
  styleUrls: ['./extensao-update.component.css']
})
export class ExtensaoUpdateComponent implements OnInit {

  extensao: ExtensaoModel = {
    id:'',
    numero: '',
    departamentoFk: ''

  }

  constructor(private service: DepartamentoService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
  }





}

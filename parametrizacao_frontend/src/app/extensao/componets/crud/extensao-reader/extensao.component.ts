import { Router } from '@angular/router';
import { ExtensaoService } from './../../../extensao.service';
import { ExtensaoModel } from './extensao-model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-extensao',
  templateUrl: './extensao.component.html',
  styleUrls: ['./extensao.component.css']
})
export class ExtensaoComponent implements OnInit {


  extensao: ExtensaoModel[] = []



  constructor(private service: ExtensaoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }
  displayedColumns: string[] = ['numero','departamentoFk', 'acao'];

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.extensao = resposta;

    })
  }

}

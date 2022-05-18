import { ExtensaoModel } from './componets/crud/extensao-reader/extensao-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtensaoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }


  findAll(): Observable<ExtensaoModel[]>{
    const url = `${this.baseUrl}/extensao`
    return this.http.get<ExtensaoModel[]>(url)
  }

  findById(id: String): Observable<ExtensaoModel>{
    const url = `${this.baseUrl}/extensao/${id}`
    return this.http.get<ExtensaoModel>(url)
  }

  create(extensao: ExtensaoModel): Observable<ExtensaoModel>{
    const url = `${this.baseUrl}/extensao`
    return this.http.post<ExtensaoModel>(url, extensao);

  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/extensao/${id}`
    return this.http.delete<void>(url)
  }

  update(extensao: ExtensaoModel): Observable<void>{
    const url = `${this.baseUrl}/extensao/${extensao.id}`
    return this.http.put<void>(url, extensao)
  }



}

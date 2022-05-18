import { Observable } from 'rxjs';
import { TipoColaboradorModel } from './tipo-colaborador-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoColaboradorService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<TipoColaboradorModel[]>{
    const url = `${this.baseUrl}/tipocolaborador`
    return this.http.get<TipoColaboradorModel[]>(url)
  }
  findById(id: String): Observable<TipoColaboradorModel>{
    const url = `${this.baseUrl}/tipocolaborador/${id}`
    return this.http.get<TipoColaboradorModel>(url)
  }

  create(departamento: TipoColaboradorModel): Observable<TipoColaboradorModel>{
    const url = `${this.baseUrl}/tipocolaborador`
    return this.http.post<TipoColaboradorModel>(url, departamento);

  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/tipocolaborador/${id}`
    return this.http.delete<void>(url)
  }

  update(departamento: TipoColaboradorModel): Observable<void>{
    const url = `${this.baseUrl}/tipocolaborador/${departamento.id}`
    return this.http.put<void>(url, departamento)
  }
}

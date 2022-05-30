import { Observable } from 'rxjs';
import { ColaboradorModel } from './colaborador-model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  baseUrl: String = environment.baseUrl

constructor(private http: HttpClient) { }



findAll(): Observable<ColaboradorModel[]>{
  const url = `${this.baseUrl}/colaborador`
  return this.http.get<ColaboradorModel[]>(url)
}

findById(id: String): Observable<ColaboradorModel>{
  const url = `${this.baseUrl}/colaborador/${id}`
  return this.http.get<ColaboradorModel>(url)
}

create(colaborador: ColaboradorModel): Observable<ColaboradorModel>{
  const url = `${this.baseUrl}/colaborador`
  return this.http.post<ColaboradorModel>(url, colaborador);

}

delete(id: String): Observable<void>{
  const url = `${this.baseUrl}/colaborador/${id}`
  return this.http.delete<void>(url)
}

update(colaborador: ColaboradorModel): Observable<void>{
  const url = `${this.baseUrl}/colaborador/${colaborador.id}`
  return this.http.put<void>(url, colaborador)
}

createColab(colaborador: ColaboradorModel, id_departamento: String, id_tipocolab: String){

  const url = `${this.baseUrl}/colaborador?departamentoFk=${id_departamento}&tipoColabFk=${id_tipocolab}`
	return this.http.post<ColaboradorModel>(url, colaborador)

}


}

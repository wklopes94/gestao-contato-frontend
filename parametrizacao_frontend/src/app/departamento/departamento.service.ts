import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departamento } from './departamento.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient ) { }

findAllByHotel(id_hot: String): Observable<Departamento[]>{
  const url = `${this.baseUrl}/departamento?hotelFk=${id_hot}`
  return this.http.get<Departamento[]>(url)
}

findAll(): Observable<Departamento[]>{
  const url = `${this.baseUrl}/departamento`
  return this.http.get<Departamento[]>(url)
}

findById(id: String): Observable<Departamento>{
  const url = `${this.baseUrl}/Departamento/${id}`
  return this.http.get<Departamento>(url)
}

create(Departamento: Departamento): Observable<Departamento>{
  const url = `${this.baseUrl}/Departamento`
  return this.http.post<Departamento>(url, Departamento);

}

delete(id: String): Observable<void>{
  const url = `${this.baseUrl}/Departamento/${id}`
  return this.http.delete<void>(url)
}

update(Departamento: Departamento): Observable<void>{
  const url = `${this.baseUrl}/Departamento/${Departamento.id}`
  return this.http.put<void>(url, Departamento)
}

createDep(departamento: Departamento, id_hotel: String){

  const url = `${this.baseUrl}/departamento?hotelFk=${id_hotel}`
	return this.http.post<Departamento>(url, departamento)


}

}

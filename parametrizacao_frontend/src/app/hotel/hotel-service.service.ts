import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hotel } from './componets/CRUD/reader/hotel.model';



@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

    baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient ) {}

    findAll(): Observable<hotel[]>{
      const url = `${this.baseUrl}/hotel`
      return this.http.get<hotel[]>(url);
    }
/*
    findAllPaginator(queryBuilder: QueryBuilder): Observable<Page<hotel>>{
      const url = `${this.baseUrl}/hotel?`
      .get<hotel[]>(`${this.baseUrl}/hotel?${queryBuilder.buildQueryString()}`,{observe: 'response'})
      .pipe(
        map(response => <Page<hotel>>Page.fromResponse(response))
      );
    }
*/
    findById(id: String): Observable<hotel>{
      const url = `${this.baseUrl}/hotel/${id}`
      return this.http.get<hotel>(url)
    }

    create(hotel: hotel): Observable<hotel>{
      const url = `${this.baseUrl}/hotel`
      return this.http.post<hotel>(url, hotel);

    }

    delete(id: String): Observable<void>{
      const url = `${this.baseUrl}/hotel/${id}`
      return this.http.delete<void>(url)
    }

    update(hotel: hotel): Observable<void>{
      const url = `${this.baseUrl}/hotel/${hotel.id}`
      return this.http.put<void>(url, hotel)
    }

  }

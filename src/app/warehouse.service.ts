import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Warehouse } from './warehouse';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private apiServeUrl = `${environment.apiBaseUrl}/warehouse`;
  constructor(private http: HttpClient) {}

  public getWarehouse(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>(`${this.apiServeUrl}/${id}`);
  }
  public deleteWarehouse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeUrl}/delete/${id}`);
  }

  public createWarehouse(): Observable<Warehouse> {
    return this.http.post<Warehouse>(`${this.apiServeUrl}/create`,0);
  }

  public expandWarehouse(id:number,col:number,floor:number,row:number): Observable<Warehouse> {
    let params = new HttpParams().set('col', col);
    params=params.append('row',row)
    params=params.append('floor',floor)
    return this.http.put<Warehouse>(`${this.apiServeUrl}/expand/${id}`,{params:params});
  }


}

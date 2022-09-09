import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServeUrl=`${environment.apiBaseUrl}/product`;
    constructor(private http:HttpClient){}

    public getAllProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(`${this.apiServeUrl}/all`);
    }

    public getProduct(id :number): Observable<Product>{
        return this.http.get<Product>(`${this.apiServeUrl}${id}`);
    }
    public deleteProduct(id :number): Observable<void>{
        return this.http.delete<void>(`${this.apiServeUrl}/delete/${id}`);
    }

    public updateProducts(product:Product ): Observable<Product>{
        return this.http.put<Product>(`${this.apiServeUrl}/update`,product);
    }
    public addProducts(product:Product): Observable<Product>{
        return this.http.post<Product>(`${this.apiServeUrl}/add`,product);
    }

    public sellProduct(id:number,amount:number): Observable<Product>{
        let params = new HttpParams().set('amount', amount);
        return this.http.put<Product>(`${this.apiServeUrl}/sell/${id}`,{params:params});
    }

    public buyProduct(id:number,amount:number): Observable<Product>{
        let params = new HttpParams().set('amount', amount);
        return this.http.put<Product>(`${this.apiServeUrl}/buy/${id}`,{params:params});
    }
}

import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>( `${environment.apiEndPoint}/api/products` );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>( `${environment.apiEndPoint}/api/products/${id}` );
  }

  saveProduct(product: Product): Observable<Product> {
    if (product.id) { // EDIT / PUT
        return this
              .http
              .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`, 
                            product);
    } else { // CREATE / POST
      return this
             .http
             .post<Product> (`${environment.apiEndPoint}/api/products`, product);
    }
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>( `${environment.apiEndPoint}/api/brands` );
  }
}

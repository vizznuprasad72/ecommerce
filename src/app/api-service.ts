import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient ) { }
  getproducts() {
    return this.http.get('https://69cea5aa33a09f831b7dd21c.mockapi.io/api/watches/watches');
  }
  getproductbyid(id: number) {
    return this.http.get(`https://69cea5aa33a09f831b7dd21c.mockapi.io/api/watches/watches`);
  }
}


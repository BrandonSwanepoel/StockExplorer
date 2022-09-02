import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl: string = "http://localhost:5000/api";

  constructor(private httpClient: HttpClient) { }

  getStocks() {
    return this.httpClient.get(`${this.APIUrl}/Stocks`);
  }
  getStockValue(id: number) {
    return this.httpClient.get(`${this.APIUrl}/Stocks/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BinanceService {
private binanceListUrl:string = "https://support.binance.com/hc/en-us/articles/115003950952-Binance-Lists-iExec-RLC-RLC-";

  constructor(private http:HttpClient) { }

  getlist() : Observable<Object>{
    return this.http.get(this.binanceListUrl);
  }
}

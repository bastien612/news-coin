import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the BinanceDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BinanceDataProvider {
  // binanceListUrl:string = "/binanceList";
  binanceListUrl:string = "https://cors-anywhere.herokuapp.com/support.binance.com/hc/en-us/articles/115003950952";
  //binanceListUrl:string = "https://support.binance.com/hc/en-us/articles/115003950952";

  constructor(public http: HttpClient) {
    console.log('Hello BinanceDataProvider Provider');
  }

  getBinanceNewsList() :Observable<any>{
    return this.http
      .get(this.binanceListUrl);
    ;
  }
}

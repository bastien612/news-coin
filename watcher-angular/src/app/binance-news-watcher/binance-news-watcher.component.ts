import { Component, OnInit } from '@angular/core';
import { BinanceService } from '../services/binance.service';

@Component({
  selector: 'app-binance-news-watcher',
  templateUrl: './binance-news-watcher.component.html',
  styleUrls: ['./binance-news-watcher.component.css']
})
export class BinanceNewsWatcherComponent implements OnInit {

  constructor(private binanceService:BinanceService) { }

  ngOnInit() {
  }

  startBinanceWatch() {
    this.binanceService.getlist().subscribe();
  }

  handleBinanceHtml(data) {
    alert("Enfin ! ");

    console.log("result : " + JSON.stringify(data));
  }
}

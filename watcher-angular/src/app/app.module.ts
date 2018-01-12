import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BinanceNewsWatcherComponent } from './binance-news-watcher/binance-news-watcher.component';
import { BinanceService } from './services/binance.service';


@NgModule({
  declarations: [
    AppComponent,
    BinanceNewsWatcherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BinanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

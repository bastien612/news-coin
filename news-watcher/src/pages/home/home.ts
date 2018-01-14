import { EmailProvider } from './../../providers/email/email';
import { NativeAudio } from '@ionic-native/native-audio';
import { BinanceDataProvider } from './../../providers/binance-data/binance-data';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import jQuery from "jquery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  articles: Array<string> = [];

  constructor(public navCtrl: NavController, public binanceDataProvider: BinanceDataProvider, public emailProvider:EmailProvider, public nativeAudio:NativeAudio) {
    this.binanceDataProvider.getBinanceNewsList().subscribe(response => this.extractList(response), error => this.initList(error));
  }

  watchBinance() {
    this.binanceDataProvider.getBinanceNewsList().subscribe(response => this.extractList(response), error => this.handleHtml(error));
  }

  extractList(htmlData) {
    console.log("N'arrive jamais : le parsing json du sur du html déclenche toujours une erreur.");
  }

  handleHtml(response) {
    console.log("Le status:" + response.status);
    if(response.status != 200) {
      this.error(response);
    }
    let htmlString: string = response.error.text;

    let dom = jQuery('<p id="truc">coucou</p>').append(jQuery.parseHTML(htmlString));

    //console.log("le truc :" + jQuery('ul:first', dom).text());
    let articlesList = jQuery('ul:first', dom);
    let listLength = jQuery('ul:first li', dom).length;
    //console.log("test :" + articlesList.text());

    //console.log("Liste : " + JSON.stringify(articlesList));
    let i:number = 0;
    for(i=0; i< listLength; i++) {
      let e = jQuery("li:first", articlesList);
      this.compareElement(e.text().trim());
      e.remove();
      
    }
   // articlesList.each(this.compareElement(this.articles));

    //console.log("L'erreur :" + JSON.stringify(htmlData));
  }

  compareElement(title:string) {
    let index: number = this.articles.indexOf(title);

    if (index >- 1) {
      console.log("Found element : " + title);
    } else {
      this.articles.push(title);
      this.playSound();
      console.log("not found : " + title);
    }
  }

  initList(response) {
    console.log("Le status:" + response.status);
    if(response.status != 200) {
      this.error(response);
    }
    let htmlString: string = response.error.text;

    let dom = jQuery('<p id="truc">coucou</p>').append(jQuery.parseHTML(htmlString));

    //console.log("le truc :" + jQuery('ul:first', dom).text());
    let articlesList = jQuery('ul:first', dom);
    let listLength = jQuery('ul:first li', dom).length;
    //console.log("test :" + articlesList.text());

    //console.log("Liste : " + JSON.stringify(articlesList));
    let i:number = 0;
    for(i=0; i< listLength; i++) {
      let e = jQuery("li:first", articlesList);
      this.articles.push(e.text().trim());
      e.remove();
    }
  }

  error(response){
    console.log("une erreur s'est produite.");
  }

  sendEmail() {
    this.emailProvider.sendEmail("coucou");
  }

  playSound() {
    this.nativeAudio.preloadSimple('alarm', "../../assets/alarm.mp3")
    .then(() => this.nativeAudio.loop("alarm")
      .then(() => console.log("ok")
    ));
  }

  stopSound() {
    this.nativeAudio.stop("alarm")
      .then(() => console.log("ok")
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { Injectable } from '@angular/core';

/*
  Generated class for the EmailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmailProvider {

  constructor(public http: HttpClient, public emailComposer:EmailComposer) {
    console.log('Hello EmailProvider Provider');
  }

  sendEmail(message:string) {
    
    
    
    this.emailComposer.isAvailable().catch(function(error) {
      console.log("Fails");
      console.log("Fails " + error);
    }).then((available: boolean) =>{
      console.log("Le test d'availability est près.");
      console.log("Available = " + available);
      if(available) {
        
      }

      let email = {
        to: ['bastien.meunier@yahoo.fr', 'netsabcoins@yahoo.com'],
        cc: '',
        bcc: [],
        attachments: [],
        subject: 'NEWS !',
        body: 'How are you? A new coin is available',
        isHtml: true
      };
      
       // Send a text message using default options
      this.emailComposer.open(email);
     });

     
  }
}

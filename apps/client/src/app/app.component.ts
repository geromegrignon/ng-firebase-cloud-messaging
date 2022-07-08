import {Component, OnInit} from '@angular/core';
import {getToken, Messaging} from "@angular/fire/messaging";

@Component({
  selector: 'ng-firebase-cloud-messaging-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private readonly messaging: Messaging) {
  }

  ngOnInit() {
    if(this.messaging) {
      // watch for error about 'cannot use import stattement outside a module', might be due to nx assets
      navigator.serviceWorker.register('firebase-messaging-sw.js', {
        type: 'module'
      }).then()
    }
  }

  requestPermission() {
    getToken(this.messaging, {
      vapidKey: 'BPM6wD6okMKqnDBlzLUqw1vlWw8LKwQyC3RHVq7OdX_JMdFhmZp8vWQz6CGVAlp98hgER-2wslHfyw6_rLkaQh4'
    }).then(e => console.log('token', e))
  }

}

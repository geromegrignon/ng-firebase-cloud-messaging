import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js';
import { getMessaging, onBackgroundMessage, isSupported } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-sw.js';

const app = initializeApp({
  projectId: 'ng-firebase-cloud-messaging',
  appId: '1:1082753911942:web:03078fbd7e258c61d89507',
  storageBucket: 'ng-firebase-cloud-messaging.appspot.com',
  apiKey: 'AIzaSyCgOLWu4biXrsyJoorWUKPNZ4ea6QXeP34',
  authDomain: 'ng-firebase-cloud-messaging.firebaseapp.com',
  messagingSenderId: '1082753911942',
  measurementId: 'G-3HGCB962JP',
});

isSupported().then(isSupported => {

  if (isSupported) {

    const messaging = getMessaging(app);

    onBackgroundMessage(messaging, ({ notification: { title, body, image } }) => {
      self.registration.showNotification(title, { body, icon: image });
    });

  }

});

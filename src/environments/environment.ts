// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SOCKET_ENDPOINT: 'http://localhost:3050',
  firebase: {
    apiKey: 'AIzaSyAbEIy0KYvZwr22OKapwQv3YP4YxYSqJPc',
    authDomain: 'ahorcadogame-61f40.firebaseapp.com',
    databaseURL: 'https://ahorcadogame-61f40.firebaseio.com',
    projectId: 'ahorcadogame-61f40',
    storageBucket: 'ahorcadogame-61f40.appspot.com',
    messagingSenderId: '700472541044',
    appId: '1:700472541044:web:cd479d443a35c70f7a3621',
    measurementId: 'G-YB2H59CYZL',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

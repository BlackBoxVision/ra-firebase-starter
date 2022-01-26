import firebase from "firebase/compat/app";

import { firebaseAppCredentials } from "./config";

let apps = firebase.apps;

export let firebaseApp: firebase.app.App;

if (!apps.length) {
  firebaseApp = firebase.initializeApp(firebaseAppCredentials);
} else {
  firebaseApp = firebase.apps[0];
}

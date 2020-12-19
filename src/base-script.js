import * as firebase from "firebase-admin";
const firebaseConfig = require("../lesson-4ae0c-firebase-adminsdk-47sf3-972024d55e.json");

export default class BaseScript {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        credential: firebase.credential.cert(firebaseConfig),
        databaseURL: "https://lesson-4ae0c.firebaseio.com",
      });
    }
    this.admin = firebase;
  }
}

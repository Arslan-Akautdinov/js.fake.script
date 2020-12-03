import * as firebase from 'firebase-admin';
const firebaseConfig = require("../package-firebase.json");


export default class BaseScript {
    constructor(){
       if (!firebase.apps.length){
            firebase.initializeApp({
                credential: firebase.credential.cert(firebaseConfig),
                databaseURL: "https://lesson-4ae0c.firebaseio.com"
            });
       }
       this.admin = firebase
    }
}
import BaseScript from '../base-script.js';


export default class GeneratorBase extends BaseScript {

    constructor(){
      super()
    }

    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }   
    
    random(low, high) {
        return Math.random() * (high - low) + low
    }

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    getCurrentTimestamp() {
      var OFFSET = 0;
      this.admin
        .database()
        .ref("/.info/serverTimeOffset")
        .on("value", function (ss) {
          OFFSET = ss.val() || 0;
        });
      return Date.now() + OFFSET;
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
}
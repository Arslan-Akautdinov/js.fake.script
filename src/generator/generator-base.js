import BaseScript from '../base-script.js';


export default class GeneratorBase extends BaseScript {
    
    random(low, high) {
        return Math.random() * (high - low) + low
    }

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _firebaseAdmin = require("firebase-admin");

var firebase = _interopRequireWildcard(_firebaseAdmin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var firebaseConfig = require("../package-firebase.json");

var BaseScript = function BaseScript() {
    _classCallCheck(this, BaseScript);

    if (!firebase.apps.length) {
        firebase.initializeApp({
            credential: firebase.credential.cert(firebaseConfig),
            databaseURL: "https://lesson-4ae0c.firebaseio.com"
        });
    }
    this.admin = firebase;
};

exports.default = BaseScript;
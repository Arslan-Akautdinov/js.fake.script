"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Category = function Category(types, image, color, name) {
    _classCallCheck(this, Category);

    this.types = types;
    this.image = image;
    this.color = color;
    this.name = name;
};

exports.default = Category;
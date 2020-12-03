"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generatorBase = require("./generator-base.js");

var _generatorBase2 = _interopRequireDefault(_generatorBase);

var _category = require("../models/category.js");

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneratorCategories = function (_GeneratorBase) {
  _inherits(GeneratorCategories, _GeneratorBase);

  function GeneratorCategories(typesUids) {
    _classCallCheck(this, GeneratorCategories);

    var _this = _possibleConstructorReturn(this, (GeneratorCategories.__proto__ || Object.getPrototypeOf(GeneratorCategories)).call(this, "categories"));

    _this.typesUids = typesUids;
    return _this;
  }

  _createClass(GeneratorCategories, [{
    key: "generateFromJson",
    value: function generateFromJson(pathToFile) {
      this.collection.add();
    }
  }, {
    key: "generateRandom",
    value: function generateRandom(count, types, akcentBetter, akcentLatter, image) {

      if (akcentLatter > akcentBetter) {
        throw new Error("akcentBetter must bigger then akcent Latter");
      }

      var categories = [];
      var defaultCategoryName = "Моя сгенерированная категория ";

      for (var i = 0; i < count; i++) {
        var uids = [];

        for (var j = 0; j < types.length; j++) {
          if (this.getRandomInt(akcentBetter) > akcentLatter) {
            uids.push(types[j].uid);
          }
        }

        if (uids.length == 0) {
          uids.push(types[this.getRandomInt(types.length)].uid);
        }

        var name = defaultCategoryName + i.toString();
        var category = new _category2.default(uids, image, this.getRandomColor(), name);
        categories.push(category);
      }
      return categories;
    }
  }]);

  return GeneratorCategories;
}(_generatorBase2.default);

exports.default = GeneratorCategories;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generatorBase = require("./generator-base");

var _generatorBase2 = _interopRequireDefault(_generatorBase);

var _categoryType = require("../models/category-type");

var _categoryType2 = _interopRequireDefault(_categoryType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneratorCategoriesTypes = function (_GeneratorBase) {
    _inherits(GeneratorCategoriesTypes, _GeneratorBase);

    function GeneratorCategoriesTypes() {
        _classCallCheck(this, GeneratorCategoriesTypes);

        return _possibleConstructorReturn(this, (GeneratorCategoriesTypes.__proto__ || Object.getPrototypeOf(GeneratorCategoriesTypes)).call(this, "types"));
    }

    _createClass(GeneratorCategoriesTypes, [{
        key: "generateFromJson",
        value: function generateFromJson(path) {}
    }, {
        key: "generateRandom",
        value: function generateRandom(count) {
            var categoriesTypes = [];
            for (var i = 0; i < count; i++) {
                categoriesTypes.push(new _categoryType2.default("Тип #" + i, "TypeNumber" + this.getRandomInt(9) * 100 + i));
            }
            console.log(categoriesTypes);
            return categoriesTypes;
        }
    }, {
        key: "generateFromNames",
        value: function generateFromNames(names) {
            var categoriesTypes = [];
            for (var i = 0; i < names.length; i++) {
                categoriesTypes.push(new _categoryType2.default(names[i], "TypeNumber" + this.getRandomInt(9) * 100 + i));
            }
            console.log(categoriesTypes);
            return categoriesTypes;
        }
    }]);

    return GeneratorCategoriesTypes;
}(_generatorBase2.default);

exports.default = GeneratorCategoriesTypes;
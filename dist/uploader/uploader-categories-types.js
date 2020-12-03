"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classTransformer = require("class-transformer");

var _categoryType = require("../models/category-type");

var _categoryType2 = _interopRequireDefault(_categoryType);

var _uploaderBase = require("./uploader-base");

var _uploaderBase2 = _interopRequireDefault(_uploaderBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploaderCategoriesTypes = function (_UploaderBase) {
    _inherits(UploaderCategoriesTypes, _UploaderBase);

    function UploaderCategoriesTypes() {
        _classCallCheck(this, UploaderCategoriesTypes);

        return _possibleConstructorReturn(this, (UploaderCategoriesTypes.__proto__ || Object.getPrototypeOf(UploaderCategoriesTypes)).call(this, "types"));
    }

    _createClass(UploaderCategoriesTypes, [{
        key: "uploadCategoriesType",
        value: async function uploadCategoriesType(categoriesType) {
            return await (await this.collection.add((0, _classTransformer.classToPlain)(categoriesType))).id;
        }
    }, {
        key: "uploadCategoriesTypeList",
        value: async function uploadCategoriesTypeList(categoriesTypeListNames) {
            var categoriesTypeList = [];
            for (var i = 0; i < categoriesTypeListNames.length; i++) {
                var uid = await this.uploadCategoriesType({ name: categoriesTypeListNames[i] });
                categoriesTypeList.push(new _categoryType2.default(categoriesTypeListNames[i], uid));
            }
            return categoriesTypeList;
        }
    }]);

    return UploaderCategoriesTypes;
}(_uploaderBase2.default);

exports.default = UploaderCategoriesTypes;
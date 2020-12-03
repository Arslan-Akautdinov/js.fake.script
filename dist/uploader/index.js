'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uploader = undefined;

var _uploaderCategories = require('./uploader-categories');

var _uploaderCategories2 = _interopRequireDefault(_uploaderCategories);

var _uploaderCategoriesTypes = require('./uploader-categories-types');

var _uploaderCategoriesTypes2 = _interopRequireDefault(_uploaderCategoriesTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uploader = exports.uploader = {
    categories: new _uploaderCategories2.default(),
    categoriesTypes: new _uploaderCategoriesTypes2.default()
};
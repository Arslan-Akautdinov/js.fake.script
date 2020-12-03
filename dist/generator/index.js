'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generator = undefined;

var _generatorCategories = require('./generator-categories.js');

var _generatorCategories2 = _interopRequireDefault(_generatorCategories);

var _generatorCategories_types = require('./generator-categories_types.js');

var _generatorCategories_types2 = _interopRequireDefault(_generatorCategories_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generator = exports.generator = {
    categories: new _generatorCategories2.default(),
    categoriesTypes: new _generatorCategories_types2.default()
};
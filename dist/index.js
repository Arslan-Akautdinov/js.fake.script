"use strict";

var _index = require("./generator/index");

var _index2 = require("./uploader/index");

_index2.uploader.categoriesTypes.uploadCategoriesTypeList(["Каналы", "Обсуждения"]).then(async function (categoriesTypes) {
    var imageUrl = "https://via.placeholder.com/150/FFFFFF/808080%20?Text=Digital.com";
    var categories = _index.generator.categories.generateRandom(10, categoriesTypes, 100, 50, imageUrl);
    await _index2.uploader.categories.uploadCategoryList(categories);
}).catch(function (err) {
    console.log(err);
});
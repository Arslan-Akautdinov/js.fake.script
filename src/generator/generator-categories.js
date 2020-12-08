import GeneratorBase from "./generator-base.js";
import Category from "../models/category.js";

export default class GeneratorCategories extends GeneratorBase {
  constructor(typesUids) {
    super("categories");
    this.typesUids = typesUids;
  }

  generateFromJson(pathToFile) {
    this.collection.add();
  }

  generateRandomCategories(count)
  {
      let categories = []
      for (let i = 0; i < count; i++)
      {
          categories.push(new Category(
              "https://via.placeholder.com/50",
              this.getRandomColor,
              "Категория " + i,
              )
          )
      }
      return categories
  }
}

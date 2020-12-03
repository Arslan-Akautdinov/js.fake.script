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

  generateRandom(count, types, akcentBetter, akcentLatter, image) {
    
    if (akcentLatter > akcentBetter)
    {
        throw new Error("akcentBetter must bigger then akcent Latter");
    }

    let categories = [];
    let defaultCategoryName = "Моя сгенерированная категория ";

    for (let i = 0; i < count; i++) {
      let uids = [];

      for (let j = 0; j < types.length; j++) {
        if (this.getRandomInt(akcentBetter) > akcentLatter) {
          uids.push(types[j].uid);
        }
      }

      if (uids.length == 0) {
        uids.push(types[this.getRandomInt(types.length)].uid);
      }

      let name = defaultCategoryName + i.toString();
      let category = new Category(uids, image, this.getRandomColor(), name);
      categories.push(category);
    }
    return categories;
  }
}

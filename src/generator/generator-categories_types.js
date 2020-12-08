import GeneratorBase from "./generator-base";
import CategoryType from "../models/category-type"
import CategoryTypes from "../models/category-type";
import Category from "../models/category";

export default class GeneratorCategoriesTypes extends GeneratorBase
{
    generateRandomCategoriesType(name)
    {
        let categoriesType = new CategoryType(
            name,
            "TestDescription",
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/50",
            this.getRandomColor())
        return categoriesType;
    }
}
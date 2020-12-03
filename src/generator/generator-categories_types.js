import GeneratorBase from "./generator-base";
import CategoryType from "../models/category-type"
import CategoryTypes from "../models/category-type";

export default class GeneratorCategoriesTypes extends GeneratorBase
{
    constructor()
    {
        super("types");
    }

    generateFromJson(path){
        
    }

    generateRandom(count)
    {
        let categoriesTypes = []
        for(let i=0; i < count; i++){
            categoriesTypes.push(new CategoryType( "Тип #" + i, "TypeNumber" + this.getRandomInt(9) * 100 + i))
        }
        console.log(categoriesTypes)
        return categoriesTypes;
    }

    generateFromNames(names)
    {
        let categoriesTypes = []
        for(let i=0; i< names.length; i++)
        {
            categoriesTypes.push(new CategoryType( names[i], "TypeNumber" + this.getRandomInt(9) * 100 + i))
        }
        console.log(categoriesTypes);
        return categoriesTypes
    }
}
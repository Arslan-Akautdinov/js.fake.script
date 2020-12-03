import { classToPlain } from "class-transformer";
import CategoryType from "../models/category-type";
import UploaderBase from "./uploader-base";

export default class UploaderCategoriesTypes extends UploaderBase
{
    constructor(){
        super("types")
    }

    async uploadCategoriesType(categoriesType){
        return await (await this.collection.add(classToPlain(categoriesType))).id
    }

    async uploadCategoriesTypeList(categoriesTypeListNames){
        let categoriesTypeList= []
        for(let i = 0; i < categoriesTypeListNames.length; i++){
           let uid = await this.uploadCategoriesType({name: categoriesTypeListNames[i]})
           categoriesTypeList.push(new CategoryType(categoriesTypeListNames[i], uid));
        }
        return categoriesTypeList;
    }
}
import { classToPlain } from "class-transformer";
import UploaderBase from "./uploader-base";

export default class UploaderCategoriesTypes extends UploaderBase
{
    constructor(){
        super("types")
    }

    async uploadCategoriesType(categoriesType){
        let categoriesTypeUid = await (await this.collection.add({})).id
        categoriesType.uid = categoriesTypeUid;
        await this.collection.doc(categoriesTypeUid).set(classToPlain(categoriesType))
        return categoriesTypeUid
    }

    async uploadCategoriesTypeList(categoriesTypeList){
        for(let i = 0; i < categoriesTypeList.length; i++){
           await this.uploadCategoriesType(categoriesTypeList[i])
        }
    }
}
import UploaderBase from "./uploader-base";
import { firestore } from "firebase-admin";
import { classToPlain } from "class-transformer";


export default class UploaderCategories extends UploaderBase {
    constructor() {
        super("types");
    }

    async uploadCategory(category, categoriesTypesUid) {
        await this.collection.doc(categoriesTypesUid).collection("categories").add(classToPlain(category));
    }

    async uploadCategoryList(categories, categoriesTypesUid) {
        for(let i = 0; i < categories.length; i++) {
            await this.uploadCategory(categories[i], categoriesTypesUid);
        }
    }
}

import UploaderBase from "./uploader-base";
import { classToPlain } from 'class-transformer';


export default class UploaderCategories extends UploaderBase {
    constructor() {
        super("categories");
    }

    async uploadCategory(category) {
        await this.collection.add(classToPlain(category));
    }

    async uploadCategoryList(categories) {
        for(let i = 0; i < categories.length; i++) {
            await this.uploadCategory(categories[i]);
        }
    }
}

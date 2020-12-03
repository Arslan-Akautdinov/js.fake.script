import BaseScript from "../base-script";

export default class UploaderBase extends BaseScript{
    constructor(collectionPath){
        super();
        this.collection =  this.admin.firestore().collection(collectionPath);
    }
}
import { generator } from "./generator/index";
import { uploader } from "./uploader/index";


uploader.categoriesTypes.uploadCategoriesTypeList(["Каналы", "Обсуждения"])
.then(async (categoriesTypes) => {
    let imageUrl = "https://via.placeholder.com/150/FFFFFF/808080%20?Text=Digital.com"
    let categories = generator.categories.generateRandom(10, categoriesTypes, 100, 50, imageUrl);
    await uploader.categories.uploadCategoryList(categories);
})
.catch((err) => {
    console.log(err);
})



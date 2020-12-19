import { generator } from "./generator/index";
import { uploader } from "./uploader/index";

let categoriesType = [
    generator.categoriesTypes.generateRandomCategoriesType("Обсуждения"),
    generator.categoriesTypes.generateRandomCategoriesType("Каналы")
]

for (let i = 0; i < categoriesType.length; i ++)
{
    uploader.categoriesTypes.uploadCategoriesType(categoriesType[i])
    .then( async (categoriesTypeUid) => {
        await uploader.categories.uploadCategoryList(
            generator.categories.generateRandomCategories(5 + i),
            categoriesTypeUid
        )
    })
    .catch((err) => {
        console.log(err)
    });
}

// generator.clubs.generateRandomClubList(
//   20,
//   "NquW6TOXO5A2d1ORl8vQ",
//   "963XCOgP8jIB3UD3q1Pk",
//   ["4psjneHMgUo1HMg2mPnX", "UiJMC5HUhGdeitVkBBT4"],
//   300
// ).then(async (clubs) => {
//     await uploader.clubs.uploadClubList(clubs)
//     console.log("Выгрузка завершена")
//     process.exit();
// })


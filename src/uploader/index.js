import UploaderCategories from './uploader-categories'
import UploaderCategoriesTypes from './uploader-categories-types'
import UploaderClubs from './uploader-clubs'


export const uploader = {
    clubs: new UploaderClubs(),
    categories: new UploaderCategories(),
    categoriesTypes: new UploaderCategoriesTypes()
}
import GeneratorClubs from './generator-clubs.js'
import GeneratorCategories from './generator-categories.js'
import GeneratorCategoriesTypes from './generator-categories_types.js'


export const generator = {
    clubs: new GeneratorClubs(),
    categories: new GeneratorCategories(),
    categoriesTypes: new GeneratorCategoriesTypes()
}

export default class CategoryType{
    constructor(name, description, image, miniImage, color, uid = "")
    {
        this.uid = uid
        this.name = name
        this.color = color
        this.image = image
        this.minImage = miniImage
        this.description = description
    }
}
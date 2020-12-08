import Club from "../models/club"
import GeneratorBase from "./generator-base"

export default class GeneratorClubs extends GeneratorBase
{
    constructor()
    {
        super()
    }

    generateRandomClub(uidChat, uidType, uidCategories)
    {
        return new Club(uidChat, uidType, uidCategories, this.getRandomColor(), "Test", false, "test")
    }

    generateRandomClubList(count, uidChat, uidType, uidCategories)
    {
        let clubs = []
        for (let i=0; i < count; i++){
            clubs.push(this.generateRandomClub(uidChat, uidType, uidCategories))
        }
        return clubs;
    }

}
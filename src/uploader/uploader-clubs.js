import { classToPlain } from "class-transformer";
import UploaderBase from "./uploader-base";

export default class UploaderClubs extends UploaderBase
{
    constructor()
    {
        super("clubs")
    }

    async uploadClub(club)
    {
        await this.collection.add(classToPlain(club))
    }

    async uploadClubList(clubList)
    {
        for (let i = 0; i < clubList.length; i ++)
        {
           await this.uploadClub(clubList[i])
        }
    }
}
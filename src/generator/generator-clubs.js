import Club from "../models/club";
import GeneratorBase from "./generator-base";

export default class GeneratorClubs extends GeneratorBase {
  constructor() {
    super();
  }

  generateRandomClub(uidChat, uidType, uidCategories) {
    return new Club(
      uidChat,
      uidType,
      uidCategories,
      this.getCurrentTimestamp(),
      this.getRandomColor(),
      "Test",
      false,
      "test"
    );
  }

  async generateRandomClubList(
    count,
    uidChat,
    uidType,
    uidCategories,
    timeout = 0
  ) {
    let clubs = [];
    for (let i = 0; i < count; i++) {
      if (timeout > 0) {
        await this.sleep(timeout);
      }
      clubs.push(this.generateRandomClub(uidChat, uidType, uidCategories));
    }
    return clubs;
  }
}

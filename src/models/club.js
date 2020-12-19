export default class Club {
  constructor(
    uidChat,
    uidType,
    uidCategories,
    createdAt,
    color,
    author,
    isPrivate,
    description
  ) {
    this.uidChat = uidChat;
    this.uidType = uidType;
    this.uidCategories = uidCategories;
    this.color = color;
    this.author = author;
    this.isPrivate = isPrivate;
    this.description = description;
    this.createdAt = createdAt;
  }
}

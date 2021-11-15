export class Lane {
  constructor(public name:string, public stickers: Sticker[] = []) {}

  addSticker(sticker: Sticker) : void {
    this.stickers.push(sticker);
  }

  removeSticker(sticker: Sticker) {
    this.stickers.splice(this.stickers.indexOf(sticker), 1)
  }

  addLike(sticker: Sticker) {
    let index = this.stickers.indexOf(sticker);
    if (index > -1) {
      this.stickers[index].addLike();
    }
  }

  updateName(newName: string) {
    this.name = newName;
  }
}

export class Sticker {
  constructor(public description: string, public likes: number = 0) {}

  addLike() {
    this.likes++;
  }
}

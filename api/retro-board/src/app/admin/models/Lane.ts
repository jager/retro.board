export class Lane {
  constructor(public name:string, public stickers: Sticker[] = []) {}

  addSticker(sticker: Sticker) : void {
    this.stickers.push(sticker);
  }

  removeSticker(sticker: Sticker) {
    this.stickers.splice(this.stickers.indexOf(sticker), 1)
  }
}

export class Sticker {
  constructor(public description: string) {}
}

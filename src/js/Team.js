export default class Team {
  constructor(...characters) {
    if (characters.length === 0) {
      throw new Error('The team cannot be empty!');
    }
    this.characters = characters;
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.characters.length;

    return {
      next: () => {
        if (current < last) {
          return {
            done: false,
            value: this.characters[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

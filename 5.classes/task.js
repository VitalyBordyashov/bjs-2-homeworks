class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
  }
  
  fix() {
      this.state *= 1.5;
  }

  get state() {
      return this._state;
  }
  set state (value) {
      if (value < 0) {
          this.state = 0; 
      }
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, author) {
      this.author = author;
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = "book";
  }
}

class NovelBook extends Book {
  constructor (name, releaseDate, pagesCount, author) {
      this.author = author;
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor (name, releaseDate, pagesCount, author) {
      this.author = author;
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor (name, releaseDate, pagesCount, author) {
      this.author = author;
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = "detective";
  }
}
class PrintEditionItem {
  
  constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
  }
  get state() {
    return this._state;
  }
  set state (value) {
    if (value < 0) {
      this._state = 0; 
    } else if (value > 100) {
      this._state = 100;
    } 
    else {
      this._state = value;
    }
  }
  
  fix() {
      this.state *= 1.5;
  }
}
 
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
  }
}
 
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
  }
}
 
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
  }
}
 
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
  }
}
 
class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
  }
}
 
class Library {
  constructor (name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    } 
  }
 
  findBookBy(type, value) {
    let elem = this.books.find(Element =>  Element[type] === value);
    if (elem === undefined) {
      return null;
    } 
      return elem;
}

  giveBookByName(bookName) {
    let obj = this.books.find(Element =>  Element.name === bookName);
    let index = this.books.findIndex(Element =>  Element.name === bookName);
    if (index === -1) {
        return null;
    } 
    this.books.splice(index,1);
    return obj;
  }
}
 
class Student {
  constructor (name) {
    this.name = name;
    this.performance = {};
  }
   
  addMark(mark, setSubject) {
    if (!this.performance[setSubject]) {
      this.performance[setSubject] = [];
    }
    if (mark < 1 || mark > 5) {
      console.log ("Ошибка, оценка должна быть числом от 1 до 5");
      return "Ошибка, оценка должна быть числом от 1 до 5";
    }
    this.performance[setSubject].push(mark);
  }


 
  getAverageBySubject(setSubject) {
    if (!this.performance[setSubject]) {
      console.log ("Несуществующий предмет");
      return "Несуществующий предмет";
    }
    let a =  this.performance[setSubject];
    let result = a.reduce((sum, item) => sum + item);
    let averageSubject = result / a.length;
    console.log('Средний балл по предмету ' + setSubject + ' ' + averageSubject);
    return averageSubject;
  }
 
  getAverage() {
    let sum = 0;
    for (let idx in this.performance) {
      console.log(idx);  
      let b = this.getAverageBySubject(idx);
      console.log(b);
      sum = sum + b;
      console.log(sum);
      }
      let generalAverage = sum / Object.values(this.performance).length;
      console.log('Средний балл по всем предметам ' + generalAverage);
      return generalAverage;
    }
  
 
  exclude(reason) {
    this.excluded = reason;
  }
 
}
const student = new Student("Олег Никифоров");
student.addMark(7, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");
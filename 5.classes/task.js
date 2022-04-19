class PrintEditionItem {
  
  constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
  }
  get () {
    return this.state;
  }
  set (value) {
    if (value < 0) {
      this.state = 0; 
    } else if (value > 100) {
      this.state = 100;
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
    return this.books.find(Element =>  Element[type] === value);
}
 
  giveBookByName(bookName) {
      let obj = this.books.filter(Element =>  Element.name != bookName);
      return this.books = obj;
}
}
 
class Student {
  constructor (name) {
    this.name = name;
    this.performance = [];
  }
   
  addMark(mark, setSubject) {
    let obj = [] 
    let marks = [];
    if (mark < 1 && mark > 5) {
    return "Ошибка, оценка должна быть числом от 1 до 5";
    }
    marks.push(mark);
    obj[setSubject] = marks;
    this.performance.push(obj); 
  }


 
  getAverageBySubject(setSubject) {
    for (let item of this.performance) {
      if (item.setSubject === setSubject) {
        let result = this.marks.reduce((sum, item) => sum + item);
        return (result / this.marks.length);
      }
    }
 
  }
 
  getAverage() {
    for (let item of this.performance) {
      return getAverageBySubject(item) / this.item.length;
      
    }
  }
 
  exclude(reason) {
    this.excluded = reason;
  }
 
}
const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");


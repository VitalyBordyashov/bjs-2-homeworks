function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
let student1 = new Student("Tony", "male", 37);

let student2 = new Student("Buzz", "female", 35);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
    this.marks = marks; 
    marks = [];
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (mark1,mark2,mark3) {
  if (this.marks === undefined) { 
    this.marks = marks; 
    marks = [];
  } else {
    this.marks.push(mark1,mark2,mark3)
  }
}

Student.prototype.getAverage = function (marks) {
  return marks.forEach((sum, idx, item) => sum += (item[idx])) / marks.length;
}

Student.prototype.exclude = function (reason) {
  delete Student.prototype.subject;
  delete Student.prototype.marks;
  this.excluded = reason;
}
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
    this.marks = [mark];
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (mark1,mark2,mark3,...rest) {
  if (this.marks === undefined) {  
    this.marks = [mark1,mark2,mark3,...rest];
  } else {
    this.marks.push(mark1,mark2,mark3,...rest)
  }
}

Student.prototype.getAverage = function () {
  let result = this.marks.reduce((sum, item) => sum + item);
  return (result / this.marks.length);
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
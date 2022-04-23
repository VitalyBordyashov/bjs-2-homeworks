let parseCount = (content) => {
    let x = Number.parseInt(content);
    if (isNaN(x)) {
        throw new Error ("Невалидное значение");
    } else {
        return x;
    }
}

let validateCount = (content) => {
    try {
        return parseCount(content);
    }
    catch (err) {
        return err;
    }
}

class Triangle {
    constructor (a, b, c) {
        this.side1 = a;
        this.side2 = b;
        this.side3= c;
        if ((a + b) < c || (a + c) < b || (c + b) < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        let perimeter = this.side1 + this.side2 + this.side3;
        console.log('Периметр треугольника равен ' + perimeter);
        return perimeter;
    }

    getArea() {
        let p =  this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
        console.log(s);
        let result = Number(s.toFixed(3));
        console.log('Площадь треугольника равна ' + result);
        return result;
    }
}

let getTriangle = (a, b, c) => {
    const triangle = new Triangle(a, b, c);
    console.log(triangle);
    try {
        return (triangle, triangle.getPerimeter(), triangle.getArea());
    }
    catch (err) {
        throw new Error ("Ошибка! Треугольник не существует");
    }
}
getTriangle(5, 6, 9);




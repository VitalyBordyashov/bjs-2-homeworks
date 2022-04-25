let parseCount = (content) => {
    let x = Number.parseInt(content);
    if (isNaN(x)) {
        throw new Error ("Невалидное значение");
    } 
    return x;
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
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        let p =  this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
        return Number(s.toFixed(3));
    }
}

let getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c);
    }
    catch (err) {
        const triangle = {
            side1: a,
            side2: b,
            side3: c,
            getPerimeter() {
                throw new Error ("Ошибка! Треугольник не существует");
            },
            getArea() {
                throw new Error ("Ошибка! Треугольник не существует");
            }

        }
        return triangle;
    }
}




"use strict"

class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    area() {
        return (this.base * this.altura)/2;
    }
}

var rect1 = new Rectangulo(4, 5);
console.log(rect1.area());
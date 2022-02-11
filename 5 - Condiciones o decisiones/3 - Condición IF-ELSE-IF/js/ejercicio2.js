"use strict"

var a = 5
var b = 12
var c = 4

if ((b > c) && !(c < a)) {
    console.log('Se ejecutó la primera condición');
} else if (!(b >= a) && (c > !b)) {
    console.log('Se ejecutó la segunda condición');
} else {
    console.log('Se ejecutó el último else')
}
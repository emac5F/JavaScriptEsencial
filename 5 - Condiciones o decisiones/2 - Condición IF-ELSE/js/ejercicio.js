"use strict"

var a = 5
var b = 12
var c = 4

if((b > c) && (c > a) || !(b >= a)) {
    console.log('Se ejecutó la primera condición');
} else {
    console.log('No se ejecutó la primera condición');
}

if((a <= b) || !(c < a) && (c < b)) {
    console.log('Se ejecutó la segunda condición');
} else {
    console.log('No se ejecutó la segunda condición')
}
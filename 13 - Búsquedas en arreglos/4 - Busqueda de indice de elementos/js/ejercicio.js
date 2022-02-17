"use strict"

var mascotas = [
    {nombre: 'Snoopy', raza: 'basset-hound', edad: 2},
    {nombre: 'Molly', raza: 'chihuahua', edad: 8},
    {nombre: 'Megan', raza: 'cocker-spaniel', edad: 15},
    {nombre: 'Canela', raza: 'chihuahua', edad: 6}
];

var resultado  = mascotas.some(mascota => mascota.edad <= 7);

console.log(resultado);
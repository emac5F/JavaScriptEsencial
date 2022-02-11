"use strict"

// JSON => JavaScript Object Notation

var persona = {nombre: 'Edith', twitter: 'dcEdith'};

var personas = [
    {nombre: 'Gaby', twitter: 'dcGaby'},
    {nombre: 'Edwin', twitter: 'dcEdwin'},
    {nombre: 'Dilia', twitter: 'dcDilia'},
    {nombre: 'David', twitter: 'dcDavid'},
    {nombre: 'Mary', twitter: 'dcMary'},
    persona
]

//convertido en una cadena de texto
var personaJSON = JSON.stringify(persona);

//convertido en un obj json
var nuevaPersona = JSON.parse(personaJSON)

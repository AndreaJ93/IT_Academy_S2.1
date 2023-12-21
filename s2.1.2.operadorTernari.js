//Exercici 1:
//Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir':

const potConduir = (edat) => edat >= 18 ? "Pots conduir" : "No pots conduir";

console.log(potConduir(9));
console.log(potConduir(19))

// Exercici 2:
// Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran':

let num1 = 13;
let num2 = 5;

const numMesGran = num1 > num2 ? "num1 és més gran" : "num2 és més gran";

console.log(numMesGran);

//Exercici 3:
// Operador ternari per determinar si un número és positiu, negatiu o zero:

let num = 0;

const resultat = num === 0 ? "El número és zero" : (num > 0 ? "El número és positiu" : "El número és negatiu");

console.log(resultat);

// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim:

function trobarMaxim (a, b, c) {
  return a > b ? (a > c ? "A és més gran" : "C és més gran") : (b > c ? "B és més gran": "C és més gran");
}

console.log(trobarMaxim(2, 5, 1));
console.log(trobarMaxim(12, 5, 1));
console.log(trobarMaxim(2, 5, 11));

// Exercici 4:
// Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

const arrayNums = [2, 8, 2, 4, 5];

function parOImpar(array) {
    for (let i = 0; i < array.length; i++) {
        const parImp = array[i] % 2 === 0 ? "És parell" : "És imparell";
        console.log(parImp)
    }
}

parOImpar(arrayNums);
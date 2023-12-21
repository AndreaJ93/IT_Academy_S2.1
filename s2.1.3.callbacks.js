// Exercici 1
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

let nombre = 67;

function processar (nombre, callback) {
    return callback(nombre);
}

function donamNombre(num){
    console.log(`El nombre és ${num}`);
}

processar(nombre, donamNombre);

//Exercici 2
//Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres:

function calculadora(num1, num2, callback) {
    return callback (num1, num2);
};

function suma(a, b) {
    return a + b;
};

console.log(calculadora(-3, 32, suma));

// Exercici 3
//Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre:

function esperarISaludar(nom, callback) {
    return setTimeout(() => {callback(nom);}, 2000);
}

function saludar(a) {
    console.log(`¡Hola ${a}!`)
}

esperarISaludar("Andrea", saludar);

//Exercici 4
//Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
testArray = [1, 2, 3, "hola", 345];

function processarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function processarElement(element) {
    console.log(element);
}

processarElements(testArray, processarElement);

//Exercici 5
//Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada:

let frase = "Hola em dic Andrea";

function processarCadena(string, callback) {
    return callback(string.toUpperCase());
}

function imprString(str) {
    console.log(str);
}

processarCadena(frase, imprString);
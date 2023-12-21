// Exercici 1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const arrayNumeros = [1, 2, 3, 4];

const arrayQuadrats = arrayNumeros.map((value) => value ** 2);

console.log(arrayQuadrats);

// Exercici 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const arrayFilter = arrayNumeros.filter((value) => value % 2 === 0);

console.log(arrayFilter);

// Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const arrayNumeros1 = [1, 10, 8, 11];

console.log(arrayNumeros1.find((value) => value > 10));

// Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const arrayNumeros2 = [13, 7, 8, 21];

console.log(arrayNumeros2.reduce((total, num) => total + num));

// Exercici 5
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
// - Filtra els nombres majors o iguals a 10.
// - Multiplica cada nombre filtrat per 2.
// - Calcula la suma dels nombres filtrats i multiplicats per 2.
// - La funció ha de retornar el resultat de la suma.

const arrayNumeros3 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

function resultado(array) {
    return array.filter((value) => value >= 10).map((value) => value * 2).reduce((total, value) => total + value)
};

console.log(resultado(arrayNumeros3));

// Exercici 6
// Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament:

const arrayNumeros4 = [11, 12, 13, 14];

console.log(arrayNumeros4.every((num) => num > 10)); //determina si tots el element de l'array són majors que 10.
console.log(arrayNumeros4.some((num) => num > 10)); //determina si alguns elements de l'array són majors que 10.

function majors10(array) {
    if (array.every((num) => num > 10) === true) {
        console.log("Tots els elements són majors de 10.")
    } else if (array.some((num) => num > 10) === true) {
        console.log("Alguns dels elements són majors de 10.")
    } else {
        console.log("Els elemens son menors a 10.")
    }
};

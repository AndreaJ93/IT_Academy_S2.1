// Exercici 1
// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 2000);
});

// Exercici 2
// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

promesa.then((text) => {console.log(text);});

// Exercici 3
// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

const promesa1 = (input) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input === "Hola") {
            resolve("¡¡Hola!!");
          } else {
            reject("¡¡Error!!");
          }
        }, 2000);
});

promesa1("Hola")
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.error(error);
  });

promesa1("Adéu")
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.error(error);
  });

// Exercici 4
// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

async function funcioAsincrona() {
    console.log("Esperant...");
    resultat = await promesa;
    console.log(resultat);
}

funcioAsincrona();

// Exercici 5
// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

async function funcioAsincrona2() {
    try {
        console.log("Esperant...");
        resultat = await promesa;
        console.log(resultat);
    } catch (error) {
        console.error('Error:', error);
    }
}

funcioAsincrona2();

// Exercici 6
// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola");
    }, 2000);
});

const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Adéu");
    }, 3000);
});

Promise.all([promesa2, promesa3]).then((resultat) => {console.log(resultat)});
var ejercicioA = 'Ejercicio A'
console.warn(ejercicioA)

var cantidadDeGatos = 10;

for (var gato = 1; gato <= cantidadDeGatos; gato++) {
    if (gato % 3 === 1) {
        console.log("Gato #" + gato + ": 😺");
    } else if (gato % 3 === 2) {
        console.log("Gato #" + gato + ": 😸");
    } else {
        console.log("Gato #" + gato + ": 😹");
    }
}
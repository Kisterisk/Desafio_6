var ejercicioC = 'Ejercicio C'
console.warn(ejercicioC)

var cantidadDeGatos = 10;
var cantidadDePasos = 6;

for (var gato = 1; gato <= cantidadDeGatos; gato++) {
    var pasos = "";
    for (var paso = 1; paso <= cantidadDePasos; paso++) {
        pasos += "🐾";
    }

    var emojiGato = (gato % 2 === 1) ? "🐈" : "🐈⬛";

    console.log("Gato #" + gato + ": " + emojiGato + " " + pasos);
}
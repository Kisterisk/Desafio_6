var ejercicioB = 'Ejercicio B'
console.warn(ejercicioB)

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var gato = 1; gato <= cantidadDeGatos; gato++) {
    var pasos = "";
    for (var patas = 1; patas <= cantidadDePasos; patas++) {
        pasos += "🐾";
    }
    console.log('Gato #'+ gato + ': 🐈 ' + pasos)
}
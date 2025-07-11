// Ejercicio 4: Calcular Promedio de Notas con entrada del usuario

const prompt = require("prompt-sync")();

function calcularPromedio(notas) {
    let suma = 0;
    for (let nota of notas) {
        suma += nota;
    }

    let promedio = suma / notas.length;
    return promedio.toFixed(2);
}

let entrada = prompt("Ingresa las notas separadas por comas (ej: 4.5,3.8,5): ");
let notas = entrada.split(",").map(Number);

console.log("Notas:", notas);
console.log("Promedio:", calcularPromedio(notas));

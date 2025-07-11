// Ejercicio 3: Buscar Producto en Inventario

const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Pantalón", precio: 35 }
];

function buscarProducto(nombre, inventario) {
    for (let producto of inventario) {
        if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
            return producto;
        }
    }
    return null;
}

// Pruebas
console.log(buscarProducto("Camisa", inventario));
console.log(buscarProducto("Gorra", inventario));

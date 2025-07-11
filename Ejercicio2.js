// Ejercicio 2: Validar Contraseña
function validarContraseña(contraseña) {
    const tieneLongitud = contraseña.length >= 8;
    const tieneNumero = /\d/.test(contraseña);
    const tieneMayuscula = /[A-Z]/.test(contraseña);
    return tieneLongitud && tieneNumero && tieneMayuscula;
}
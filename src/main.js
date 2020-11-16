window.addEventListener("load", script);

/* Importamos la funcionalidad que necesitamos */
import { suma, resta, multiplicacion } from './funciones.js';

function script(){
    /* Código de nuestra aplicación */
    console.log(`La suma de 1,2 y 3 es: ${suma(1,2,3)}`);
    console.log(`La resta de 1,2 y 3 es: ${resta(1,2,3)}`);
    console.log(`La multiplicación de 1,2 y 3 es: ${multiplicacion(1,2,3)}`);
}
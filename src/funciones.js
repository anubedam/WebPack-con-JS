const suma = (...numeros) => {
    /* Realiza la suma de n números */
    let sum = 0;

    for (let numero of numeros){
        sum += numero;
    }
    return sum;  
};

const resta = (...numeros) => {
    /* Realiza la resta de n números */
    let rest;

    for (let numero of numeros){
        if (typeof rest === 'undefined'){
            rest = numero;
        }else{
            rest -= numero; 
        }
    }
    return rest;  
};

const multiplicacion = (...numeros) => {
    /* Realiza la multiplicacion de n números */
    let multi = 1;

    for (let numero of numeros){
        multi *= numero;
    }
    return multi;  
};

/* Exportamos lo que queramos utilizar en otros módulos */
export { suma, resta, multiplicacion };
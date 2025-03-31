let operador;
let num1;
let num2;
let continuar = true;
let respuesta;
let resultado;

while (continuar) {
    num1 = Number(prompt('Ingresa el Primer Número'));
    num2 = Number(prompt('Ingresa el Segundo Número'));

    if ((isNaN(num1)) || (isNaN(num2))) {
        alert('Por favor Ingrese Números validos.')
        continue        
    }

    operador = parseInt(prompt('Operación a realizar: 1- suma || 2- Resta || 3- Multiplicación || 4- División || 5- Salir'));

    switch (operador) {
        case 1:
            resultado = num1 + num2;
            break;
        
        case 2:
            resultado = num1 - num2;
            break;

        case 3:
            resultado = num1 * num2;
            break;
        
        case 4:
            if (num2 === 0) {
                alert('Error! No se puede dividir por cero.');
                continue                
            }
            resultado = num1 / num2;
            break;
    
        default:
            alert('Operación no válida! Por favor, seleccionar una operación válida.')
            continue;
    }

    alert('El resultado de la operción es: ' + resultado);
    respuesta = prompt('¿Desea realiazar otra operación? Si/No:').toLowerCase();

    if (respuesta!== 'si') {
        continuar = false;       
    }
}
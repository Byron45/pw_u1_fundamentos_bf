let num1 = null;
let num2 = null;
let operador = null;

function mostrarDisplay(valor) {
    let elemento = document.getElementById("display");
    elemento.innerText = elemento.innerText + valor;
}

function resetearDisplay() {
    document.getElementById("display").innerText = '';
    num1 = null;
    num2 = null;
    operador = null;
}

function borrar() {
    let elemento = document.getElementById("display");
    elemento.innerText = elemento.innerText.slice(0, -1);
}

function guardarOperador(op) {
    let elemento = document.getElementById("display");
    num1 = parseFloat(elemento.innerText);
    operador = op;
    elemento.innerText = '';
}

function mostrarResultado() {
    let elemento = document.getElementById("display");
    num2 = parseFloat(elemento.innerText);
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '%':
            resultado = (num1 * num2) / 100;
            break;
        default:
            resultado = 'Error';
            break;
    }

    elemento.innerText = resultado;
}
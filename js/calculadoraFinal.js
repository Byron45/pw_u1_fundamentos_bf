let num1 = 0;
let num2 = 0;

function mostrarDisplay(valor){
let elemento = document.getElementById("display");
elemento.innerText = elemento.innerText + valor;
}

function sumar() {
    let elementos = document.getElementById("display").innerText.split("+");
    num1 = parseFloat(elementos[0]);
    num2 = parseFloat(elementos[1]);
    mostrarResultado(num1 + num2);
}

function restar() {
    let elementos = document.getElementById("display").innerText.split("-");
    num1 = parseFloat(elementos[0]);
    num2 = parseFloat(elementos[1]);
    mostrarResultado(num1 - num2);
}

function multiplicar() {
    let elementos = document.getElementById("display").innerText.split("*");
    num1 = parseFloat(elementos[0]);
    num2 = parseFloat(elementos[1]);
    mostrarResultado(num1 * num2);
}

function dividir() {
    let elementos = document.getElementById("display").innerText.split("/");
    num1 = parseFloat(elementos[0]);
    num2 = parseFloat(elementos[1]);
    mostrarResultado(num1 / num2);
}

function porcentaje() {
    let elementos = document.getElementById("display").innerText.split("%");
    num1 = parseFloat(elementos[0]);
    mostrarResultado(num1 / 100);
}
function guardar() {
    validarCampos();
}

function validarCampos() {
    let cardHolder = document.getElementById("id_cardholder_name").value
    let cardNumber = document.getElementById("id_card_number").value
    let expDate = document.getElementById("id_exp_date").value
    let cvv = document.getElementById("id_cvv").value

    if (cardHolder === "") {
        mostrarMensaje('Campo de card Holder incompleto');
        return;
    } else if (cardNumber === "") {
        mostrarMensaje('Campo de número de tarjeta incompleto');
        return;
    } else if (expDate === "") {
        mostrarMensaje('Campo de fecha de expiración incompleto');
        return;
    } else if (cvv === "") {
        mostrarMensaje('Campo de CVV incompleto');
    } else {
        mostrarMensaje('Tarjeta correcta');
    }
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}


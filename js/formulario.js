function guardar() {
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById("id_nombre").value

    if (nombre === "") {
        mostrarMensaje('Campo de nombre incompleto');
        mostrarAsterisco('id_error_nombre');
        return;
    }

    let apellido = document.getElementById("id_apellido").value
    let fechaNacimiento = document.getElementById("id_fecha_nacimiento").value

    let email = document.getElementById("id_email").value
    if (email === "") {
        mostrarMensaje('Campo de email incompleto');
        mostrarAsterisco('id_error_email');
        if (!validarEmail(email)) {
            mostrarMensaje('Email no es válido');
            mostrarAsterisco('id_error_email');
            return;
        }
        return;
    }


    let password = document.getElementById("id_password").value
    limpiarMensaje();

}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = "*";
}

function limpiarMensaje() {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText = "");
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

/*
* 1. Ejecuta la lógica de la interfaz HTML, tanto para añadir 
* como eliminar el registro de los alumnos. Asimismo, por medio 
* de un controlador (if) verifica que cada uno de los campos del 
* formulario sean rellenados de forma correcta.
*/
function agregarDatos() {

    var nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        alert("Debe introducir su nombre");
        return false;
    }
    var apellidos = document.getElementById("apellidos").value;
    if (apellidos == "") {
        alert("Debe introducir sus apellidos");
        return false;
    }

    // Obtiene el pimer elemento seleccionado del input radio.
    var sexo = document.querySelector("input[name = 'genero']:checked");
    if (sexo == null) {
        alert("Debe seleccionar el sexo");
        return false;
    } else {
        sexo = document.querySelector("input[name = 'genero']:checked").value;
    }

    // Recoge las notas del formulario HTML.
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    
    if (nota1 == "" || isNaN(nota1)) {
        alert("Introduzca la nota del primer trimestre");
        return false;
    } else if (nota2 == "" || isNaN(nota2)) {
        alert("Introduzca la nota del segundo trimestre");
        return false;
    } else if (nota3 == "" || isNaN(nota3)) {
        alert("Introduzca la nota del tercer trimestre");
        return false;
    }

    // Calculo de la nota media.
    var notaMedia = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    // Limita el número de decimales a dos mediante el método toFixed().
    var notaFinal = notaMedia.toFixed(2);

    // Control de la etiqueta <select>.
    var selectOpciones = document.getElementById("opciones").value;
    if (selectOpciones == 0) {
        alert("Seleccione el curso");
        return false;
    }

    // Registro de la tabla lista.
    var fila = "<tr><td>" + nombre +
        "</td><td>" + apellidos +
        "</td><td>" + sexo +
        "</td><td>" + nota1 + "</td><td>" + nota2 + "</td><td>" + nota3 +
        "</td><td>" + notaFinal +

        // Botón eliminar registro.
        "</td><td><button id = 'eliminar' onclick = 'eliminarFila(this)'>Eliminar</button></td></tr>";

    // Lógica del botón añadir datos del alumno.
    var agregarAlum = document.createElement("tr");
    agregarAlum.innerHTML = fila;
    document.getElementById("lista").appendChild(agregarAlum);
}

// 1.1.  Función que elimina la fila o registro del alumno.
function eliminarFila(eliminar) {
    fila = eliminar.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}

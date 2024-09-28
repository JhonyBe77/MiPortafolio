// Función de validación y presentación de datos
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevenir el envío por defecto para validar primero
    event.preventDefault();

    // Obtener valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var comentarios = document.getElementById('comentarios').value.trim();

    // Regex para validar el formato del email y teléfono
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telefonoRegex = /^\d{10}$/;

    // Verificaciones básicas
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    if (apellidos === "") {
        alert("Por favor, ingresa tus apellidos.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
        return;
    }

    // Validación opcional de comentarios
    if (comentarios.length < 10) {
        alert("Por favor, ingresa al menos 10 caracteres en los comentarios.");
        return;
    }

    // Si pasa todas las validaciones, mostramos los datos
    document.getElementById('resultNombre').textContent = nombre;
    document.getElementById('resultApellidos').textContent = apellidos;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultTelefono').textContent = telefono;
    document.getElementById('resultComentarios').textContent = comentarios;

    // Mostrar la sección de resultados
    document.getElementById('resultContainer').style.display = 'block';

    // Aquí podrías realizar otras acciones, como enviar los datos a un servidor si lo deseas.
});
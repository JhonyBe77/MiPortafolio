// Función de validación y presentación de datos
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevenir el envío por defecto para validar primero
    event.preventDefault();

    // Obtener valores de los campos
    let nombre = document.getElementById('nombre').value.trim();
    let apellidos = document.getElementById('apellidos').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let comentarios = document.getElementById('comentarios').value.trim();

    // Regex para validar el formato del email (debe contener @ y terminar en .com o .es)
    let emailRegex = /^[^\s@]+@[^\s@]+\.(com|es)$/;
    // Regex para validar el formato del teléfono (10 dígitos)
    let telefonoRegex = /^\d{10}$/;

    // Variable para acumular los errores
    let errores = [];

    // Verificación de longitud de nombre (entre 2 y 40 caracteres)
    if (nombre.length < 2 || nombre.length > 40) {
        errores.push("El nombre debe tener entre 2 y 40 caracteres.");
    }
    // Verificación de longitud de apellidos (entre 2 y 40 caracteres)
    if (apellidos.length < 2 || apellidos.length > 40) {
        errores.push("Los apellidos deben tener entre 2 y 40 caracteres.");
    }
    if (!emailRegex.test(email)) {
        errores.push("Por favor, ingresa un correo electrónico válido que termine en .com o .es.");
    }
    if (!telefonoRegex.test(telefono)) {
        errores.push("Por favor, ingresa un número de teléfono válido (10 dígitos).");
    }

    // Validación opcional de comentarios
    if (comentarios.length > 0 && comentarios.length < 10) {
        errores.push("Si ingresas comentarios, deben tener al menos 10 caracteres.");
    }

    // Mostrar errores uno por uno
    if (errores.length > 0) {
        let delay = 0;
        errores.forEach(function(error) {
            setTimeout(function() {
                alert(error);
            }, delay);
            delay += 500; // Añadir un retraso de 500ms entre cada error
        });
        return; // Detener la ejecución si hay errores
    }

    // Si pasa todas las validaciones, mostramos los datos
    document.getElementById('resultNombre').textContent = nombre;
    document.getElementById('resultApellidos').textContent = apellidos;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultTelefono').textContent = telefono;
    document.getElementById('resultComentarios').textContent = comentarios || "No se ingresaron comentarios.";

    // Mostrar la sección de resultados
    document.getElementById('resultContainer').style.display = 'block';
});

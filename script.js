document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const comentarios = document.getElementById('comentarios').value.trim();

        // Expresiones Regulares para validación
        const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;
        const apellidosRegex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const telefonoRegex = /^\d{9}$/;  // Números de teléfono con 9 dígitos
        const comentariosRegex = /^.{0,500}$/;  // Comentarios opcionales hasta 500 caracteres

        // Validación de Nombre
        if (!nombreRegex.test(nombre)) {
            alert('Por favor, ingresa un nombre válido (entre 3 y 30 caracteres, solo letras).');
            return;
        }

        // Validación de Apellidos
        if (!apellidosRegex.test(apellidos)) {
            alert('Por favor, ingresa apellidos válidos (entre 3 y 50 caracteres, solo letras).');
            return;
        }

        // Validación de Correo Electrónico
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Validación de Teléfono
        if (!telefonoRegex.test(telefono)) {
            alert('Por favor, ingresa un número de teléfono válido (9 dígitos).');
            return;
        }

        // Validación de Comentarios (Opcional)
        if (!comentariosRegex.test(comentarios)) {
            alert('Los comentarios no deben exceder los 500 caracteres.');
            return;
        }

        // Si todo es válido, mostrar los resultados en pantalla
        document.getElementById('resultNombre').textContent = nombre;
        document.getElementById('resultApellidos').textContent = apellidos;
        document.getElementById('resultEmail').textContent = email;
        document.getElementById('resultTelefono').textContent = telefono;
        document.getElementById('resultComentarios').textContent = comentarios;

        document.getElementById('resultContainer').style.display = 'block';

        alert('Formulario enviado correctamente.');
        form.reset(); // Limpia el formulario después del envío
    });
});

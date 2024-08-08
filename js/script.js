document.getElementById('confirm-button').addEventListener('click', function() {
    // Mostrar el mensaje de confirmación
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = '¡Gracias por confirmar tu asistencia! Me hiciste el hombre mas feliz del mundo.';
    responseMessage.classList.remove('hidden');
});
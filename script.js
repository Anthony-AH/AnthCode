
  const waBtn = document.getElementById('whatsapp-btn');
  const waModal = document.getElementById('whatsapp-modal');
  const waForm = document.getElementById('whatsapp-form');
  const waClose = document.getElementById('wa-close');

  // Mostrar el modal
  waBtn.addEventListener('click', () => {
    waModal.classList.remove('hidden');
  });

  // Cerrar modal
  waClose.addEventListener('click', () => {
    waModal.classList.add('hidden');
  });

  // Cerrar modal al hacer clic fuera
  waModal.addEventListener('click', (e) => {
    if (e.target === waModal) {
      waModal.classList.add('hidden');
    }
  });

  // Enviar mensaje a WhatsApp
  waForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('wa-name').value.trim();
    const message = document.getElementById('wa-message').value.trim();
    const fullMessage = `Hola, soy ${name}.\n${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const phoneNumber = '51942584952'; // <-- Tu número con código de país

    const waURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(waURL, '_blank');

    // Cerrar modal
    waModal.classList.add('hidden');
    waForm.reset();
  });

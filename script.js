document.addEventListener('DOMContentLoaded', () => {
  // anno nel footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // pulsante "Copia IBAN"
  const copyButtons = document.querySelectorAll('.btn-copy-iban');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const iban = btn.getAttribute('data-iban');
      if (!iban) return;

      try {
        await navigator.clipboard.writeText(iban);
        btn.classList.add('copied');
        btn.textContent = 'IBAN copiato';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.textContent = 'Copia IBAN';
        }, 2000);
      } catch (e) {
        alert('Non sono riuscito a copiare l’IBAN. Puoi copiarlo manualmente: ' + iban);
      }
    });
  });
});

<!-- SCRIPT RADIO DIVINO AMORE -->
<script>
// ---- RADIO DIVINO AMORE (5:00–6:30) ----
function checkRadioSchedule() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const player  = document.getElementById("radio-player");
  const message = document.getElementById("radio-message");
  if (!player || !message) return;

  // LIVE dalle 5:00 alle 6:30
  const isOnAir = (hours === 5) || (hours === 6 && minutes < 30);

  if (isOnAir) {
    player.style.display = "block";
    message.innerHTML = "🔴 LIVE – Radio Divino Amore è ora in onda.";
  } else {
    player.style.display = "none";
    message.innerHTML = "⏳ Torna alle 5:00 per ascoltare Radio Divino Amore.";
  }
}

// primo controllo subito e poi ogni minuto
checkRadioSchedule();
setInterval(checkRadioSchedule, 60000);
</script>



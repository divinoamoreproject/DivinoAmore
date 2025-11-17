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
  function checkRadioSchedule() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // elementi della radio
    const playerWrapper = document.getElementById("radio-player");
    const message = document.getElementById("radio-message");
    const audio = document.getElementById("radio-audio");

    if (!playerWrapper || !message || !audio) return;

    // LIVE dalle 5:00 alle 6:30
    const isOnAir = (hours === 5) || (hours === 6 && minutes < 30);

    if (isOnAir) {
      playerWrapper.style.display = "block";
      message.innerHTML = "🔴 LIVE • La Radio Divino Amore è ora in onda (5:00–6:30).";

      // Prova ad avviare automaticamente (molti browser lo bloccano)
      audio.play().catch(() => {
        message.innerHTML += " Tocca ▶️ per iniziare l'ascolto.";
      });
    } else {
      // Fuori orario: nascondo il player, mostro solo il messaggio
      playerWrapper.style.display = "none";
      message.innerHTML = "⏰ Torna ogni giorno dalle 5:00 alle 6:30 per ascoltare Radio Divino Amore.";

      // Se per caso l’audio era ancora in riproduzione lo fermiamo
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }

  // Primo controllo appena la pagina è caricata
  checkRadioSchedule();
  // Aggiorna ogni minuto
  setInterval(checkRadioSchedule, 60000);
</script>

<!-- tuo script generale del sito -->
<script src="script.js" defer></script>
</body>
</html>

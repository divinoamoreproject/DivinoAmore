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
<script>
  function checkRadioSchedule() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const player = document.getElementById("radio-player");
    const message = document.getElementById("radio-message");

    const isOnAir = (hours > 17 || (hours === 17 && minutes >= 0)) &&
                    (hours < 18 || (hours === 18 && minutes <= 30));

    if (isOnAir) {
      player.style.display = "block";
      message.innerHTML = "🔴 LIVE — La Radio Divino Amore è in onda fino alle 18:30.";
    } else {
      player.style.display = "none";
      message.innerHTML = "⏳ Torna alle 17:00 per ascoltare Radio Divino Amore.";
    }
  }

  checkRadioSchedule();
  setInterval(checkRadioSchedule, 60000);
function updateLiveBanner() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const isLive = (hour === 17) || (hour === 18 && minutes < 30);

  const banner = document.getElementById("live-banner");
  if (!banner) return;

  if (isLive) {
    banner.classList.remove("live-hidden");
  } else {
    banner.classList.add("live-hidden");
  }
}

updateLiveBanner();
setInterval(updateLiveBanner, 60000);
<script>
 

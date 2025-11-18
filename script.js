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
// ======== RISORSE AUTOMATICHE GIORNALIERE — VERSIONE ITALIANA ========

const verseEl = document.getElementById("verse-text");
const musicEl = document.getElementById("music-list");
const filmEl = document.getElementById("film-list");

if (verseEl && musicEl && filmEl) {

  // Ottiene il giorno della settimana (0 = Domenica, 6 = Sabato)
  const day = new Date().getDay();

  // Contenuti per i 7 giorni
  const content = [
    {
      verse: '“Il Signore è il mio pastore: non manco di nulla.” <br><strong>Salmo 23,1</strong>',
      music: [
        '“Goodness of God” – Bethel Music',
        '“Oceans” – Hillsong UNITED'
      ],
      films: [
        'The Chosen (Serie)',
        'Miracles from Heaven'
      ]
    },
    {
      verse: '“Non temere, perché io sono con te.” <br><strong>Isaia 41,10</strong>',
      music: [
        '“Way Maker” – Sinach',
        '“Raise a Hallelujah” – Bethel Music'
      ],
      films: [
        'God’s Not Dead',
        'Soul Surfer'
      ]
    },
    {
      verse: '“Ti ho chiamato per nome: tu mi appartieni.” <br><strong>Isaia 43,1</strong>',
      music: [
        '“Who You Say I Am” – Hillsong Worship',
        '“No Longer Slaves” – Bethel Music'
      ],
      films: [
        'Overcomer',
        'Unbroken: Path to Redemption'
      ]
    },
    {
      verse: '“Io so i progetti che ho per voi.” <br><strong>Geremia 29,11</strong>',
      music: [
        '“Yet Not I But Through Christ in Me” – CityAlight',
        '“Living Hope” – Phil Wickham'
      ],
      films: [
        'The Shack',
        'Heaven is for Real'
      ]
    },
    {
      verse: '“Ti basta la mia grazia.” <br><strong>2 Corinzi 12,9</strong>',
      music: [
        '“Amazing Grace (My Chains Are Gone)” – Chris Tomlin',
        '“Gratitude” – Brandon Lake'
      ],
      films: [
        'Amazing Grace',
        'Les Misérables'
      ]
    },
    {
      verse: '“Nessuno ha un amore più grande: dare la vita per i propri amici.” <br><strong>Giovanni 15,13</strong>',
      music: [
        '“At the Cross” – Chris Tomlin',
        '“How Deep the Father’s Love” – Stuart Townend'
      ],
      films: [
        'The Passion of the Christ',
        'The Case for Christ'
      ]
    },
    {
      verse: '“Venite a me, voi tutti stanchi e oppressi, e io vi darò ristoro.” <br><strong>Matteo 11,28</strong>',
      music: [
        '“Rest” – Kari Jobe',
        '“Still” – Hillsong Worship'
      ],
      films: [
        'War Room',
        'A Week Away'
      ]
    }
  ];

  // Imposta contenuto
  const todayContent = content[day];
  verseEl.innerHTML = todayContent.verse;
  musicEl.innerHTML = todayContent.music.map(m => ⁠ <li>${m}</li> ⁠).join('');
  filmEl.innerHTML  = todayContent.films.map(f => `<li>${f}</li

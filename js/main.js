// ==============================================
// VALMYND — Hamborgarahnappur (farsímar)
// Bætir .virk við #valmynd þegar smellt er á hnappinn
// ==============================================

const valmyndHnappur = document.getElementById('valmynd-hnappur');
const valmynd = document.getElementById('valmynd');

valmyndHnappur.addEventListener('click', () => {
  // .virk klasi er skilgreindur í CSS til að sýna/fela valmyndina
  valmynd.classList.toggle('virk');
});


// ==============================================
// HAUS — Minnkast við flettingu
// Bætir .minnkad við #haus þegar scrollað er niður um 50px
// ==============================================

const haus = document.getElementById('haus');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    haus.classList.add('minnkad');
  } else {
    haus.classList.remove('minnkad');
  }
});


// ==============================================
// SAMBANDSFORM — Netlify sending
// Sendir formið með fetch() og sýnir þakkarboð á eftir.
// Netlify tekur við gögnum á slóðinni "/" (sama lén).
// ==============================================

const sambandsform = document.getElementById('sambandsform');
const formStadfesting = document.getElementById('form-stadfesting');

sambandsform.addEventListener('submit', (event) => {
  // Kemur í veg fyrir hefðbundna síðuhleðslu við sendingu
  event.preventDefault();

  const gogn = new FormData(sambandsform);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(gogn).toString()
  })
    .then(() => {
      // Felur formið og sýnir þakkarboð
      sambandsform.style.display = 'none';
      formStadfesting.style.display = 'block';
    })
    .catch((villa) => {
      // Sýnir villuskilaboð ef sending mistekst
      alert('Villa kom upp: ' + villa);
    });
});

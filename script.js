// 1. Les Excursions Data (synchronisé avec admin.html via localStorage 'yazid_tours_v2')
const DEFAULT_TOURS_DATA = [
  {
    "id": 1,
    "title": "Circuit en Groupe – Désert de Merzouga depuis Marrakech – 3 Jours, 2 Nuits",
    "duration": "3 Jours / 2 Nuits",
    "price": "200€ / personne",
    "route": [
      "Marrakech",
      "Aït Ben Haddou",
      "Ouarzazate",
      "Merzouga"
    ],
    "images": [
      "merzouga/merzouga1.jpeg",
      "merzouga/merzouga2.jpeg",
      "merzouga/merzouga3.jpeg"
    ],
    "desc": "Jour 1 : Marrakech – Aït Ben Haddou – Ouarzazate – Gorges du Dadès.\nJour 2 : Gorges du Dadès – Gorges du Todra – Désert de Merzouga (balade à dos de dromadaire et nuit sous les étoiles).\nJour 3 : Lever du soleil sur les dunes et retour vers Marrakech."
  },
  {
    "id": 2,
    "duration": "4 Jours",
    "price": "500€ / personne",
    "title": "Circuit Privé – Désert de Merzouga depuis Marrakech – 4 Jours",
    "route": [
      "Marrakech",
      "Aït Ben Haddou",
      "Ouarzazate",
      "Dadès",
      "Merzouga"
    ],
    "images": [
      "merzouga/merzouga6.jpeg",
      "merzouga/merzouga7.jpeg",
      "merzouga/merzouga8.jpeg"
    ],
    "desc": "Circuit privé de 4 jours à votre rythme à travers le Haut Atlas, Skoura, la Vallée des Roses, les Gorges du Dadès et du Todra jusqu'aux dunes de Merzouga."
  },
  {
    "id": 3,
    "duration": "3 Jours / 2 Nuits",
    "price": "600€ / personne",
    "title": "Circuit Privé de Luxe dans le Désert de Merzouga depuis Marrakech – 3 Jours, 2 Nuits",
    "route": [
      "Marrakech",
      "Tichka",
      "Dadès",
      "Merzouga (Luxe)"
    ],
    "images": [
      "merzouga/merzouga1.jpeg",
      "merzouga/merzouga3.jpeg",
      "merzouga/merzouga5.jpeg"
    ],
    "desc": "Expérience privée haut de gamme avec transport privé, attention personnalisée et nuit dans un campement de luxe au cœur des dunes de Merzouga."
  },
  {
    "id": 4,
    "title": "Excursion en Groupe dans la Vallée de l'Ourika depuis Marrakech",
    "duration": "1 Jour",
    "price": "22€ / personne",
    "route": [
      "Marrakech",
      "Ourika",
      "Setti Fatma"
    ],
    "images": [
      "ourika/ourika1.webp",
      "ourika/ourika2.webp"
    ],
    "desc": "Excursion d'une journée depuis Marrakech vers la Vallée de l'Ourika et Setti Fatma au pied des montagnes de l'Atlas."
  },
  {
    "id": 5,
    "duration": "1 Jour",
    "price": "100€ / véhicule",
    "title": "Excursion Privée dans la Vallée de l'Ourika depuis Marrakech",
    "route": [
      "Marrakech",
      "Ourika",
      "Setti Fatma"
    ],
    "images": [
      "ourika/ourika3.webp",
      "ourika/ourika4.webp"
    ],
    "desc": "Excursion privée d'une journée dans la Vallée de l'Ourika avec véhicule dédié et flexibilité tout au long de la journée."
  }
];

function getToursData() {
  try {
    const saved = JSON.parse(localStorage.getItem('yazid_tours_v2'));
    if (Array.isArray(saved) && saved.length > 0) {
      return saved;
    }
  } catch (e) {
    console.warn("Erreur lecture localStorage yazid_tours_v2:", e);
  }
  return DEFAULT_TOURS_DATA;
}

const toursData = getToursData();

// Global Variables
const sliderIndices = {};
let currentLang = 'fr';
let selectedTourTitle = "";

const heroImages = [
  "merzouga/merzouga1.jpeg",
  "merzouga/merzouga10.jpeg",
  "ourika/ourika1.webp",
  "ourika/ourika2.webp"
];
let currentHeroIndex = 0;

const translations = {
  fr: {
    nav_home: "Accueil",
    nav_tours: "Excursions",
    hero_title: "Explore Morocco With Yazid Tours",
    hero_desc: "Des excursions inoubliables au départ de Marrakech, Ouarzazate, Merzouga et plus.",
    hero_btn: "Explorer les Circuits",
    catalog_title: "Nos Excursions"
  },
  en: {
    nav_home: "Home",
    nav_tours: "Tours",
    hero_title: "Explore Morocco With Yazid Tours",
    hero_desc: "Unforgettable excursions departing from Marrakech, Ouarzazate, Merzouga and more.",
    hero_btn: "Explore Tours",
    catalog_title: "Our Excursions"
  },
  es: {
    nav_home: "Inicio",
    nav_tours: "Excursiones",
    hero_title: "Explore Morocco With Yazid Tours",
    hero_desc: "Excursiones inolvidables saliendo de Marrakech, Ouarzazate, Merzouga y más.",
    hero_btn: "Explorar Excursiones",
    catalog_title: "Nuestras Excursiones"
  }
};

// Initialisation EmailJS
(function() {
  if (typeof emailjs !== "undefined") {
    emailjs.init("T2NJ0IBkxyouAJAkr");
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  renderTours(currentLang);
  initTourAutoSliders();
  initHeroSlider();
  initModalLogic();
  loadComments();
});

// Hero Background Slider
function initHeroSlider() {
  const heroSection = document.getElementById('hero-banner');
  if (!heroSection) return;

  heroSection.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;

  setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    heroSection.style.opacity = '0.7';

    setTimeout(() => {
      heroSection.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
      heroSection.style.opacity = '1';
    }, 400);
  }, 5000);
}

// Render Tours with Interactive Route Timeline
function renderTours(lang) {
  const container = document.getElementById('tours-container');
  if (!container) return;

  const activeTours = getToursData();

  container.innerHTML = activeTours.map(tour => {
    sliderIndices[tour.id] = 0;
    const imgs = Array.isArray(tour.images) && tour.images.length
      ? tour.images
      : (tour.img ? [tour.img] : ["cover.jpeg"]);

    const hasMultipleImages = imgs.length > 1;

    const title = (tour.title && typeof tour.title === 'object' ? (tour.title[lang] || tour.title['fr']) : tour.title) || '';
    const desc = (tour.desc && typeof tour.desc === 'object' ? (tour.desc[lang] || tour.desc['fr']) : (tour.description || tour.desc)) || '';
    const duration = (tour.duration && typeof tour.duration === 'object' ? (tour.duration[lang] || tour.duration['fr']) : tour.duration) || '';

    let routePoints = ["Marrakech", "Aït Ben Haddou", "Ouarzazate", "Merzouga"];
    if (Array.isArray(tour.route) && tour.route.length > 0) {
      routePoints = tour.route;
    } else if (typeof tour.route === 'string' && tour.route.trim()) {
      routePoints = tour.route.split(/,|→/).map(s => s.trim()).filter(Boolean);
    } else if (tour.id === 4 || tour.id === 5) {
      routePoints = ["Marrakech", "Ourika", "Setti Fatma"];
    } else if (tour.id === 3) {
      routePoints = ["Marrakech", "Tichka", "Dadès", "Merzouga (Luxe)"];
    }

    const timelineHtml = routePoints.map((point, index) => `
      <span class="route-step">
        ${point} ${index < routePoints.length - 1 ? '<i class="fa-solid fa-chevron-right"></i>' : ''}
      </span>
    `).join('');

    return `
      <div class="tour-card">
        <div class="tour-img-box">
          <span class="badge"><i class="fa-solid fa-clock"></i> ${duration}</span>
          <img id="slider-img-${tour.id}" src="${imgs[0]}" alt="${title}" onerror="this.src='cover.jpeg'">

          ${hasMultipleImages ? `
            <button class="slider-btn prev-btn" onclick="prevImage(${tour.id})"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="slider-btn next-btn" onclick="nextImage(${tour.id})"><i class="fa-solid fa-chevron-right"></i></button>
          ` : ''}
        </div>

        <div class="tour-info">
          <h3>${title}</h3>

          <div class="route-timeline">
            ${timelineHtml}
          </div>

          <p class="desc" style="white-space: pre-line; max-height: 130px; overflow-y: auto;">${desc}</p>

          <div class="tour-footer">
            <div class="price">${tour.price}</div>
            <button class="btn-reserver" onclick="openBookingModal('${String(title).replace(/'/g, "\\'")}')">
              Réserver
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  revealOnScroll();
}

// Sliders function
function initTourAutoSliders() {
  const activeTours = getToursData();
  activeTours.forEach(tour => {
    const imgs = Array.isArray(tour.images) ? tour.images : [];
    if (imgs.length > 1) {
      setInterval(() => {
        sliderIndices[tour.id] = (sliderIndices[tour.id] + 1) % imgs.length;
        const imgElement = document.getElementById(`slider-img-${tour.id}`);

        if (imgElement) {
          imgElement.classList.add("fade-effect");
          setTimeout(() => {
            imgElement.src = imgs[sliderIndices[tour.id]];
            imgElement.classList.remove("fade-effect");
          }, 300);
        }
      }, 4500);
    }
  });
}

function nextImage(tourId) {
  const tour = getToursData().find(t => t.id === tourId);
  if (!tour || !Array.isArray(tour.images) || !tour.images.length) return;
  sliderIndices[tourId] = (sliderIndices[tourId] + 1) % tour.images.length;
  updateTourImage(tourId, tour.images[sliderIndices[tourId]]);
}

function prevImage(tourId) {
  const tour = getToursData().find(t => t.id === tourId);
  if (!tour || !Array.isArray(tour.images) || !tour.images.length) return;
  sliderIndices[tourId] = (sliderIndices[tourId] - 1 + tour.images.length) % tour.images.length;
  updateTourImage(tourId, tour.images[sliderIndices[tourId]]);
}

function updateTourImage(tourId, src) {
  const imgEl = document.getElementById(`slider-img-${tourId}`);
  if (imgEl) {
    imgEl.classList.add('fade-effect');
    setTimeout(() => {
      imgEl.src = src;
      imgEl.classList.remove('fade-effect');
    }, 200);
  }
}

// Modal & Booking Logic
function openBookingModal(tourName) {
  selectedTourTitle = tourName;
  const titleEl = document.getElementById('modal-tour-title');
  if (titleEl) titleEl.innerText = "Réserver: " + tourName;

  const modal = document.getElementById('booking-modal');
  if (modal) modal.style.display = "flex";

  const form = document.getElementById('booking-form');
  if (form) form.reset();
}

function initModalLogic() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.querySelector('.close-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// EmailJS Booking Submit Handler
function handleBookingSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('client-name').value;
  const phone = document.getElementById('client-phone').value;
  const startDate = document.getElementById('client-start-date').value;
  const endDate = document.getElementById('client-end-date').value;
  const guests = document.getElementById('client-guests').value;

  const bookingPeriod = `Du ${startDate} au ${endDate}`;

  const templateParams = {
    tour_title: selectedTourTitle || "Tour de Marrakech",
    client_name: name,
    client_phone: phone,
    client_date: bookingPeriod,
    client_guests: guests
  };

  emailjs.send('service_xflp3xf', 'template_vu4kcib', templateParams)
    .then(function() {
      alert('Votre demande de réservation a été envoyée avec succès !');
      const modal = document.getElementById('booking-modal');
      if (modal) modal.style.display = "none";
      document.getElementById('booking-form').reset();
    }, function() {
      alert('Erreur lors de l\'envoi. Veuillez nous contacter via WhatsApp.');
    });
}

// WhatsApp Booking Handler with Multi-language Automatic Support
function sendViaWhatsApp() {
  const name = document.getElementById('client-name').value;
  const phone = document.getElementById('client-phone').value;
  const startDate = document.getElementById('client-start-date').value;
  const endDate = document.getElementById('client-end-date').value;
  const guests = document.getElementById('client-guests').value;

  if (!name || !phone || !startDate || !endDate || !guests) {
    alert('Veuillez remplir tous les champs avant d\'envoyer sur WhatsApp.');
    return;
  }

  let lang = currentLang || 'fr';
  const activeLangBtn = document.querySelector('.language-switcher .lang-btn.active');
  if (activeLangBtn) {
    const btnText = activeLangBtn.innerText.toLowerCase();
    if (btnText.includes('en')) lang = 'en';
    else if (btnText.includes('es')) lang = 'es';
    else if (btnText.includes('fr')) lang = 'fr';
  }

  const whatsappNum = "212632634184";
  const bookingPeriod = `Du ${startDate} au ${endDate}`;
  let msg = "";

  if (lang === 'en') {
    msg = `Hello Yazid Tours,\n\nI would like to book: *${selectedTourTitle || "Tour"}*\nName: ${name}\nPhone: ${phone}\nPeriod: From ${startDate} to ${endDate}\nGuests: ${guests}\n\nThank you!`;
  } else if (lang === 'es') {
    msg = `¡Hola Yazid Tours!\n\nMe gustaría reservar: *${selectedTourTitle || "Tour"}*\nNombre: ${name}\nTeléfono: ${phone}\nPeriodo: Del ${startDate} al ${endDate}\nPersonas: ${guests}\n\n¡Gracias!`;
  } else {
    msg = `Bonjour Yazid Tours,\n\nJe souhaite réserver : *${selectedTourTitle || "Tour"}*\nNom : ${name}\nTéléphone : ${phone}\nPériode : ${bookingPeriod}\nPersonnes : ${guests}\n\nMerci !`;
  }

  window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(msg)}`, '_blank');

  const modal = document.getElementById('booking-modal');
  if (modal) modal.style.display = "none";
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const themeIcon = document.getElementById('theme-icon');
  if (document.body.classList.contains('light-mode')) {
    if (themeIcon) themeIcon.className = "fa-solid fa-moon";
  } else {
    if (themeIcon) themeIcon.className = "fa-solid fa-sun";
  }
}

// Comments System Logic
document.addEventListener('DOMContentLoaded', function () {
  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('comment-name').value;
      const text = document.getElementById('comment-text').value;

      const newComment = {
        name: name,
        text: text,
        date: new Date().toLocaleDateString('fr-FR')
      };

      saveComment(newComment);
      displayComment(newComment);
      commentForm.reset();
    });
  }
});

function saveComment(comment) {
  let comments = JSON.parse(localStorage.getItem('user_comments')) || [];
  comments.push(comment);
  localStorage.setItem('user_comments', JSON.stringify(comments));
}

function loadComments() {
  let comments = JSON.parse(localStorage.getItem('user_comments')) || [];
  comments.forEach(displayComment);
}

function displayComment(comment) {
  const commentsList = document.getElementById('comments-list');
  if (!commentsList) return;
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment-item');
  commentDiv.innerHTML = `
    <h4>${comment.name} <span>(${comment.date})</span></h4>
    <p>${comment.text}</p>
  `;
  commentsList.prepend(commentDiv);
}

// Fonction changeLanguage
function changeLanguage(lang) {
  currentLang = lang;

  renderTours(currentLang);

  if (translations[lang]) {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  document.querySelectorAll('.lang-btn, .lang-option').forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.querySelector(`[onclick*="${lang}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// Scroll Reveal Effect
function revealOnScroll() {
  const reveals = document.querySelectorAll('.tour-card, .review-card, .catalog-section h2');

  reveals.forEach(element => {
    element.classList.add('reveal');
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

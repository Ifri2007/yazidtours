// 1. Les Excursions Data dans les 3 langues (FR, EN, ES)
const toursData = [
  {
    id: 1,
    images: [
      "merzouga/merzouga1.jpeg",
      "merzouga/merzouga2.jpeg",
      "merzouga/merzouga3.jpeg",
      "merzouga/merzouga4.jpeg",
      "merzouga/merzouga5.jpeg"
    ],
    duration: { fr: "3 Jours / 2 Nuits", en: "3 Days / 2 Nights", es: "3 Días / 2 Noches" },
    price: "140€ / personne",
    title: {
      fr: "Circuit Désert de Merzouga depuis Marrakech – 3 Jours, 2 Nuits",
      en: "Merzouga Desert Tour from Marrakech – 3 Days, 2 Nights",
      es: "Tour por el desierto de Merzouga desde Marrakech – 3 Días, 2 Noches"
    },
    desc: {
      fr: "Jour 1 : Marrakech – Aït Ben Haddou – Ouarzazate – Gorges du Dadès\nVotre aventure commence par une traversée des spectaculaires montagnes du Haut Atlas via le col de Tizi n’Tichka. Profitez de vues panoramiques sur les villages berbères avant de visiter la célèbre Kasbah d'Aït Ben Haddou, site classé au patrimoine mondial de l'UNESCO. Poursuivez par Ouarzazate et la Vallée des Roses avant d'arriver aux Gorges du Dadès, où vous passerez la nuit dans un hôtel au cœur d'un magnifique paysage montagneux.\n\nJour 2 : Gorges du Dadès – Gorges du Todra – Désert de Merzouga\nAprès le petit-déjeuner, découvrez les impressionnantes Gorges du Todra, célèbres pour leurs falaises vertigineuses. Continuez à travers les villages traditionnels et les palmeraies en direction de Merzouga. L'après-midi, profitez d'une balade à dos de dromadaire à travers les dunes dorées du Sahara au coucher du soleil. Arrivez à votre campement pour un dîner marocain traditionnel et une nuit magique sous les étoiles.\n\nJour 3 : Merzouga – Marrakech\nRéveillez-vous tôt pour admirer le lever du soleil sur les dunes avant le petit-déjeuner. Entamez votre voyage de retour vers Marrakech en traversant des paysages variés et de superbes vallées, avec des pauses en chemin pour vous reposer et prendre des photos.\n\nTout au long du voyage, je veille à votre confort et aux moindres détails afin que vous profitiez du Maroc en vous sentant chaleureusement accueilli et bien pris en charge.",
      en: "Day 1: Marrakech – Aït Ben Haddou – Ouarzazate – Dades Gorge\nYour adventure begins with a drive across the spectacular High Atlas Mountains, crossing the Tizi n’Tichka Pass. Enjoy panoramic views of mountain villages before visiting the famous Aït Ben Haddou Kasbah, a UNESCO World Heritage Site. Continue through Ouarzazate and the Valley of Roses before arriving at Dades Gorge, where you will spend the night in a hotel surrounded by beautiful mountain scenery.\n\nDay 2: Dades Gorge – Todra Gorge – Merzouga Desert\nAfter breakfast, discover the impressive Todra Gorge, famous for its towering canyon walls. Continue through traditional villages and palm groves towards Merzouga. In the afternoon, enjoy a camel ride across the golden Sahara dunes at sunset. Arrive at your desert camp for a traditional Moroccan dinner and a magical night beneath the stars.\n\nDay 3: Merzouga – Marrakech\nWake up early to admire the sunrise over the dunes before breakfast. Begin your return journey to Marrakech, passing through changing landscapes and beautiful valleys, with stops along the way to rest and take photographs.\n\nThroughout the journey, I pay attention to your comfort and the little details, so you can enjoy Morocco feeling welcome and well looked after.",
      es: "Día 1: Marrakech – Aït Ben Haddou – Ouarzazate – Garganta del Dades\nTu aventura comienza cruzando las cordilleras del Alto Atlas por el puerto de Tizi n’Tichka. Disfruta de vistas panorámicas antes de visitar la famosa Kasbah de Aït Ben Haddou, declarada Patrimonio de la Humanidad por la UNESCO. Continúa hacia Ouarzazate y el Valle de las Rosas hasta llegar a la Garganta del Dades para pasar la noche.\n\nDía 2: Garganta del Dades – Garganta de Todra – Desierto de Merzouga\nTras el desayuno, descubre la imponente Garganta de Todra. Continúa hacia Merzouga y disfruta por la tarde de un paseo en camello por las dunas doradas del Sahara al atardecer. Cena tradicional y noche en el campamento bajo las estrellas.\n\nDía 3: Merzouga – Marrakech\nMadruga para contemplar el amanecer sobre las dunas antes del desayuno. Inicia el viaje de regreso a Marrakech atravesando hermosos paisajes y valles con paradas para descansar.\n\nDurante todo el viaje cuido los pequeños detalles para que te sientas bienvenido y atendido."
    }
  },
  {
    id: 2,
    images: [
      "merzouga/merzouga6.jpeg",
      "merzouga/merzouga7.jpeg",
      "merzouga/merzouga8.jpeg",
      "merzouga/merzouga9.jpeg",
      "merzouga/merzouga10.jpeg"
    ],
    duration: { fr: "4 Jours", en: "4 Days", es: "4 Días" },
    price: "500€ / personne",
    title: {
      fr: "Circuit Désert de Merzouga depuis Marrakech – 4 Jours",
      en: "Merzouga Desert Tour from Marrakech – 4 Days",
      es: "Tour por el desierto de Merzouga desde Marrakech – 4 Días"
    },
    desc: {
      fr: "Jour 1 : Marrakech – Haut Atlas – Aït Ben Haddou – Ouarzazate\nDépart de Marrakech pour traverser les montagnes du Haut Atlas via le spectaculaire col du Tizi n’Tichka. Profitez de magnifiques paysages montagneux et de villages amazighs traditionnels avant de visiter l'historique Kasbah d'Aït Ben Haddou. Continuez vers Ouarzazate, célèbre pour ses kasbahs et ses studios de cinéma, où vous passerez la nuit.\n\nJour 2 : Ouarzazate – Skoura – Vallée des Roses – Gorges du Dadès\nAprès le petit-déjeuner, traversez l'oasis de Skoura, connue pour ses palmeraies et ses kasbahs traditionnelles. Poursuivez à travers la Vallée des Roses et découvrez les paysages changeants du grand Sud marocain avant d'atteindre les Gorges du Dadès. Admirez ses formations rocheuses impressionnantes et ses routes serpentantes avant de passer la nuit à l'hôtel.\n\nJour 3 : Gorges du Dadès – Gorges du Todra – Désert de Merzouga\nVisitez les impressionnantes Gorges du Todra, où des falaises vertigineuses surplombent une étroite vallée. Continuez à travers des villages traditionnels et des paysages verdoyants vers Merzouga. Profitez d'une balade à dos de dromadaire au coucher du soleil à travers les dunes dorées du Sahara, suivie d'un dîner et d'une nuit sous la tente dans un campement du désert.\n\nJour 4 : Merzouga – Marrakech\nAdmirez le lever du soleil sur les dunes avant le petit-déjeuner. Entamez le voyage de retour vers Marrakech en traversant à nouveau les paysages du Sud et les montagnes du Haut Atlas, avec plusieurs pauses en chemin.\n\nCe jour supplémentaire vous permet de mieux apprécier la beauté des paysages marocains et de vivre l'expérience du désert en toute sérénité, sans vous presser.",
      en: "Day 1: Marrakech – High Atlas Mountains – Aït Ben Haddou – Ouarzazate\nDepart Marrakech and cross the High Atlas Mountains through the spectacular Tizi n’Tichka Pass. Enjoy beautiful mountain scenery and traditional Amazigh villages before visiting the historic Aït Ben Haddou Kasbah. Continue to Ouarzazate, known for its kasbahs and film studios, where you will spend the night.\n\nDay 2: Ouarzazate – Skoura – Valley of Roses – Dades Gorge\nAfter breakfast, travel through the Skoura oasis, known for its palm groves and traditional kasbahs. Continue through the Valley of Roses and discover the changing landscapes of southern Morocco before reaching Dades Gorge. Admire its dramatic rock formations and winding roads before spending the night in a hotel.\n\nDay 3: Dades Gorge – Todra Gorge – Merzouga Desert\nVisit the impressive Todra Gorge, where towering cliffs rise above a narrow valley. Continue through traditional villages and palm-filled landscapes towards Merzouga. Enjoy a camel ride at sunset across the golden Sahara dunes, followed by dinner and an overnight stay at a desert camp.\n\nDay 4: Merzouga – Marrakech\nEnjoy the sunrise over the dunes before breakfast. Begin the return journey to Marrakech, passing through the landscapes of southern Morocco and the High Atlas Mountains, with stops along the way.\n\nThe extra day gives you more time to appreciate Morocco’s scenery and enjoy the desert experience without rushing through every destination.",
      es: "Día 1: Marrakech – Montañas del Alto Atlas – Aït Ben Haddou – Ouarzazate\nSal de Marrakech cruzando el Alto Atlas por Tizi n’Tichka y visita la histórica Kasbah de Aït Ben Haddou. Noche en Ouarzazate.\n\nDía 2: Ouarzazate – Skoura – Valle de las Rosas – Garganta del Dades\nViaja a través del oasis de Skoura y el Valle de las Rosas hasta llegar a la Garganta del Dades.\n\nDía 3: Garganta del Dades – Garganta de Todra – Desierto de Merzouga\nVisita la Garganta de Todra y continúa hacia Merzouga. Disfruta de un paseo en camello al atardecer y noche en campamento de lujo.\n\nDía 4: Merzouga – Marrakech\nAmanecer en las dunas y viaje de regreso a Marrakech."
    }
  },
  {
    id: 3,
    images: [
      "merzouga/merzouga1.jpeg",
      "merzouga/merzouga3.jpeg",
      "merzouga/merzouga5.jpeg"
    ],
    duration: { fr: "3 Jours / 2 Nuits", en: "3 Days / 2 Nights", es: "3 Días / 2 Noches" },
    price: "600€ / personne",
    title: {
      fr: "Circuit Privé de Luxe dans le Désert de Merzouga depuis Marrakech – 3 Jours, 2 Nuits",
      en: "Private Luxury Merzouga Desert Tour from Marrakech – 3 Days, 2 Nights",
      es: "Tour Privado de Lujo al Desierto de Merzouga – 3 Días, 2 Noches"
    },
    desc: {
      fr: "Jour 1 : Marrakech – Aït Ben Haddou – Ouarzazate – Gorges du Dadès\nCommencez votre voyage privé depuis Marrakech et traversez les magnifiques montagnes du Haut Atlas via le col du Tizi n’Tichka. Profitez de vues panoramiques et de villages amazighs traditionnels le long du trajet. Visitez la célèbre Kasbah d'Aït Ben Haddou, inscrite au patrimoine mondial de l'UNESCO, avant de poursuivre par Ouarzazate et la Vallée des Roses. Arrivez aux Gorges du Dadès et détendez-vous pour la nuit dans un hôtel confortable.\n\nJour 2 : Gorges du Dadès – Gorges du Todra – Désert de Merzouga\nAprès le petit-déjeuner, explorez les Gorges du Todra et admirez leurs falaises vertigineuses. Continuez à travers des villages traditionnels et des paysages désertiques en direction de Merzouga. Profitez d'une balade à dos de dromadaire au coucher du soleil à travers les dunes dorées du Sahara avant d'arriver à votre campement de luxe. Savourez un dîner marocain, profitez d'une animation traditionnelle et passez la nuit dans une tente privée avec salle de bain et douche privatives, sous le ciel étoilé du désert.\n\nJour 3 : Merzouga – Marrakech\nRéveillez-vous tôt pour admirer le lever du soleil sur les dunes du Sahara, suivi du petit-déjeuner au campement. Entamez votre voyage de retour vers Marrakech en profitant des paysages variés et en faisant des pauses en chemin.\n\nGrâce au transport privé et à une attention personnalisée, vous découvrez le Maroc à votre propre rythme. Je veille à vous offrir un service soigné, une hospitalité authentique et à faire en sorte que vous vous sentiez parfaitement accueilli tout au long de votre aventure.",
      en: "Day 1: Marrakech – Aït Ben Haddou – Ouarzazate – Dades Gorge\nBegin your private journey from Marrakech and cross the spectacular High Atlas Mountains through the Tizi n’Tichka Pass. Enjoy panoramic views and traditional Amazigh villages along the way. Visit the famous Aït Ben Haddou Kasbah, a UNESCO World Heritage Site, before continuing through Ouarzazate and the Valley of Roses. Arrive at Dades Gorge and relax overnight in a comfortable hotel.\n\nDay 2: Dades Gorge – Todra Gorge – Merzouga Desert\nAfter breakfast, explore Todra Gorge and admire its towering cliffs. Continue through traditional villages and desert landscapes towards Merzouga. Enjoy a camel ride at sunset across the golden Sahara dunes before arriving at your luxury desert camp. Savour a Moroccan dinner, enjoy traditional entertainment and spend the night in a private tent with its own bathroom and shower, beneath the starry desert sky.\n\nDay 3: Merzouga – Marrakech\nWake up early to admire the sunrise over the Sahara dunes, followed by breakfast at the camp. Begin your return journey to Marrakech, enjoying the changing scenery and making stops along the way.\n\nWith private transport and personal attention, you can experience Morocco at a comfortable pace. I focus on thoughtful service, genuine hospitality and making you feel welcome throughout your adventure.",
      es: "Día 1: Marrakech – Aït Ben Haddou – Ouarzazate – Garganta del Dades\nComienza tu viaje privado cruzando el Alto Atlas y visitando Aït Ben Haddou.\n\nDía 2: Garganta del Dades – Garganta de Todra – Desierto de Merzouga\nExplora la Garganta de Todra y llega a Merzouga para un paseo en camello al atardecer. Noche en tienda privada de lujo con baño propio.\n\nDía 3: Merzouga – Marrakech\nAmanecer en el desierto y regreso a Marrakech con total comodidad y atención personalizada."
    }
  },
 {
    id: 4,
    images: [
      "ourika/ourika1.webp",
      "ourika/ourika2.webp"
    ],
    duration: { fr: "1 Jour", en: "1 Day", es: "1 Día" },
    price: "22€ / personne",
    title: {
      fr: "Excursion en Groupe dans la Vallée de l'Ourika depuis Marrakech",
      en: "Ourika Valley Group Tour from Marrakech",
      es: "Excursión en Grupo al Valle de Ourika desde Marrakech"
    },
    desc: {
      fr: "Marrakech – Vallée de l'Ourika – Setti Fatma...",
      en: "Marrakech – Ourika Valley – Setti Fatma...",
      es: "Marrakech – Valle de Ourika – Setti Fatma..."
    }
  },
  {
    id: 5,
    images: [
      "ourika/ourika3.webp",
      "ourika/ourika4.webp"
    ],
    duration: { fr: "1 Jour", en: "1 Day", es: "1 Día" },
    price: "100€ / véhicule",
    title: {
      fr: "Excursion Privée dans la Vallée de l'Ourika depuis Marrakech",
      en: "Private Ourika Valley Tour from Marrakech",
      es: "Excursión Privada al Valle de Ourika desde Marrakech"
    },
    desc: {
      fr: "Marrakech – Vallée de l'Ourika – Setti Fatma...",
      en: "Marrakech – Ourika Valley – Setti Fatma...",
      es: "Marrakech – Valle de Ourika – Setti Fatma..."
    }
  }]
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
    emailjs.init("T2NJ0IBkxyouAJAkr");
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

/// Render Tours (Version sécurisée)
function renderTours(lang) {
  const container = document.getElementById('tours-container');
  if (!container) return;

  container.innerHTML = toursData.map(tour => {
    sliderIndices[tour.id] = 0;
    const hasMultipleImages = tour.images && tour.images.length > 1;
    
    // التأكد من جلب الترجمة الصحيحة أو الاعتماد على البديل
    const title = (tour.title && (tour.title[lang] || tour.title['fr'])) || tour.title || '';
    const desc = (tour.desc && (tour.desc[lang] || tour.desc['fr'])) || tour.description || tour.desc || '';
    const duration = (tour.duration && (tour.duration[lang] || tour.duration['fr'])) || tour.duration || '';

    return `
      <div class="tour-card">
        <div class="tour-img-box">
          <span class="badge"><i class="fa-solid fa-clock"></i> ${duration}</span>
          <img id="slider-img-${tour.id}" src="${tour.images[0]}" alt="${title}">
          
          ${hasMultipleImages ? `
            <button class="slider-btn prev-btn" onclick="prevImage(${tour.id})"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="slider-btn next-btn" onclick="nextImage(${tour.id})"><i class="fa-solid fa-chevron-right"></i></button>
          ` : ''}
        </div>
        
        <div class="tour-info">
          <h3>${title}</h3>
          <p class="desc" style="white-space: pre-line; max-height: 150px; overflow-y: auto;">${desc}</p>
          
          <div class="tour-footer">
            <div class="price">${tour.price}</div>
            <button class="btn-reserver" onclick="openBookingModal('${title.replace(/'/g, "\\'")}')">
              Réserver
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}


// Sliders function
function initTourAutoSliders() {
  toursData.forEach(tour => {
    if (tour.images && tour.images.length > 1) {
      setInterval(() => {
        sliderIndices[tour.id] = (sliderIndices[tour.id] + 1) % tour.images.length;
        const imgElement = document.getElementById(`slider-img-${tour.id}`);
        
        if (imgElement) {
          imgElement.classList.add("fade-effect");
          setTimeout(() => {
            imgElement.src = tour.images[sliderIndices[tour.id]];
            imgElement.classList.remove("fade-effect");
          }, 300);
        }
      }, 4500); 
    }
  });
}

function nextImage(tourId) {
  const tour = toursData.find(t => t.id === tourId);
  if (!tour) return;
  sliderIndices[tourId] = (sliderIndices[tourId] + 1) % tour.images.length;
  updateTourImage(tourId, tour.images[sliderIndices[tourId]]);
}

function prevImage(tourId) {
  const tour = toursData.find(t => t.id === tourId);
  if (!tour) return;
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
    .then(function(response) {
       alert('Votre demande de réservation a été envoyée avec succès !');
       const modal = document.getElementById('booking-modal');
       if(modal) modal.style.display = "none";
       document.getElementById('booking-form').reset();
    }, function(error) {
       alert('Erreur lors de l\'envoi. Veuillez nous contacter via WhatsApp.');
    });
}

// WhatsApp Booking Handler
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

  const whatsappNum = "212632634184"; 
  const bookingPeriod = `Du ${startDate} au ${endDate}`;

  const msg = `Bonjour Yazid Tours,\n\nJe souhaite réserver : *${selectedTourTitle || "Tour"}*\nNom : ${name}\nTéléphone : ${phone}\nPériode : ${bookingPeriod}\nPersonnes : ${guests}\n\nMerci !`;

  window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(msg)}`, '_blank');
  
  const modal = document.getElementById('booking-modal');
  if(modal) modal.style.display = "none";
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
// 2. Fonction changeLanguage باش البوتونات يخدمو
function changeLanguage(lang) {
  currentLang = lang;

  // 1. Re-render les tours b la langue jdidah
  renderTours(currentLang);

  // 2. Mettre à jour les textes f la page (Navbar, Hero, etc.)
  if (translations[lang]) {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // 3. Mettre à jour la classe 'active' f les boutons
  document.querySelectorAll('.lang-btn, .lang-option').forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.querySelector(`[onclick*="${lang}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}
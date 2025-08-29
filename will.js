// Translations object
const translations = {
  en: {
    services: "Services",
    about: "About",
    contact: "Contact",
    hero_title: "Do You Want to Delete Your Digital Footprint? Yes? Then you're exactly at the right place!",
    hero_subtitle: "At CyberCircle, we take care of your IT security needs",
    hero_description: "including deleting your digital footprint. We wipe all traces so you don't have to worry. Just email us and tell us what you need — we'll manage it for you.",
    explore_services: "Explore Services",
    services_title: "Our Services",
    service_1_title: "Digital Print Deletion",
    service_1_desc: "We help you erase unwanted digital traces, ensuring your online presence is cleaned and your privacy protected.",
    service_2_title: "Digital Footprint Mapping",
    service_2_desc: "We analyze and map your digital footprint across platforms, giving you a clear picture of your exposure and risks.",
    service_3_title: "Any IT Related Request",
    service_3_desc: "From cybersecurity concerns to general IT support, we provide tailored solutions to meet your specific needs.",
    about_title: "About Us",
    about_desc: "At CyberCircle, we are dedicated to providing top-tier cybersecurity services. Whether you are an individual or a business, you will benefit from enhanced digital protection, tailored advice, and peace of mind.",
    contact_title: "Contact Us",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Your Message",
    contact_submit: "Send Message",
    footer_text: "© 2024 CyberCircle. All rights reserved."
  },
  fr: {
    services: "Services",
    about: "À propos",
    contact: "Contact",
    hero_title: "Vous voulez effacer votre empreinte numérique ? Oui ? Alors vous êtes au bon endroit !",
    hero_subtitle: "Chez CyberCircle, nous prenons soin de vos besoins en sécurité informatique",
    hero_description: "notamment en supprimant votre empreinte numérique. Nous effaçons toutes les traces pour votre tranquillité. Envoyez-nous simplement un e-mail et dites-nous ce dont vous avez besoin - nous nous en occupons pour vous.",
    explore_services: "Découvrir nos services",
    services_title: "Nos Services",
    service_1_title: "Suppression d’empreinte numérique",
    service_1_desc: "Nous vous aidons à effacer les traces numériques indésirables, pour garantir votre confidentialité et votre sérénité en ligne.",
    service_2_title: "Cartographie d’empreinte numérique",
    service_2_desc: "Nous analysons et cartographions vos traces numériques pour vous donner une vision claire de votre exposition et des risques.",
    service_3_title: "Toute demande liée à l’informatique",
    service_3_desc: "De la cybersécurité au support IT général, nous proposons des solutions adaptées à vos besoins spécifiques.",
    about_title: "À Propos de Nous",
    about_desc: "Chez CyberCircle, nous nous consacrons à fournir des services de cybersécurité de premier ordre. Que vous soyez un particulier ou une entreprise, vous bénéficierez d’une protection renforcée, de conseils personnalisés et d’une tranquillité d’esprit.",
    contact_title: "Contactez-nous",
    contact_name: "Votre Nom",
    contact_email: "Votre Email",
    contact_message: "Votre Message",
    contact_submit: "Envoyer",
    footer_text: "© 2024 CyberCircle. Tous droits réservés."
  },
  de: {
    services: "Dienste",
    about: "Über uns",
    contact: "Kontakt",
    hero_title: "Möchten Sie Ihre digitalen Spuren löschen? Ja? Dann sind Sie hier genau richtig!",
    hero_subtitle: "Bei CyberCircle kümmern wir uns um Ihre IT-Sicherheitsbedürfnisse",
    hero_description: "einschließlich der Löschung Ihrer digitalen Spuren. Wir löschen alle Spuren, damit Sie sich keine Sorgen machen müssen. Senden Sie uns einfach eine E-Mail und teilen Sie uns mit, was Sie brauchen - wir kümmern uns darum.",
    explore_services: "Dienste entdecken",
    services_title: "Unsere Dienste",
    service_1_title: "Digitale Spuren löschen",
    service_1_desc: "Wir helfen Ihnen, unerwünschte digitale Spuren zu löschen, damit Ihre Online-Präsenz sauber und Ihre Privatsphäre geschützt bleibt.",
    service_2_title: "Digitale Fußabdrücke kartieren",
    service_2_desc: "Wir analysieren und kartieren Ihre digitalen Spuren auf allen Plattformen, um Ihnen ein klares Bild Ihrer Risiken zu geben.",
    service_3_title: "Alle IT-bezogenen Anfragen",
    service_3_desc: "Von Cybersicherheitsfragen bis hin zu allgemeinem IT-Support – wir bieten maßgeschneiderte Lösungen für Ihre Bedürfnisse.",
    about_title: "Über Uns",
    about_desc: "Bei CyberCircle sind wir darauf spezialisiert, erstklassige Cybersicherheitsdienste anzubieten. Ob privat oder geschäftlich – Sie profitieren von verstärktem Schutz, maßgeschneiderter Beratung und digitaler Sicherheit.",
    contact_title: "Kontaktieren Sie uns",
    contact_name: "Ihr Name",
    contact_email: "Ihre E-Mail",
    contact_message: "Ihre Nachricht",
    contact_submit: "Nachricht senden",
    footer_text: "© 2024 CyberCircle. Alle Rechte vorbehalten."
  }
};

// Language selector functionality
document.getElementById('languageSelect').addEventListener('change', function(e) {
  const lang = e.target.value;
  updateContent(lang);
  localStorage.setItem('preferredLanguage', lang);
});

// Update content function
function updateContent(language) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[language] && translations[language][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[language][key];
      } else {
        element.textContent = translations[language][key];
      }
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  document.getElementById('languageSelect').value = savedLanguage;
  updateContent(savedLanguage);

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ⚠️ Form handling disabled (mailto: does the job)
  // Nothing here, mailto: will directly open the user's email client
});

/* Scroll animations */
function handleScroll() {
  const sections = document.querySelectorAll('.services, .about, .contact');
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight * 0.85;
    
    if (isVisible) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

/* Burger menu */
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      burger.classList.remove('active');
      nav.classList.remove('active');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    burger?.classList.remove('active');
    nav?.classList.remove('active');
  }
});

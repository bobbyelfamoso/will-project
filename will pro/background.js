// Translations object
const translations = {
  en: {
    services: "Services",
    about: "About",
    contact: "Contact",
    hero_title: "Do You Want to Delete Your Digital Footprint? Yes? Then you're exactly at the right place!",
    hero_subtitle: "At CyberCycle, we take care of your IT security needs",
    hero_description: "including deleting your digital footprint. We wipe all traces so you don't have to worry. Just email us and tell us what you need — we'll manage it for you.",
    explore_services: "Explore Services",
    services_title: "Our Services",
    service_1_title: "Service xxx",
    service_1_desc: "Secure your xyz with our xyz service we do our shit in 3 times.",
    service_2_title: "service xxx",
    service_2_desc: "bla bla bla second service xyz with xxx technology",
    service_3_title: "last service",
    service_3_desc: "Identify vulnerabilities blablabla",
    about_title: "About Us",
    about_desc: "At CyberCycle, we are dedicated to providing top-tier cybersecurity services. you'll have xyz advantages as a person (particulier) or as a business.",
    contact_title: "Contact Us",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Your Message",
    contact_submit: "Send Message",
    footer_text: "© 2024 CyberCycle. All rights reserved."
  },
  fr: {
    services: "Services",
    about: "À propos",
    contact: "Contact",
    hero_title: "Vous voulez effacer votre empreinte numérique ? Oui ? Alors vous êtes au bon endroit !",
    hero_subtitle: "Chez CyberCycle, nous prenons soin de vos besoins en sécurité informatique",
    hero_description: "notamment en supprimant votre empreinte numérique. Nous effaçons toutes les traces pour votre tranquillité. Envoyez-nous simplement un e-mail et dites-nous ce dont vous avez besoin - nous nous en occupons pour vous.",
    explore_services: "Découvrir nos services",
    services_title: "Nos Services",
    service_1_title: "Service xxx",
    service_1_desc: "Sécurisez votre xyz avec notre service xyz en 3 étapes.",
    service_2_title: "service xxx",
    service_2_desc: "bla bla bla second service xyz avec la technologie xxx",
    service_3_title: "dernier service",
    service_3_desc: "Identifier les vulnérabilités blablabla",
    about_title: "À Propos de Nous",
    about_desc: "Chez CyberCycle, nous nous consacrons à fournir des services de cybersécurité de premier ordre. Vous aurez xyz avantages en tant que particulier ou entreprise.",
    contact_title: "Contactez-nous",
    contact_name: "Votre Nom",
    contact_email: "Votre Email",
    contact_message: "Votre Message",
    contact_submit: "Envoyer",
    footer_text: "© 2024 CyberCycle. Tous droits réservés."
  },
  de: {
    services: "Dienste",
    about: "Über uns",
    contact: "Kontakt",
    hero_title: "Möchten Sie Ihre digitalen Spuren löschen? Ja? Dann sind Sie hier genau richtig!",
    hero_subtitle: "Bei CyberCycle kümmern wir uns um Ihre IT-Sicherheitsbedürfnisse",
    hero_description: "einschließlich der Löschung Ihrer digitalen Spuren. Wir löschen alle Spuren, damit Sie sich keine Sorgen machen müssen. Senden Sie uns einfach eine E-Mail und teilen Sie uns mit, was Sie brauchen - wir kümmern uns darum.",
    explore_services: "Dienste entdecken",
    services_title: "Unsere Dienste",
    service_1_title: "Service xxx",
    service_1_desc: "Sichern Sie Ihr xyz mit unserem xyz-Service in 3 Schritten.",
    service_2_title: "service xxx",
    service_2_desc: "bla bla bla zweiter Service xyz mit xxx Technologie",
    service_3_title: "letzter Service",
    service_3_desc: "Schwachstellen identifizieren blablabla",
    about_title: "Über Uns",
    about_desc: "Bei CyberCycle sind wir darauf spezialisiert, erstklassige Cybersicherheitsdienste anzubieten. Sie erhalten xyz Vorteile als Privatperson oder Unternehmen.",
    contact_title: "Kontaktieren Sie uns",
    contact_name: "Ihr Name",
    contact_email: "Ihre E-Mail",
    contact_message: "Ihre Nachricht",
    contact_submit: "Nachricht senden",
    footer_text: "© 2024 CyberCycle. Alle Rechte vorbehalten."
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

  // Handle form submission
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      const currentLang = document.getElementById('languageSelect').value;
      const successMessage = {
        en: `Thank you, ${name}! Your message has been sent.`,
        fr: `Merci, ${name}! Votre message a été envoyé.`,
        de: `Danke, ${name}! Ihre Nachricht wurde gesendet.`
      };
      alert(successMessage[currentLang]);
      form.reset();
    } else {
      const errorMessage = {
        en: 'Please fill in all fields.',
        fr: 'Veuillez remplir tous les champs.',
        de: 'Bitte füllen Sie alle Felder aus.'
      };
      alert(errorMessage[currentLang]);
    }
  });
});
/* Script à ajouter dans votre fichier JavaScript */
function handleScroll() {
  const sections = document.querySelectorAll('.services, .about, .contact');
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight * 0.75;
    
    if (isVisible) {
      section.classList.add('visible');
    }
  });
}

// Écouter l'événement de scroll
window.addEventListener('scroll', handleScroll);

// Vérifier au chargement initial
document.addEventListener('DOMContentLoaded', handleScroll);


// Ajouter dans votre background.js
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  // Toggle menu burger
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Fermer le menu au clic sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // Fermer le menu au clic en dehors
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      burger.classList.remove('active');
      nav.classList.remove('active');
    }
  });
});

// Gestion du resize de la fenêtre
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    burger?.classList.remove('active');
    nav?.classList.remove('active');
  }
});
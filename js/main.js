// ============================================================
// MOBILE NAVIGATION TOGGLE
// ============================================================
const navToggle = document.getElementById('nav-toggle');
const navList   = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close nav when a link is clicked
navList.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================
// HEADER SCROLL SHADOW
// ============================================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ============================================================
// ACTIVE NAV LINK ON SCROLL
// ============================================================
const sections = document.querySelectorAll('section[id]');

const activateNavLink = () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const top    = section.offsetTop - 80;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav__link[href="#${id}"]`);

    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
};

window.addEventListener('scroll', activateNavLink, { passive: true });
activateNavLink();

// ============================================================
// FADE-IN ON SCROLL (INTERSECTION OBSERVER)
// ============================================================
const fadeEls = document.querySelectorAll(
  '.hero__content, .about__grid, .skills__category, .project-card, .contact__form'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger sibling cards
        const delay = entry.target.closest('.skills__grid, .projects__grid')
          ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100
          : 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach(el => observer.observe(el));

// ============================================================
// CONTACT FORM — mailto fallback
// ============================================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = contactForm.name.value.trim();
  const email   = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();
  let valid     = true;

  [contactForm.name, contactForm.email, contactForm.message].forEach(field => {
    field.classList.remove('error');
  });

  if (!name) {
    contactForm.name.classList.add('error');
    valid = false;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    contactForm.email.classList.add('error');
    valid = false;
  }
  if (!message) {
    contactForm.message.classList.add('error');
    valid = false;
  }

  if (!valid) return;

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  window.location.href = `mailto:shafiimran@github.com?subject=${subject}&body=${body}`;
});

// ============================================================
// FOOTER YEAR
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();

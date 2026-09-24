const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.querySelector('.nav-links');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const id = entry.target.id;
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('reveal');
  observer.observe(section);
});


mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const navAnchors = document.querySelectorAll('.nav-links a');

navAnchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Message sent successfully!');

  form.reset();
});
const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealItems.forEach((item) => revealObserver.observe(item));

const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('.nav a')];
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach((section) => navObserver.observe(section));

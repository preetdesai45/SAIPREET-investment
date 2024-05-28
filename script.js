const contactLink = document.querySelector('.nav a[href="#services"]');

contactLink.addEventListener('click', (event) => {
  event.preventDefault();
  const contactSection = document.querySelector('#services');
  contactSection.scrollIntoView({ behavior: 'smooth', block:'start' });
});
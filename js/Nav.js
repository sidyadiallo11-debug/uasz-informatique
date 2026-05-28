// Navigation partagee entre toutes les pages
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = [
  { href: 'index.html',      label: 'Accueil' },
  { href: 'formations.html', label: 'Formations' },
  { href: 'admission.html',  label: 'Admission' },
  { href: 'selection.html',  label: 'Sélection' },
  { href: 'contact.html',    label: 'Contact' },
];
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.navbar a').forEach(a => {
    if (a.getAttribute('href') === currentPage) {
      a.classList.add('active');
    }
  });
});
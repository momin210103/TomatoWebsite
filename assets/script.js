const nav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
const pages = [...document.querySelectorAll('.page')];
const navLinks = [...document.querySelectorAll('.nav-link')];

function showPage() {
  const requested = (location.hash || '#home').slice(1);
  const pageId = pages.some(page => page.id === requested) ? requested : 'home';
  pages.forEach(page => {
    const active = page.id === pageId;
    page.classList.toggle('active', active);
    page.setAttribute('aria-hidden', String(!active));
  });
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === `#${pageId}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
window.addEventListener('hashchange', showPage);
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navLinks.forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
showPage();

// Disease category search and filters
const search = document.getElementById('diseaseSearch');
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const diseaseCards = [...document.querySelectorAll('.disease-card')];
const emptyState = document.getElementById('emptyState');
let currentFilter = 'all';
function filterDiseases() {
  const term = search.value.trim().toLowerCase();
  let visibleCount = 0;
  diseaseCards.forEach(card => {
    const kindMatch = currentFilter === 'all' || card.dataset.kind === currentFilter;
    const textMatch = card.dataset.name.includes(term) || card.innerText.toLowerCase().includes(term);
    const visible = kindMatch && textMatch;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });
  emptyState.hidden = visibleCount > 0;
}
search.addEventListener('input', filterDiseases);
filterButtons.forEach(button => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  filterDiseases();
}));

// Export the displayed model comparison table as CSV
document.getElementById('downloadCsv').addEventListener('click', () => {
  const table = document.getElementById('modelTable');
  const rows = [...table.querySelectorAll('tr')].map(row =>
    [...row.querySelectorAll('th,td')].map(cell => {
      const value = cell.innerText.replace(/\s+/g, ' ').trim();
      return `"${value.replace(/"/g, '""')}"`;
    }).join(',')
  );
  const blob = new Blob([rows.join('\r\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'tomato-leaf-model-comparison.csv';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
});

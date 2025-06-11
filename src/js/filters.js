const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const resetBtn = document.getElementById('resetBtn');
const genreToggle = document.getElementById('genreToggle');
const genreList = document.getElementById('genreList');
const genreItems = document.querySelectorAll('.dropdown-item');
const genreDropdown = document.getElementById('genreDropdown');
const emptyState = document.getElementById('emptyState');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

const genreIcon = document.getElementById('genreIcon');
const sortIcon = document.getElementById('sortIcon');
const searchIcon = document.getElementById('searchIcon');

let selectedGenre = 'all';
let allCards = [];

export function initializeCards() {
  const cards = [...document.querySelectorAll('.artist-card')];
  allCards = cards.map(card => card.cloneNode(true));
  filterAndSortCards();
}

function filterAndSortCards() {
  const query = searchInput.value.toLowerCase().trim();
  const sortOption = sortSelect.value;

  const filtered = allCards.filter(card => {
    const name = card.querySelector('.artist-card-name')?.textContent.toLowerCase() || '';
    const genreTags = [...card.querySelectorAll('.genre-tag')].map(el => el.textContent.toLowerCase());
    return name.includes(query) && (selectedGenre === 'all' || genreTags.includes(selectedGenre));
  });

  if (sortOption === 'az') {
    filtered.sort((a, b) =>
      a.querySelector('.artist-card-name').textContent.localeCompare(
        b.querySelector('.artist-card-name').textContent
      )
    );
  } else if (sortOption === 'za') {
    filtered.sort((a, b) =>
      b.querySelector('.artist-card-name').textContent.localeCompare(
        a.querySelector('.artist-card-name').textContent
      )
    );
  }

  const container = document.getElementById('artists-card-id');
  container.innerHTML = '';
  filtered.forEach(card => container.appendChild(card));

  emptyState.classList.toggle('hidden', filtered.length > 0);
}

searchInput.addEventListener('input', filterAndSortCards);
sortSelect.addEventListener('change', filterAndSortCards);

resetBtn.addEventListener('click', () => {
  searchInput.value = '';
  sortSelect.value = 'default';
  selectedGenre = 'all';
  genreToggle.childNodes[0].nodeValue = 'All Genres';
  genreList.style.display = 'none';
  genreDropdown.classList.remove('open');
  genreIcon.setAttribute('href', '#icon-chevron-down-arrow');

  filterAndSortCards();
});

resetFiltersBtn?.addEventListener('click', () => resetBtn.click());

genreToggle?.addEventListener('click', () => {
  const isOpen = genreList.style.display === 'block';
  genreList.style.display = isOpen ? 'none' : 'block';
  genreDropdown.classList.toggle('open', !isOpen);
  genreIcon.setAttribute(
    'href',
    isOpen ? '#icon-chevron-down-arrow' : '#icon-chevron-up-arrow'
  );
});

document.addEventListener('click', e => {
  if (!e.target.closest('.custom-dropdown')) {
    genreList.style.display = 'none';
    genreDropdown.classList.remove('open');
    genreIcon.setAttribute('href', '#icon-chevron-down-arrow');
  }
});

genreItems.forEach(item => {
  item.addEventListener('click', () => {
    selectedGenre = item.dataset.value;
    genreToggle.childNodes[0].nodeValue = item.textContent;
    genreList.style.display = 'none';
    genreDropdown.classList.remove('open');
    genreIcon.setAttribute('href', '#icon-chevron-down-arrow');
    filterAndSortCards();
  });
});

import { getArtists, getGenres } from './artists-api';
import { renderArtistCards } from './render-functions';
import { refs } from './refs';
import svgArrowsBasePuth from '../img/sprite.svg?url';

let currentPage = 1;
let selectedGenre = '';
let selectedSort = '';
let searchValue = '';
const perPage = 8;

const searchInput = document.getElementById('searchInput');
const genreDropdown = document.getElementById('genreDropdown');
const genreToggle = document.getElementById('genreToggle');
const genreList = document.getElementById('genreList');
const sortingDropdown = document.getElementById('sortingDropdown');
const sortingToggle = document.getElementById('sortingToggle');
const sortingList = document.getElementById('sortingList');
const resetBtn = document.getElementById('resetBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const iconArrowOpenCloseContainer = document.querySelector('.icon-chevron');
const artistsCard = document.getElementById('artists-card-id');
const spinner = document.querySelector('.spinner');
const artistsGrid = refs.artistsGrid;
const loadMoreBtn = refs.loadMoreBtn;
const emptyState = document.getElementById('emptyState');
const searchAndFiltersOpener = document.querySelector(
  '.search-and-filters-opener'
);
const filtersPanel = document.querySelector('.filters-panel');

// --- Dropdown logic (only one open at a time) ---
function closeAllDropdowns() {
  genreDropdown.classList.remove('open');
  sortingDropdown.classList.remove('open');
}
genreToggle.addEventListener('click', () => {
  if (genreDropdown.classList.contains('open')) {
    genreDropdown.classList.remove('open');
  } else {
    closeAllDropdowns();
    genreDropdown.classList.add('open');
  }
});
sortingToggle.addEventListener('click', () => {
  if (sortingDropdown.classList.contains('open')) {
    sortingDropdown.classList.remove('open');
  } else {
    closeAllDropdowns();
    sortingDropdown.classList.add('open');
  }
});
document.addEventListener('click', e => {
  if (
    !genreDropdown.contains(e.target) &&
    !sortingDropdown.contains(e.target)
  ) {
    closeAllDropdowns();
  }
});

// --- Show/hide filters panel on mobile ---
searchAndFiltersOpener.addEventListener('click', () => {
  filtersPanel.classList.toggle('open');
  if (filtersPanel.classList.contains('open')) {
    iconArrowOpenCloseContainer.innerHTML = `<use href="${svgArrowsBasePuth}#icon-chevron-down-arrow"></use>`;
  } else {
    iconArrowOpenCloseContainer.innerHTML = `<use href="${svgArrowsBasePuth}#icon-chevron-up-arrow"></use>`;
  }
});

// --- Genres from API ---
async function populateGenres() {
  const genresData = await getGenres();
  if (!genresData?.length) return;
  genreList.innerHTML =
    `<div class="dropdown-item" data-value="">Default</div>` +
    genresData
      .map(
        genre =>
          `<div class="dropdown-item" data-value="${genre.genre}">${genre.genre}</div>`
      )
      .join('');
}
populateGenres();

// --- Handlers ---
genreList.addEventListener('click', e => {
  if (e.target.classList.contains('dropdown-item')) {
    selectedGenre = e.target.dataset.value;
    genreToggle.textContent = selectedGenre || 'Default';
    currentPage = 1;
    closeAllDropdowns();
    fetchAndRenderArtists(true);
  }
});
sortingList.addEventListener('click', e => {
  if (e.target.classList.contains('dropdown-item')) {
    selectedSort = e.target.dataset.value;
    sortingToggle.textContent = selectedSort || 'Default';
    currentPage = 1;
    closeAllDropdowns();
    fetchAndRenderArtists(true);
  }
});
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    searchValue = searchInput.value.trim();
    currentPage = 1;
    fetchAndRenderArtists(true);
  }
});
document.querySelector('.icon-search').addEventListener('click', () => {
  searchValue = searchInput.value.trim();
  currentPage = 1;
  fetchAndRenderArtists(true);
});
resetBtn.addEventListener('click', () => {
  selectedGenre = '';
  selectedSort = '';
  searchValue = '';
  searchInput.value = '';
  genreToggle.textContent = 'Default';
  sortingToggle.textContent = 'Default';
  currentPage = 1;
  fetchAndRenderArtists(true);
});

resetFiltersBtn.addEventListener('click', () => {
  selectedGenre = '';
  selectedSort = '';
  searchValue = '';
  searchInput.value = '';
  genreToggle.textContent = 'Default';
  sortingToggle.textContent = 'Default';
  currentPage = 1;
  fetchAndRenderArtists(true);
});

// --- Load More ---
loadMoreBtn.addEventListener('click', () => {
  currentPage++;
  fetchAndRenderArtists();
});

// --- Main fetch/render ---
async function fetchAndRenderArtists(clear = false) {
  loadMoreBtn.style.display = 'none';
  emptyState.classList.add('hidden');
  spinner.classList.remove('hidden');
  if (clear) artistsGrid.innerHTML = '';
  const params = {
    page: currentPage,
    name: searchValue,
    sortName: selectedSort,
    genre: selectedGenre,
  };
  const data = await getArtists(
    params.page,
    params.name,
    params.sortName,
    params.genre
  );
  const artists = data?.artists || [];
  if (clear && artists.length === 0) {
    emptyState.classList.remove('hidden');
    artistsCard.innerHTML = '';
    return;
  }
  renderArtistCards(artists, artistsGrid);
  if (artists.length === perPage) {
    loadMoreBtn.style.display = 'flex';
  } else {
    loadMoreBtn.style.display = 'none';
  }
  spinner.classList.add('hidden');
}

// --- Initial load ---
fetchAndRenderArtists(true);

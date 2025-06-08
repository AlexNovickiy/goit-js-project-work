import { fetchArtists } from './artists-api';
import { renderArtistCards } from './render-functions';
import { refs } from './refs';

let currentPage = 1;
const perPage = 8;

document.addEventListener('DOMContentLoaded', () => {
  const artistsGrid = refs.artistsGrid;
  const loadMoreBtn = refs.loadMoreBtn;

  async function loadMoreArtists() {
    loadMoreBtn.disabled = true;

    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');

    const artists = await fetchArtists(currentPage, perPage);

    spinner.classList.add('hidden');

    if (artists.length > 0) {
      renderArtistCards(artists, artistsGrid);
      currentPage++;
      if (artists.length < perPage) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'flex';
      }
    } else {
      loadMoreBtn.style.display = 'none';
    }

    loadMoreBtn.disabled = false;
  }

  loadMoreBtn.addEventListener('click', loadMoreArtists);

  loadMoreArtists();
});

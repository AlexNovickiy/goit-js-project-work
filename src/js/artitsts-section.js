import axios from 'axios';

const API_BASE_URL = 'https://sound-wave.b.goit.study/api/artists';
let currentPage = 1;
const perPage = 8;

async function fetchArtists(page, limit) {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: { page, limit },
    });
    return response.data.artists || [];
  } catch (error) {
    console.error('Не вдалося завантажити артистів:', error);
    return [];
  }
}

function renderArtistCards(artists, container) {
  const markup = artists
    .map(artist => {
      const image =
        artist.strArtistThumb ||
        'https://via.placeholder.com/350x350?text=No+Image';
      const genres =
        artist.genres
          ?.map(genre => `<li class="genre-tag">${genre}</li>`)
          .join('') || '';
      const bio =
        artist.strBiographyEN || 'Короткий опис для цього артиста відсутній.';

      return `
        <li class="artist-card">
          <img src="${image}" alt="${artist.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${genres}</ul>
            <h3 class="artist-card-name">${artist.strArtist}</h3>
            <p class="artist-card-description">${bio}</p>
            <a href="#" class="artist-card-link">Learn More <span class="arrow-icon">&#9658;</span></a>
          </div>
        </li>
      `;
    })
    .join('');

  container.insertAdjacentHTML('beforeend', markup);
}

document.addEventListener('DOMContentLoaded', () => {
  const artistsGrid = document.getElementById('artists-card-id');
  const loadMoreBtn = document.getElementById('load-more-btn');

  async function loadMoreArtists() {
    loadMoreBtn.disabled = true;
    // loadMoreBtn.textContent = 'Loading...';

    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');

    const artists = await fetchArtists(currentPage, perPage);

    spinner.classList.add('hidden');

    if (artists.length > 0) {
      renderArtistCards(artists, artistsGrid);
      currentPage++;
      if (artists.length < perPage) {
        loadMoreBtn.style.display = 'none';
      }
    } else {
      loadMoreBtn.style.display = 'none';
    }

    loadMoreBtn.disabled = false;
    loadMoreBtn.textContent = 'Load More';
  }

  loadMoreBtn.addEventListener('click', loadMoreArtists);

  loadMoreArtists();
});

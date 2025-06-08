export function renderArtistCards(artists, container) {
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
            <button id="learn-more-btn" class="artist-card-link">Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="./img/sprite.svg#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `;
    })
    .join('');

  container.insertAdjacentHTML('beforeend', markup);
}

import { getAlbumsByArtist } from './artists-api';
import { showLoader, hideLoader } from './helpers';
import { refs } from './refs';
import linkSVGYoutube from '../img/sprite.svg?url';

function onModalOverlayClick(event) {
  if (event.target === refs.modalOverlayArtists) {
    closeModal();
  }
}

function onDocumentKeydown(event) {
  if (
    refs.modalOverlayArtists.classList.contains('is-open') &&
    event.key === 'Escape'
  ) {
    closeModal();
  }
}

function formatYearsActive(formedYear, disbandedYear) {
  const yearFormed = parseInt(formedYear, 10);
  const yearDisbanded = parseInt(disbandedYear, 10);

  if (isNaN(yearFormed) && isNaN(yearDisbanded)) {
    return 'information missing';
  }

  if (!isNaN(yearFormed) && isNaN(yearDisbanded)) {
    return `${yearFormed}–present`;
  }

  if (!isNaN(yearFormed) && !isNaN(yearDisbanded)) {
    return `${yearFormed}–${yearDisbanded}`;
  }

  return 'information missing';
}

function formatDuration(milliseconds) {
  if (typeof milliseconds === 'string') {
    const numMilliseconds = parseInt(milliseconds, 10);
    if (isNaN(numMilliseconds)) {
      return 'N/A';
    }
    milliseconds = numMilliseconds;
  }

  if (
    milliseconds === null ||
    milliseconds === undefined ||
    isNaN(milliseconds)
  ) {
    return 'N/A';
  }

  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
}

async function openArtistModal(artistId) {
  showLoader();
  const existingDescription = refs.aboutArtist.querySelector(
    '.modal-info-description'
  );
  if (existingDescription) {
    existingDescription.remove();
  }
  refs.modalAlboms.innerHTML = '';
  const response = await getAlbumsByArtist(artistId);
  const {
    strArtist,
    strArtistThumb,
    strGender,
    intMembers,
    strCountry,
    strBiographyEN,
    intFormedYear,
    intDisbandedYear,
    albumsList,
  } = response;

  refs.titleName.textContent = strArtist || 'N/A';
  refs.titlePhoto.src = strArtistThumb || '';
  refs.titlePhoto.alt = strArtist || 'Artist photo';

  const yearsActiveDisplay = formatYearsActive(intFormedYear, intDisbandedYear);

  const infoMarkup = `<div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${yearsActiveDisplay}</span>
                    </div>
                    <div class="modal-info-item">
                      <span class="detail-label">Sex</span>
                       <span class="detail-value">${strGender || 'N/A'}</span>
                    </div>
                    </div>
                    <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Members</span>
                        <span class="detail-value">${intMembers || 'N/A'}</span>
                    </div>
                    <div class="modal-info-item">
                        <span class="detail-label">Country</span>
                        <span class="detail-value">${strCountry || 'N/A'}</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="biography">
                <h5 class="detail-label">Biography</h5>
                <p class="modal-info-bio">
                    ${strBiographyEN || 'No biography available.'}
                </p>
            </div>
        </div>`;

  refs.aboutArtist.insertAdjacentHTML('beforeend', infoMarkup);

  let allAlbumsMarkup = '';
  if (albumsList && albumsList.length > 0) {
    albumsList.forEach(album => {
      const albumName = album.strAlbum || 'Unknown Album';
      const albumTracks = album.tracks;
      let tracksMarkup = '';

      if (albumTracks && albumTracks.length > 0) {
        albumTracks.forEach((track, index) => {
          const itemClass =
            (index + 1) % 2 === 0 ? 'albom-track even' : 'albom-track odd';
          const youtubeLink = track.movie;
          const movieLinkHtml =
            typeof youtubeLink === 'string' && youtubeLink.trim() !== ''
              ? `<a class="link-icon-youtube" href="${youtubeLink}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${linkSVGYoutube}#icon-you-tube"></use>
                                </svg>
                            </a>`
              : `<span class="youtube-link-placeholder"></span>`;

          tracksMarkup += `
                            <li class="${itemClass}">
                                <span>${
                                  track.strTrack || 'No track name'
                                }</span>
                                <span>${formatDuration(
                                  track.intDuration
                                )}</span>
                                ${movieLinkHtml}
                            </li>
                        `;
        });
      } else {
        tracksMarkup = `<li class="albom-track no-tracks">No tracks available for this album.</li>`;
      }

      allAlbumsMarkup += `
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${albumName}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${tracksMarkup}
                    </ul>
                `;
    });
  } else {
    allAlbumsMarkup = `<p class="no-albums-message">No albums found for this artist.</p>`;
  }
  refs.modalAlboms.insertAdjacentHTML('beforeend', allAlbumsMarkup);

  refs.modalOverlayArtists.classList.add('is-open');
  refs.body.classList.add('no-scroll');

  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.modalOverlayArtists.addEventListener('click', onModalOverlayClick);
  document.addEventListener('keydown', onDocumentKeydown);
  hideLoader();
}

function closeModal() {
  refs.modalOverlayArtists.classList.remove('is-open');
  refs.body.classList.remove('no-scroll');
  refs.closeModalBtn.removeEventListener('click', closeModal);
  refs.modalOverlayArtists.removeEventListener('click', onModalOverlayClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

if (refs.artistsSection) {
  refs.artistsSection.addEventListener('click', event => {
    const learnMoreButton = event.target.closest('.artist-card-link');

    if (learnMoreButton) {
      const artistId = learnMoreButton.dataset.artistId;
      openArtistModal(artistId);
    }
  });
} else {
  console.warn('Виконавців з ID "artists-card-id" не знайдено.');
}

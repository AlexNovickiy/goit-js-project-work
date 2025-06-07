import axios from 'axios';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const limit = 8; // default limit for pagination

const API_BASE_URL = 'https://sound-wave.b.goit.study/api';
const API_ARTISTS_ENDPOINT = `/artists`;
const API_GENRES_ENDPOINT = `/genres`;
const API_ARTISTS_ALBUMS_ENDPOINT = `/albums`;
const API_FEEDBACKS_ENDPOINT = `/feedbacks`;

export async function getArtists(
  page = 1,
  name = '',
  sortName = '',
  genre = ''
) {
  const params = {
    limit,
    page,
    ...(name && { name }),
    ...(sortName && { sortName }),
    ...(genre && { genre }),
  };
  try {
    const response = await axios.get(`${API_BASE_URL}${API_ARTISTS_ENDPOINT}`, {
      params,
    });
    izitoast.success({
      title: 'Success',
      message: 'Artists fetched successfully!',
      position: 'topRight',
    });
    return response.data;
  } catch (error) {
    izitoast.error({
      title: 'Error',
      message: 'Failed to fetch artists.',
      position: 'topRight',
    });
  }
}

export async function getGenres() {
  try {
    const response = await axios.get(`${API_BASE_URL}${API_GENRES_ENDPOINT}`);
    izitoast.success({
      title: 'Success',
      message: 'Genres fetched successfully!',
      position: 'topRight',
    });
    return response.data;
  } catch (error) {
    izitoast.error({
      title: 'Error',
      message: 'Failed to fetch genres.',
      position: 'topRight',
    });
  }
}

export async function getAlbumsByArtist(artistId) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_ARTISTS_ENDPOINT}/${artistId}${API_ARTISTS_ALBUMS_ENDPOINT}`
    );
    izitoast.success({
      title: 'Success',
      message: 'Albums fetched successfully!',
      position: 'topRight',
    });
    return response.data;
  } catch (error) {
    izitoast.error({
      title: 'Error',
      message: 'Failed to fetch albums.',
      position: 'topRight',
    });
  }
}

getAlbumsByArtist('65ada69eaf9f6d155db48612');

export async function getArtistById(artistId) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_ARTISTS_ENDPOINT}/${artistId}`
    );
    izitoast.success({
      title: 'Success',
      message: 'Artist fetched successfully!',
      position: 'topRight',
    });
    return response.data;
  } catch (error) {
    izitoast.error({
      title: 'Error',
      message: 'Failed to fetch artist.',
      position: 'topRight',
    });
  }
}

getArtistById('65ada69eaf9f6d155db48612');

export async function getFeedbacks(page = 1) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_FEEDBACKS_ENDPOINT}`,
      {
        params: { page },
      }
    );
    izitoast.success({
      title: 'Success',
      message: 'Feedbacks fetched successfully!',
      position: 'topRight',
    });
    return response.data;
  } catch (error) {
    izitoast.error({
      title: 'Error',
      message: 'Failed to fetch feedbacks.',
      position: 'topRight',
    });
  }
}

export async function postFeedback(feedback) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}${API_FEEDBACKS_ENDPOINT}`,
      feedback
    );
    izitoast.success({
      title: 'Success',
      message: 'Feedback submitted successfully!',
      position: 'topRight',
    });
    return response.data;
  } catch (error) {
    izitoast.error({
      title: 'Error',
      message: 'Failed to submit feedback.',
      position: 'topRight',
    });
  }
}

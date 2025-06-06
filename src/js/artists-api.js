import axios from 'axios';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const API_BASE_URL = 'https://sound-wave.b.goit.study/api';
const API_ARTISTS_ENDPOINT = `/artists`;
const API_GENRES_ENDPOINT = `/genres`;
const API_ARTISTS_ALBUMS_ENDPOINT = `/albums`;
const API_FEEDBACKS_ENDPOINT = `/feedbacks`;

export async function getArtists() {
  try {
    const response = await axios.get(`${API_BASE_URL}${API_ARTISTS_ENDPOINT}`);
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

export async function getFeedbacks() {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_FEEDBACKS_ENDPOINT}`
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

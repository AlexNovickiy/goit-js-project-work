import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const loaderOverlay = document.querySelector('.loader-in');
const modalForm = document.querySelector('.feedback-mod');
const starRating = document.querySelector('.star-rating');
const stars = starRating.querySelectorAll('path');
const nameInput = modalForm.elements['name'];
const messageInput = modalForm.elements['message'];
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn-mod');
const submitBtn = modalForm.querySelector('button[type="submit"]');

const baseURL = 'https://sound-wave.b.goit.study/api/feedbacks';

function showLoader() {
  loaderOverlay.classList.remove('hidden');
}
function hideLoader() {
  loaderOverlay.classList.add('hidden');
}

////////////////////////         Зірочки        ///////////////////////////////
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('mouseenter', () => {
    updateStars(index + 1);
  });
  star.addEventListener('mouseleave', () => {
    updateStars(selectedRating);
  });

  star.addEventListener('click', () => {
    selectedRating = index + 1;
    updateStars(selectedRating);
  });
});

function updateStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.setAttribute('fill', '#a76cdb');
    } else {
      star.setAttribute('fill', '#ffffff');
    }
  });
}
/////////////////////////////  Закриття  ////////////////////////////////

function closeModal() {
  modalOverlay.classList.remove('is-open');
}

closeBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
/////////////////////////////////////////////////////////////////
function validateForm() {
  let isValid = true;
  let messages = [];

  if (nameInput.value.trim().length < 2 || nameInput.value.trim().length > 16) {
    isValid = false;
    messages.push('Name must be between 2 and 16 characters');
  }
  if (
    messageInput.value.trim().length < 10 ||
    messageInput.value.trim().length > 512
  ) {
    isValid = false;
    messages.push('Message must be between 10 and 512 characters.');
  }

  if (selectedRating < 1 || selectedRating > 5) {
    isValid = false;
    messages.push('Rating must be between 1 and 5 stars.');
  }

  if (!isValid) {
    messages.forEach(msg => {
      iziToast.error({
        title: 'Error',
        message: msg,
        position: 'topRight',
        timeout: 3000,
        pauseOnHover: true,
      });
    });
  }
  return isValid;
}

function resetForm() {
  modalForm.reset();
  updateStars(0);
  selectedRating = 0;
}

modalForm.addEventListener('submit', async e => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }
  const data = {
    name: nameInput.value.trim(),
    rating: selectedRating,
    descr: messageInput.value.trim(),
  };

  console.log(data);
  showLoader();

  try {
    const response = await axios.post(baseURL, data);
    if (response.status === 200 || response.status === 201) {
      iziToast.success({
        title: 'Success',
        message: 'Feedback submitted successfully!',
        position: 'topRight',
        timeout: 3000,
        pauseOnHover: true,
      });
      closeModal();
      resetForm();
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Failed to submit feedback. Please try again later.',
        position: 'topRight',
        timeout: 3000,
        pauseOnHover: true,
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to submit feedback. Please try again later.',
      position: 'topRight',
      timeout: 3000,
      pauseOnHover: true,
    });
  } finally {
    hideLoader();
  }
});

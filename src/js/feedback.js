import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { getFeedbacks } from './artists-api';
import { renderStarsAdvanced } from './render-functions';

function renderFeedbackSlide({ name, rating, descr }) {
  return `
    <li class="swiper-slide">
      <ul class="feedback-stars">${renderStarsAdvanced(rating)}</ul>
      <p class="feedback-text">"${descr}"</p>
      <p class="feedback-author">${name}</p>
    </li>
  `;
}

async function initFeedbackSwiper() {
  const { data: feedbacks } = await getFeedbacks();

  const first = feedbacks[0];
  const last = feedbacks[feedbacks.length - 1];
  const middleIndex =
    feedbacks.length > 2
      ? Math.floor(
          Math.random() * feedbacks.slice(1, feedbacks.length - 1).length
        )
      : 0;
  const middle = feedbacks[middleIndex];

  const slides = feedbacks.length === 2 ? [first, last] : [first, middle, last];

  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = slides.map(renderFeedbackSlide).join('');

  new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    slidesPerView: 1,
    loop: true,
  });
}

initFeedbackSwiper();

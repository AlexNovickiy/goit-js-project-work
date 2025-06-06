import { refs } from './refs.js';

export function onBtnOpenMenuClick() {
  refs.headerMenuContainer.classList.add('is-open');
  window.addEventListener('resize', onWindowResizeCloseMenu);
}

export function onBtnCloseMenuClick() {
  refs.headerMenuContainer.classList.remove('is-open');
  window.removeEventListener('resize', onWindowResizeCloseMenu);
}

function onWindowResizeCloseMenu() {
  if (window.innerWidth >= 768) {
    refs.headerMenuContainer.classList.remove('is-open');
    window.removeEventListener('resize', onWindowResizeCloseMenu);
  }
}

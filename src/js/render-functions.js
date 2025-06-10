export function renderStarsAdvanced(rating, spritePath = './img/sprite.svg') {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const percentage = Math.round(decimal * 100);

  let starsHtml = '';

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsHtml += `
          <div class="star">
            <svg class="star-filled"><use href="${spritePath}#star-filled"></use></svg>
          </div>`;
    } else if (i === fullStars + 1 && decimal > 0) {
      starsHtml += `
          <div class="star">
            <svg class="star-bg"><use href="${spritePath}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${percentage}%">
              <use href="${spritePath}#star-filled"></use>
            </svg>
          </div>`;
    } else {
      starsHtml += `
          <div class="star">
            <svg class="star-bg"><use href="${spritePath}#star-filled"></use></svg>
          </div>`;
    }
  }

  return `
      <li class="star-svg">
        <div class="star-container">
          ${starsHtml}
        </div>
      </li>`;
}

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from './images';

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createImages(images);

const options = {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
};
new SimpleLightbox('.gallery a', options);

function createImage({ preview, original, description }) {
  return `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
}

function createImages(items) {
  return items.map(item => createImage(item)).join('');
}

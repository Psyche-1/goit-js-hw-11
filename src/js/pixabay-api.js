// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import createMarkup from './render-functions';

const input = document.querySelector('#search-field');

let images;

export default function searching() {
  const searchWord = input.value.trim();

  if (!searchWord) {
    return;
  }

  const params = new URLSearchParams({
    key: '47410848-ca90cbe53fb16c342854d4794',
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${params}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(post => {
      images = post.hits;
      if (!images.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: 'red',
        });
        return;
      }

      createMarkup(images);
    })
    .catch(error => console.log(error));
}

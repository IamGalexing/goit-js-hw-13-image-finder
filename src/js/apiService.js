import '../templates/image-card.hbs';

const listRef = document.querySelector('.gallery');

export default function apiData(search) {
  fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=1&per_page=12&key=20364731-46e701cf2e3ccfa2f87043efb`,
  )
    .then(res => res.json())
    .then(data => {
      data.forEach(element => {
        listRef.card(element);
      });
    });
}

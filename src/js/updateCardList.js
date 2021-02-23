import refs from '../refs/variables';
import card from '../templates/image-card.hbs';

function updateCardList(data) {
  const markup = card(data);
  refs.listCards.insertAdjacentHTML('beforeend', markup);
}

export default updateCardList;

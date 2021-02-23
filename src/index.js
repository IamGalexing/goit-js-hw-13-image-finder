import './styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import refs from './refs/variables';
import updateCardList from './js/updateCardList';
import apiData from './js/apiService';
import * as basicLightbox from 'basiclightbox';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  refs.listCards.innerHTML = '';

  refs.btnMore.classList.add('is-hidden');

  apiData.input = event.target.query.value;
  apiData.resetPage();

  event.currentTarget.reset();

  apiData.fetchData().then(data => {
    updateCardList(data);
    if (data.length) refs.btnMore.classList.remove('is-hidden');
  });
});

refs.btnMore.addEventListener('click', event => {
  const viewportHeightScroll = document.querySelector('.gallery').offsetHeight;
  apiData
    .fetchData()
    .then(data => {
      updateCardList(data);
    })
    .finally(() => {
      window.scrollTo(0, viewportHeightScroll);
    });
});

refs.listCards.addEventListener('click', event => {
  const linkLargeImage = event.target.closest('li.photo-card').dataset
    .largeimgurl;

  // document.cookie = 'SameSite=None; Secure';

  basicLightbox
    .create(
      `
    <img src=${linkLargeImage} width="800" height="600"/>
`,
    )
    .show();
});

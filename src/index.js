import './styles.css';
import apiData from './js/apiService';
import 'material-design-icons';

const sesrchFormRef = document.querySelector('#search-form');

sesrchFormRef.addEventListener('submit', event => {
  apiData(event.target.value);
});

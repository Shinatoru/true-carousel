import '../sass/style.scss';
import carousel from './carousel';

window.addEventListener('DOMContentLoaded', () => {
  carousel({infinite: false, arrows: false});
});
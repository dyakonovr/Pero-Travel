import enableScroll from './enableScroll';
import disableScroll from './disableScroll';

export default function scrollToggle() {
  if (document.body.classList.contains('disable-scroll')) {
    enableScroll();
  } else {
    disableScroll();
  }
}
import { deleteClass } from "../universal/delete-class";

const btns = document.querySelectorAll('.parameter-btn');

if (btns) {
  btns.forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const target = e.currentTarget;
      deleteClass(btns, 'tours-parameter__btn--active');
      target.classList.add('tours-parameter__btn--active');
    });
  });
}

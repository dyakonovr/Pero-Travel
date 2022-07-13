import { deleteClass } from "./delete-class";

const resetBtn = document.querySelector('.reset-btn-js');

if (resetBtn) {
  resetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const slider = document.querySelector('.slider-js');
    const paramBtns = document.querySelector('.parameter-btns');
    const checkboxes = document.querySelectorAll('.checkbox-js');

    if (slider) slider.noUiSlider.set([500, 99999]);
    if (paramBtns) {
      const childrens = document.querySelectorAll('.parameter-btn');;
      deleteClass(childrens, 'tours-parameter__btn--active');
      childrens[0].classList.add('tours-parameter__btn--active');
    }
    // if (checkboxes) {
    //   console.log(checkboxes);
    // }
  });
}

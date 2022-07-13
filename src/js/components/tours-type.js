import { deleteClass } from "./delete-class";

const types = document.querySelectorAll('.tours-type-js');

if (types) {
  types.forEach(el => {
    el.addEventListener('click', function (e) {
      const target = e.currentTarget;
      deleteClass(types, 'filters__kind--active');
      target.classList.add('filters__kind--active');
    });
  });
}

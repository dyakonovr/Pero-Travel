const likeBtns = document.querySelectorAll('.btn-like-js');

if (likeBtns) {
  likeBtns.forEach(el => {
    el.addEventListener('click', function () {
      console.log('click');
      el.classList.toggle('tours-item__like--active');
    });
  });
}

const likeBtns = document.querySelectorAll('.btn-like-js');

if (likeBtns) {
  likeBtns.forEach(el => {
    el.addEventListener('click', function () {
      el.classList.toggle('btn-like--active');
    });
  });
}

const accordions = document.querySelectorAll('.accordion');
const btns = document.querySelectorAll('.accordion__control');


if (accordions && btns) {
  btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const control = e.currentTarget;
      const self = control.closest('.accordion');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('accordion-open');

      if (self.classList.contains('accordion-open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
}

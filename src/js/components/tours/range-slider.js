import noUiSlider from "../../vendor/nouislider.min.js";

const rangeSlider = document.querySelector('.range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [500, 99999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [99999]
    }
  });

  const inputStart = document.querySelector('#input-0');
  const inputEnd = document.querySelector('#input-1');
  const inputs = [inputStart, inputEnd];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
}

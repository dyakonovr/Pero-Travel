import datepicker from '../vendor/datepicker.min.js'

const calendarClass = '.calendar-js';

if (document.querySelector(calendarClass)) {
  const today = new Date();
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const calendar = datepicker(calendarClass, {
    customDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dateSelected: date,
    // minDate: date,
    disableYearOverlay: true,
    alwaysShow: true,

    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString()
      input.value = value
    },

  })
}



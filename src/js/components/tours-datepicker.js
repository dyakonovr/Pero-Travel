import datepicker from '../vendor/datepicker.min.js'

const today = new Date();
const date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

const picker = datepicker('.datepicker-js', {
  customDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
  customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  dateSelected: date,
  minDate: date,
  showAllDates: true,
  disableYearOverlay: true,

  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value
  },

})

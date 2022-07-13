export const deleteClass = (par, cl) => {
  par.forEach(el => { el.classList.remove(cl); });
};

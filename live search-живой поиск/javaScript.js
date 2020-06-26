document.querySelector('.row-input__some').oninput = function () {
  let val = this.value.trim();
  let elasticItem = document.querySelectorAll('.row__serch li');
  if (val != '') {
    elasticItem.forEach(function (elem) {
      if (elem.innerText.search(val) !== -1) {
        elem.classList.remove('hide');
        let str = elem.innerText;
        elem.innerHTML = serchValue(str, elem.innerText.search(val), val.length);
      } else {
        elem.classList.add('hide');
        elem.innerHTML = elem.innerText;
      }
    });
  } else {
    elasticItem.forEach(function (elem) {
      elem.classList.remove('hide');
      elem.innerHTML = elem.innerText;
    });
  }
};

function serchValue(string, pos, len) {
  return `${string.slice(0, pos)}<span class="mark">${string.slice(pos, pos + len)}</span>${string.slice(pos + len)}`;
}

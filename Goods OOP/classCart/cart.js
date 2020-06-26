class Cart {
  //item = []
  //cartClass = []
  //pulsClass = []
  //minusClass = []
  //deleteClass = []
  //currency = ''
  constructor(secondCart) {
    const { elementOut, tableClass, pulsClass, minusClass, deleteClass, currency, sourse } = secondCart;
    this.elementOut = elementOut;
    this._tableClass = tableClass;
    this._pulsClass = pulsClass;
    this._minusClass = minusClass;
    this._deleteClass = deleteClass;
    this.currency = currency;
    this.sourse = sourse;
  }
  setPlus(articul) {
    this.sourse[articul]['count']++;
  }
  setMinus(articul) {
    if (this.sourse[articul]['count'] - 1 == 0) this.setDelete(articul);
    else this.sourse[articul]['count']--;
  }
  setDelete(articul) {
    delete this.sourse[articul];
    return articul;
  }

  setTotal() {
    let total = 0;
    for (let key in this.sourse) {
      total += this.sourse[key]['count'] * this.sourse[key]['price'];
    }
    return total;
  }
  render() {
    //create elementOut
    let div = document.createElement('div');
    div.classList.add(this.elementOut);

    //createTable
    let table = document.createElement('table');
    table.classList.add(this._tableClass);

    //draw cart
    for (let key in this.sourse) {
      let tr = document.createElement('tr');

      //create button delete
      let td = document.createElement('td');
      let button = document.createElement('button');
      this._deleteClass.forEach((elemem) => {
        button.classList.add(elemem);
      });
      button.innerHTML = 'x';
      button.setAttribute('data-articul', key);
      td.append(button);
      tr.append(td);

      //create Image
      td = document.createElement('td');
      let img = document.createElement('img');
      img.setAttribute('src', this.sourse[key]['image']);
      td.append(img);
      tr.append(td);

      //create Name
      td = document.createElement('td');
      let h4 = document.createElement('h4');
      h4.innerHTML = this.sourse[key]['name'];
      td.append(h4);
      tr.append(td);

      //create Minus
      td = document.createElement('td');
      button = document.createElement('button');
      this._minusClass.forEach((elem) => {
        button.classList.add(elem);
      });
      button.innerHTML = '-';
      button.setAttribute('data-articul', key);
      td.append(button);
      tr.append(td);

      //create Count
      td = document.createElement('td');
      let span = document.createElement('span');
      span.innerHTML = this.sourse[key]['count'];
      td.append(span);
      tr.append(td);

      //create Plus
      td = document.createElement('td');
      button = document.createElement('button');
      this._pulsClass.forEach((elem) => {
        button.classList.add(elem);
      });
      button.innerHTML = '+';
      button.setAttribute('data-articul', key);
      td.append(button);
      tr.append(td);

      //create total
      td = document.createElement('td');
      span = document.createElement('span');
      span.innerHTML = this.sourse[key]['count'] * this.sourse[key]['price'];
      td.append(span);
      tr.append(td);
      table.append(tr);
    }

    //create Full total
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.setAttribute('colspan', 7);
    td.style.textAlign = 'right';
    td.innerHTML = `<span>Total: ${this.setTotal()} ${this.currency}</span>`;
    tr.append(td);
    table.append(tr);
    div.append(table);
    document.querySelector('.mainCartOut').append(div);
  }
}

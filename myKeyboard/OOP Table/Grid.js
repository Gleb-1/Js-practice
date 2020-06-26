class Goods {
  /**
   *  properties
   *  @param [array] _tableClass - css классы оформления
   *  @param [array] data  - выходные данные
   *  @param [array] attribute - управляем что выводим
   *  @param [array] _element  - куда выводить таблицу
   *  @param [array] _header  - заголовок таблицы
   *  @param [array] _headerClass  - css классы заголовка
   */
  constructor() {
    this._element = '';
    this._header = '';
    this._headerClass = [];
    this._tableClass = [];
    this.attribute = [];
  }
  setElement(element) {
    if (document.querySelector(element)) {
      this._element = element;
      return true;
    }
    return false;
  }
  setHeader(header) {
    if (typeof header === 'string' && header.trim() != '') {
      this._header = header.trim();
      return true;
    }
    return false;
  }
  setHeaderClass(headerClass) {
    if (typeof headerClass === 'object') {
      this._headerClass = headerClass;
      return true;
    }
    return false;
  }
  setTableClass(tableClass) {
    if (typeof tableClass === 'object') {
      this._tableClass = tableClass;
      return true;
    }
    return false;
  }
  render(data) {
    this.setElement(data.element);
    this.setHeader(data.header);
    this.setHeaderClass(data.headerClass);
    this.setTableClass(data.tableClass);
    this.attribute = data.attribute;
    this.data = data.data;
    console.log((this.data = data.data));
    // show header
    if (this._header) {
      const header = document.createElement('h1');
      this._headerClass.forEach(function (elem) {
        header.classList.add(elem);
      });
      header.textContent = this._header;
      document.querySelector(this._element).append(header);
    }
    //show table
    const table = document.createElement('table');
    this._tableClass.forEach((elem) => {
      table.classList.add(elem);
    });
    const tr = document.createElement('tr');
    for (let key in this.attribute) {
      const th = document.createElement('th');
      if (this.attribute[key].label) th.textContent = this.attribute[key].label;
      else th.textContent = key;
      tr.append(th);
    }
    table.append(tr);
    // draw table

    for (let i = 0; i < this.data.length; i++) {
      const tr = document.createElement('tr');
      for (let key in this.attribute) {
        const td = document.createElement('td');
        if (this.attribute[key].value) {
          console.log(this.attribute[key].value);
          this.data[i][key] = this.attribute[key].value(this.data[i]);
        }
        td.innerHTML = this.data[i][key];
        tr.append(td);
      }
      table.append(tr);
    }
    document.querySelector(this._element).append(table);
  }
}

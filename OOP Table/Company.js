class Company {

  constructor(data) {
    const { element, header, tableClass, attribute, source } = data;
    
    console.log(source)
    this._element = element;
    this._header = header;
    this._tableClass = tableClass;
    this.attribute = attribute;
    this.source = source;
  }


  render() {

    //show header
    const header = document.createElement('h1');

    header.textContent = this._header;
    document.querySelector(this._element).append(header);

    //show table
    const table = document.createElement('table');
    this._tableClass.forEach((elem) => {
      table.classList.add(elem);
    });

    let tr = document.createElement('tr');
    for (let key in this.attribute) {
      let th = document.createElement('th');
      if (this.attribute[key].lable) th.textContent = this.attribute[key].lable;
      else th.textContent = key;
      tr.append(th);
    }
    table.append(tr);

    // draw table
    for (let i = 0; i < this.source.length; i++) {
      const tr = document.createElement('tr');
      for (let key in this.attribute) {
        const td = document.createElement('td');
      
        if (this.attribute[key].value) {
          this.source[i][key] = this.attribute[key].value(this.source[i]);
        }
        td.innerHTML = this.source[i][key];
        tr.append(td);
      }
      table.append(tr);
    }
    document.querySelector(this._element).append(table);
  }  //end render
}

class Goods {
  // element === ''
  // header === ''
  // elementClass === []
  // blockClass === []
  // attribute = []

  constructor(data) {
    const { element, header, headerClass, divContainerClass, blockClass, buttonClass, secondData, count, sourse } = data;
    this._element = element;
    this._header = header;
    this._headerClass = headerClass;
    this._divContainerClass = divContainerClass;
    this._blockClass = blockClass;
    this._buttonClass = buttonClass;
    this.secondData = secondData;
    this.count = 0;
    this.sourse = sourse;
    // console.log(this.sourse);
  }
  render() {
    //show header
    const div = document.createElement('div');
    this._divContainerClass.forEach((elem) => {
      div.classList.add(elem);
    });

    const header = document.createElement('h1');
    this._headerClass.forEach((element) => {
      header.classList.add(element);
    });
    header.textContent = this._header;
    div.append(header);

    // products in cart
    const productsDiv = document.createElement('div');
    productsDiv.classList.add('productsDiv');

    const products = document.createElement('a');
    products.setAttribute('href', './cart.html');
    products.classList.add('products');
    products.textContent = 'Корзина';
    //==================================================================================================
    const cartCount = document.createElement('span');
    cartCount.classList.add('cartCount');
    // cartCount.innerHTML = this.count;

    products.append(cartCount);
    productsDiv.append(products);
    div.append(productsDiv);

    // create row
    const row = document.createElement('div');
    row.classList.add('row');

    // show block
    for (let key in this.sourse) {
      const block = document.createElement('div');
      this._blockClass.forEach((elem) => {
        block.classList.add(elem);
      });

      const headerH2 = document.createElement('h2');
      headerH2.innerHTML = `${this.sourse[key]['name']}`;
      block.append(headerH2);
      div.append(block);

      const img = document.createElement('img');
      img.setAttribute('src', this.sourse[key]['image']);
      //   img.innerHTML = img;
      block.append(img);
      row.append(block);

      const paragraph = document.createElement('p');
      paragraph.innerHTML = `${this.sourse[key]['price']} USD`;
      block.append(paragraph);
      row.append(block);

      const button = document.createElement('button');
      this._buttonClass.forEach((elem) => {
        button.classList.add(elem);
      });
      button.setAttribute('data-articul', key);
      button.innerHTML = 'Add to basket';

      block.append(button);
      row.append(block);
    }
    div.append(row);
    document.querySelector(this._element).append(div);
  }
}

class Control extends Goods {
  constructor(data) {
    super(data);
  }
  // out() {
  //   document.querySelector('.cartCount').innerHTML = '';
  //   this.render();
  // }

  draw() {
    super.render();

    document.querySelector(this._element).addEventListener('click', (e) => {
      let articul = e.target.dataset['articul'];
      if (e.target.classList.contains('to-cart')) {
        if (this.secondData[articul] !== undefined) {
          this.secondData[articul]['count']++;
        } else {
          this.secondData[articul] = this.sourse[articul];
          this.secondData[articul]['count'] = 1;
        }
        if (localStorage.getItem('myCart') != null) {
          let temp = JSON.parse(localStorage.getItem('myCart'));
          temp[articul] = this.sourse[articul];
          localStorage.setItem('myCart', JSON.stringify(temp));
        } else {
          localStorage.setItem('myCart', JSON.stringify(this.secondData));
        }
      }
    });
  }
}

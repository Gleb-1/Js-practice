class ControlCart extends Cart {
  constructor(secondCart) {
    super(secondCart);
    // console.log(secondCart);
  }
  out() {
    document.querySelector('.mainCartOut').innerHTML = '';
    this.render();
  }

  draw() {
    super.render();
    this.out();

    document.querySelector('.mainCartOut').addEventListener('click', (e) => {
      let articul = e.target.dataset['articul'];

      if (e.target.classList.contains('delete')) {
        this.setDelete(articul);
        this.out();
      } else if (e.target.classList.contains('minus')) {
        this.setMinus(articul);
        this.out();
      } else if (e.target.classList.contains('plus')) {
        this.setPlus(articul);
        this.out();
      }
      if (localStorage.getItem('myCart') !== null) {
        let temp = JSON.parse(localStorage.getItem('myCart'));
        temp[articul] = this.sourse[articul];
        localStorage.setItem('myCart', JSON.stringify(temp));
      } else {
        localStorage.setItem('myCart', JSON.stringify(this.sourse));
      }
    });
  }
}

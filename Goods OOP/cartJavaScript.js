function changeCartList() {
  const cartOf = JSON.parse(localStorage.getItem('myCart'));
  // console.log(cartOf);

  const secondCart = {
    elementOut: 'container',
    tableClass: 'cart',
    pulsClass: ['plus', 'button-primary'],
    minusClass: ['minus', 'button-primary'],
    deleteClass: ['delete', 'button-primary'],
    currency: 'USD',
    sourse: cartOf,
  };

  let cart = new Cart(secondCart);
  let controlCart = new ControlCart(secondCart);
  controlCart.draw();
}

// если при обновлении страницы ls  не пустой запускается функция changeCartList()
if (localStorage.getItem('myCart') !== null) {
  changeCartList();
}
window.addEventListener('storage', function () {
  changeCartList();
  location.reload();
});

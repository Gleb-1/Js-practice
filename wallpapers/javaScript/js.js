let mas = ['./images/0.jpg', './images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg', './images/6.jpg', './images/7.jpg', './images/8.jpg', './images/9.jpg', './images/10.jpg', './images/11.jpg', './images/12.jpg', './images/13.jpg', './images/14.jpg', './images/15.jpg', './images/16.jpg', './images/17.jpg', './images/18.jpg'];

let count = 0;
function show() {
  out = '';
  for (let i = 0; i < 19; i++) {
    out += `<div class = "control" ><span class ="increase"><img src="./images/${i}.jpg"></span></div>`;
  }
  document.querySelector('.wrap').innerHTML = out;

  let div_max = document.createElement('div');
  div_max.classList.add('div-max');
  document.querySelector('.wrap').after(div_max);

  let img = document.createElement('img');
  img.setAttribute('src', './images/0.jpg');
  document.querySelector('.div-max').append(img);
}
show();

// let wrap = document.querySelectorAll('.wrap img');
// for (let i = 0; i < wrap.length; i++) {
//   mas.push(wrap[i].getAttribute('src'));
// }
// // console.log(mas);

let div_max = document.querySelector('.div-max img');
let images = document.querySelectorAll('.wrap img');
let control = document.querySelectorAll('.control');

function activ(count) {
  div_max.src = images[count].src;
  images.forEach((elem) => {
    if (div_max.src == elem.src) {
      control.forEach((elem, index) => {
        if (count == index) elem.classList.add('activ-img');
        else elem.classList.remove('activ-img');
      });
    }
  });
}

document.querySelector('.i-1').onkeydown = function (e) {
  if (e.key == 'ArrowRight') count++;
  if (e.key == 'ArrowLeft') count--;
  if (count < 0) count = mas.length - 1;
  if (count == mas.length) count = 0;
  this.value = count;
  activ(count);
};

images.forEach((elem, index) => {
  elem.onclick = function () {
    count = index;
    activ(count);
  };
});
console.log(images);

// document.onkeydown = function (e) {
//   console.log('onkeydown: ==============================================================================');
//   console.log(e);
//   console.log('onkeydown: keyCode' + e.keyCode);
//   console.log('onkeydown: charCode' + e.charCode);
// };

const enUs = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#92', '', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctr', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', '', 'Ctr', ''];

const ruRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#92', '', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Enter', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Ctr', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', '', 'Ctr', ''];

const obj = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight'];

// console.log(enUs);
// console.log(ruRu);

// document.querySelector('.i-1').onkeydown = function t7(e) {
//   ruRu.push(e.key);
//   console.log(ruRu);
// };
// console.log(ruRu);

let flag = true;
let allDiv = document.getElementsByClassName('k-key');
document.querySelector('.i-1').addEventListener('keydown', upper);
document.querySelector('.i-1').addEventListener('keydown', changeLayout);
document.querySelector('.i-1').addEventListener('keydown', down);
document.querySelector('.i-1').addEventListener('keyup', up);

function init(lng) {
  let out = '';
  for (let i = 0; i < lng.length; i++) {
    out += `<div class = "k-key" data = "${obj[i]}">${lng[i]}</div>`;
  }

  document.querySelector('.keyboard__keys').innerHTML = out;

  let img = document.createElement('img');
  img.src = './image/backspace.png';
  let img_1 = document.createElement('img');
  img_1.src = './image/capsLock.png';
  let img_2 = document.createElement('img');
  img_2.src = './image/menu.png';
  let img_3 = document.createElement('img');
  img_3.src = './image/8-Check-512.png';

  for (let i = 0; i < allDiv.length; i++) {
    allDiv[14].classList.add('backSpace');
    allDiv[29].classList.add('caps');
    allDiv[28].classList.add('enter');
    if (i == 41 || i == 52) allDiv[i].classList.add('shift');
    allDiv[15].classList.add('tab');
    allDiv[56].classList.add('space');
    allDiv[59].classList.add('menu');
    allDiv[61].classList.add('keyboard__key--dark');
    allDiv[14].append(img);
    allDiv[29].append(img_1);
    allDiv[59].append(img_2);
    allDiv[61].append(img_3);
  }
}
init(enUs);

function upper(e) {
  // console.log(e);
  for (let i = 0; i < allDiv.length; i++) {
    if (e.key == 'CapsLock') {
      if ((i >= 16 && i <= 27) || (i >= 30 && i <= 39) || (i >= 42 && i <= 50)) {
        allDiv[i].classList.toggle('appercase');
        allDiv[29].classList.toggle('keyboard__key--active');
      }
    }
  }
}

function changeLayout(e) {
  if ((e.key == 'Shift' && e.altKey == true) || (e.altKey == true && e.key == 'Shift')) {
    flag = !flag;
    if (!flag) {
      init(ruRu);
    } else {
      init(enUs);
    }
  }
  document.querySelector('.keyboard__key--dark' || '.keyboard__key--dark img').addEventListener('click', close);
}

function open(e) {
  if (e.target == this) {
    document.querySelector('.keyboard').classList.remove('keyboard--hidden');
  }
}

function close(e) {
  if (e.target == document.querySelector('.keyboard__key--dark img') || document.querySelector('.keyboard__key--dark')) {
    document.querySelector('.keyboard').classList.add('keyboard--hidden');
  }
}

function down(e) {
  document.querySelector('.k-key[data= "' + e.code + '"]').classList.add('active--key');
}

function up(e) {
  document.querySelector('.k-key[data= "' + e.code + '"]').classList.remove('active--key');
}

document.querySelector('.i-1').addEventListener('click', open);
document.querySelector('.keyboard__key--dark').addEventListener('click', close);

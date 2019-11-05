import data from './_constants';
// const KEYS = [
//   [
//     {
//       code: 'Backquote', defVal: '`', shiftVal: '~', altVal: 'ё', altShiftVal: 'Ё',
//     },
//     {
//       code: 'Digit1', defVal: '1', shiftVal: '!', altVal: '1', altShiftVal: '!',
//     },
//     {
//       code: 'Digit2', defVal: '2', shiftVal: '@', altVal: '2', altShiftVal: '"',
//     },
//     {
//       code: 'Digit3', defVal: '3', shiftVal: '#', altVal: '3', altShiftVal: '№',
//     },
//     {
//       code: 'Digit4', defVal: '4', shiftVal: '$', altVal: '4', altShiftVal: ';',
//     },
//     {
//       code: 'Digit5', defVal: '5', shiftVal: '%', altVal: '5', altShiftVal: '%',
//     },
//     {
//       code: 'Digit6', defVal: '6', shiftVal: '^', altVal: '6', altShiftVal: ':',
//     },
//     {
//       code: 'Digit7', defVal: '7', shiftVal: '&', altVal: '7', altShiftVal: '?',
//     },
//     {
//       code: 'Digit8', defVal: '8', shiftVal: '*', altVal: '8', altShiftVal: '*',
//     },
//     {
//       code: 'Digit9', defVal: '9', shiftVal: '(', altVal: '9', altShiftVal: '(',
//     },
//     {
//       code: 'Digit0', defVal: '0', shiftVal: ')', altVal: '0', altShiftVal: ')',
//     },
//     {
//       code: 'Minus', defVal: '-', shiftVal: '_', altVal: '-', altShiftVal: '_',
//     },
//     {
//       code: 'Equal', defVal: '=', shiftVal: '+', altVal: '=', altShiftVal: '+',
//     },
//     {
//       code: 'Backspace', defVal: '&lArr;', shiftVal: '&lArr;', altVal: '&lArr;', altShiftVal: '&lArr;',
//     },
//   ],
//   [
//     {
//       code: 'Tab', defVal: 'Tab', shiftVal: 'Tab', altVal: 'Tab', altShiftVal: 'Tab',
//     },
//     {
//       code: 'KeyQ', defVal: 'q', shiftVal: 'Q', altVal: 'й', altShiftVal: 'Й',
//     },
//     {
//       code: 'KeyW', defVal: 'w', shiftVal: 'W', altVal: 'ц', altShiftVal: 'Ц',
//     },
//     {
//       code: 'KeyE', defVal: 'e', shiftVal: 'E', altVal: 'у', altShiftVal: 'У',
//     },
//     {
//       code: 'KeyR', defVal: 'r', shiftVal: 'R', altVal: 'к', altShiftVal: 'К',
//     },
//     {
//       code: 'KeyT', defVal: 't', shiftVal: 'T', altVal: 'е', altShiftVal: 'Е',
//     },
//     {
//       code: 'KeyY', defVal: 'y', shiftVal: 'Y', altVal: 'н', altShiftVal: 'Н',
//     },
//     {
//       code: 'KeyU', defVal: 'u', shiftVal: 'U', altVal: 'г', altShiftVal: 'Г',
//     },
//     {
//       code: 'KeyI', defVal: 'i', shiftVal: 'I', altVal: 'ш', altShiftVal: 'Ш',
//     },
//     {
//       code: 'KeyO', defVal: 'o', shiftVal: 'O', altVal: 'щ', altShiftVal: 'Щ',
//     },
//     {
//       code: 'KeyP', defVal: 'p', shiftVal: 'P', altVal: 'з', altShiftVal: 'З',
//     },
//     {
//       code: 'BracketLeft', defVal: '[', shiftVal: '{', altVal: 'х', altShiftVal: 'Х',
//     },
//     {
//       code: 'BracketRight', defVal: ']', shiftVal: '}', altVal: 'ъ', altShiftVal: 'Ъ',
//     },
//     {
//       code: 'Backslash', defVal: '\\', shiftVal: '|', altVal: '\\', altShiftVal: '/',
//     },
//     {
//       code: 'Delete', defVal: 'Del', shiftVal: 'Del', altVal: 'Del', altShiftVal: 'Del',
//     },
//   ],
//   [
//     {
//       code: 'CapsLock', defVal: 'Caps', shiftVal: 'Caps', altVal: 'Caps', altShiftVal: 'Caps',
//     },
//     {
//       code: 'KeyA', defVal: 'a', shiftVal: 'A', altVal: 'ф', altShiftVal: 'Ф',
//     },
//     {
//       code: 'KeyS', defVal: 's', shiftVal: 'S', altVal: 'ы', altShiftVal: 'Ы',
//     },
//     {
//       code: 'KeyD', defVal: 'd', shiftVal: 'D', altVal: 'в', altShiftVal: 'В',
//     },
//     {
//       code: 'KeyF', defVal: 'f', shiftVal: 'F', altVal: 'а', altShiftVal: 'А',
//     },
//     {
//       code: 'KeyG', defVal: 'g', shiftVal: 'G', altVal: 'п', altShiftVal: 'П',
//     },
//     {
//       code: 'KeyH', defVal: 'h', shiftVal: 'H', altVal: 'р', altShiftVal: 'Р',
//     },
//     {
//       code: 'KeyJ', defVal: 'j', shiftVal: 'J', altVal: 'о', altShiftVal: 'О',
//     },
//     {
//       code: 'KeyK', defVal: 'k', shiftVal: 'K', altVal: 'л', altShiftVal: 'Л',
//     },
//     {
//       code: 'KeyL', defVal: 'l', shiftVal: 'L', altVal: 'д', altShiftVal: 'Д',
//     },
//     {
//       code: 'Semicolon', defVal: ';', shiftVal: ':', altVal: 'ж', altShiftVal: 'Ж',
//     },
//     {
//       code: 'Quote', defVal: '\'', shiftVal: '"', altVal: 'э', altShiftVal: 'Э',
//     },
//     {
//       code: 'Enter', defVal: 'Enter', shiftVal: 'Enter', altVal: 'Enter', altShiftVal: 'Enter',
//     },
//   ],
//   [
//     {
//       code: 'ShiftLeft', defVal: 'Shift', shiftVal: 'Shift', altVal: 'Shift', altShiftVal: 'Shift',
//     },
//     {
//       code: 'KeyZ', defVal: 'z', shiftVal: 'Z', altVal: 'я', altShiftVal: 'Я',
//     },
//     {
//       code: 'KeyX', defVal: 'x', shiftVal: 'X', altVal: 'ч', altShiftVal: 'Ч',
//     },
//     {
//       code: 'KeyC', defVal: 'c', shiftVal: 'C', altVal: 'с', altShiftVal: 'С',
//     },
//     {
//       code: 'KeyV', defVal: 'v', shiftVal: 'V', altVal: 'м', altShiftVal: 'М',
//     },
//     {
//       code: 'KeyB', defVal: 'b', shiftVal: 'B', altVal: 'и', altShiftVal: 'И',
//     },
//     {
//       code: 'KeyN', defVal: 'n', shiftVal: 'N', altVal: 'т', altShiftVal: 'Т',
//     },
//     {
//       code: 'KeyM', defVal: 'm', shiftVal: 'M', altVal: 'ь', altShiftVal: 'Ь',
//     },
//     {
//       code: 'Comma', defVal: ',', shiftVal: '<', altVal: 'б', altShiftVal: 'Б',
//     },
//     {
//       code: 'Period', defVal: '.', shiftVal: '>', altVal: 'ю', altShiftVal: 'Ю',
//     },
//     {
//       code: 'Slash', defVal: '/', shiftVal: '?', altVal: '.', altShiftVal: ',',
//     },
//     {
//       code: 'ShiftRight', defVal: 'Shift', shiftVal: 'Shift', altVal: 'Shift', altShiftVal: 'Shift',
//     },
//     {
//       code: 'ArrowUp', defVal: '&#9650;', shiftVal: '&#9650;', altVal: '&#9650;', altShiftVal: '&#9650;',
//     },
//   ],
//   [
//     {
//       code: 'ControlLeft', defVal: 'Ctrl', shiftVal: 'Ctrl', altVal: 'Ctrl', altShiftVal: 'Ctrl',
//     },
//     {
//       code: 'MetaLeft', defVal: 'Win', shiftVal: 'Win', altVal: 'Win', altShiftVal: 'Win',
//     },
//     {
//       code: 'AltLeft', defVal: 'Alt', shiftVal: 'Alt', altVal: 'Alt', altShiftVal: 'Alt',
//     },
//     {
//       code: 'Space', defVal: ' ', shiftVal: ' ', altVal: ' ', altShiftVal: ' ',
//     },
//     {
//       code: 'AltRight', defVal: 'Alt', shiftVal: 'Alt', altVal: 'Alt', altShiftVal: 'Alt',
//     },
//     {
//       code: 'ControlRight', defVal: 'Ctrl', shiftVal: 'Ctrl', altVal: 'Ctrl', altShiftVal: 'Ctrl',
//     },
//     {
//       code: 'ArrowLeft', defVal: '&#9668;', shiftVal: '&#9668;', altVal: '&#9668;', altShiftVal: '&#9668;',
//     },
//     {
//       code: 'ArrowDown', defVal: '&#9660;', shiftVal: '&#9660;', altVal: '&#9660;', altShiftVal: '&#9660;',
//     },
//     {
//       code: 'ArrowRight', defVal: '&#9658;', shiftVal: '&#9658;', altVal: '&#9658;', altShiftVal: '&#9658;',
//     },
//   ],
// ];

// const CODES = [
//   'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
//   'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
//   'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
//   'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'ShiftRight', 'ArrowUp',
//   'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
// ];

// const mousePressStatesArray = ['ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight'];
// const defAlphabet = 'abcdefghijklmnopqrstuvwxyz';
// const altAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';


let caps = false;
let shift = false;
let alt = false;
let lang = JSON.parse(localStorage.getItem('lang')) || false;

const btnCreate = ({
  code, defVal, shiftVal, altVal, altShiftVal,
}) => {
  const btn = document.createElement('div');
  btn.classList.add('btn');
  btn.code = code;
  btn.id = code;
  if (lang) {
    btn.innerHTML = altVal;
    if (shift) {
      btn.innerHTML = altShiftVal;
    } else
    if (caps) {
      if (altAlphabet.includes(altVal)) btn.innerHTML = altShiftVal;
      else {
        btn.innerHTML = altVal;
      }
    }
  } else
  if (!lang) {
    if (shift) {
      btn.innerHTML = shiftVal;
    } else if (caps) {
      if (defAlphabet.includes(defVal)) btn.innerHTML = shiftVal;
      else {
        btn.innerHTML = defVal;
      }
    } else {
      btn.innerHTML = defVal;
    }
  }

  if (code === 'Space') {
    btn.style.flexGrow = '20';
  }
  // eslint-disable-next-line no-use-before-define
  handlerAdd(btn);
  return btn;
};

const keyboardRow = (arr) => {
  const row = document.createElement('div');
  row.classList.add('keyboard--row');
  arr.map((el) => row.append(btnCreate(el)));
  return row;
};

const keyboardEl = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboard.id = 'keyboard';
  KEYS.map((el) => keyboard.append(keyboardRow(el)));
  return keyboard;
};

const outputArea = () => {
  const area = document.createElement('textarea');
  area.classList.add('textarea');
  area.id = 'textarea';
  area.style.width = '99%';
  area.style.height = '200px';
  area.style.fontSize = '1.5em';
  return area;
};

const wrapperEl = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.append(outputArea(), keyboardEl());
  return wrapper;
};

const app = () => {
  document.querySelector('#page').prepend(wrapperEl());
};

const saveLang = () => localStorage.setItem('lang', lang);

const reRenderKeyboard = () => {
  document.querySelector('#keyboard').remove();
  document.querySelector('.wrapper').append(keyboardEl());
};

function btnClickHandler(event) {
  const area = document.querySelector('#textarea');
  area.value += event.target.innerHTML;
}

function deleteHandler() {
  const area = document.querySelector('#textarea');
  area.value = '';
}

function backspaceHandler() {
  const area = document.querySelector('#textarea');
  const size = area.value.length;
  area.value = area.value.slice(0, size - 1);
}

function enterHandler() {
  const area = document.querySelector('#textarea');
  area.value = `${area.value}\n`;
}

function tabHandler() {
  const area = document.querySelector('#textarea');
  area.value = `${area.value}  `;
}

function capsHandler() {
  caps = !caps;
  if (caps) {
    reRenderKeyboard();
    this.classList.add('active');
  } else {
    reRenderKeyboard();
  }
}

function shiftHandler({ type }) {
  if (type === 'mousedown') {
    shift = true;
  } else if (type === 'mouseup') {
    shift = false;
  }
  if (type === 'keydown') {
    shift = true;
    if (alt) {
      lang = !lang;
      saveLang();
    }
  } else if (type === 'keyup') {
    shift = false;
  }
  reRenderKeyboard();
}

function altHandler({ type }) {
  if (type === 'keydown') {
    alt = true;
    if (shift) {
      lang = !lang;
      saveLang();
      this.classList.add('active');
    }
  } else alt = false;
}

function nothingHandler() {}

function handlerAdd(btn) {
  switch (btn.code) {
    case 'Delete':
      btn.addEventListener('click', deleteHandler);
      break;
    case 'Backspace':
      btn.addEventListener('click', backspaceHandler);
      break;
    case 'Enter':
      btn.addEventListener('click', enterHandler);
      break;
    case 'Tab':
      btn.addEventListener('click', tabHandler);
      break;
    case 'CapsLock':
      btn.addEventListener('click', capsHandler);
      break;
    case 'ShiftLeft':
      btn.addEventListener('mousedown', shiftHandler);
      btn.addEventListener('mouseup', shiftHandler);
      btn.mousedown = shiftHandler;
      btn.mouseup = shiftHandler;
      break;
    case 'ShiftRight':
      btn.addEventListener('mousedown', shiftHandler);
      btn.addEventListener('mouseup', shiftHandler);
      btn.mousedown = shiftHandler;
      btn.mouseup = shiftHandler;
      break;
    case 'AltLeft':
      btn.addEventListener('mousedown', altHandler);
      btn.addEventListener('mouseup', altHandler);
      btn.mousedown = altHandler;
      btn.mouseup = altHandler;
      break;
    case 'AltRight':
      btn.addEventListener('mousedown', altHandler);
      btn.addEventListener('mouseup', altHandler);
      btn.mousedown = altHandler;
      btn.mouseup = altHandler;
      break;
    case 'ControlLeft':
      btn.addEventListener('click', nothingHandler);
      break;
    case 'ControlRight':
      btn.addEventListener('click', nothingHandler);
      break;
    case 'MetaLeft':
      btn.addEventListener('click', nothingHandler);
      break;
    default:
      btn.addEventListener('click', btnClickHandler);
      break;
  }
}

function pressHandle(event) {
  event.preventDefault();
  const { type, code } = event;
  if (!CODES.includes(code)) return;
  const key = document.getElementById(code);
  switch (type) {
    case 'keydown':
      if (mousePressStatesArray.includes(code)) {
        key.mousedown(event);
      } else {
        key.click();
      }
      break;
    case 'keyup':
      if (mousePressStatesArray.includes(code)) {
        key.mouseup(event);
      }
      break;
    default:
      break;
  }
  if (type === 'keydown') {
    key.classList.add('active');
  } else if (type === 'keyup') {
    key.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', app);
document.addEventListener('keydown', pressHandle);
document.addEventListener('keyup', pressHandle);

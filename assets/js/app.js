/* eslint-disable no-use-before-define */
import data from './_constants';

const {
  KEYS, CODES, mousePressStatesArray, defAlphabet, altAlphabet,
} = data;

let caps = false;
let shift = false;
let alt = false;
let lang = JSON.parse(localStorage.getItem('lang')) || false;

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
    }
  } else alt = false;
}

function nothingHandler() {}

function handlerAdd(btn) {
  switch (btn.id) {
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
      break;
    case 'ShiftRight':
      btn.addEventListener('mousedown', shiftHandler);
      btn.addEventListener('mouseup', shiftHandler);
      break;
    case 'AltLeft':
      btn.addEventListener('mousedown', altHandler);
      btn.addEventListener('mouseup', altHandler);
      break;
    case 'AltRight':
      btn.addEventListener('mousedown', altHandler);
      btn.addEventListener('mouseup', altHandler);
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
        key.classList.add('active');
      } else {
        key.click();
        key.classList.add('active');
      }
      break;
    case 'keyup':
      if (mousePressStatesArray.includes(code)) {
        key.mouseup(event);
      }
      key.classList.remove('active');
      break;
    default:
      break;
  }
}

function addBtnFlexGrow(code) {
  if (code.includes('Shift') || code.includes('Enter')) {
    return '5';
  } if (code.includes('Space')) {
    return '20';
  }
  return 2;
}

const inner = (defVal, shiftVal, altVal, altShiftVal) => {
  if (lang) {
    if (shift) {
      return altShiftVal;
    } if (caps) {
      if (altAlphabet.includes(altVal)) return altShiftVal;
      return altVal;
    }
    return altVal;
  } if (!lang) {
    if (shift) {
      return shiftVal;
    } if (caps) {
      if (defAlphabet.includes(defVal)) return shiftVal;
    }
  }
  return defVal;
};

const btnCreate = ({
  code, defVal, shiftVal, altVal, altShiftVal,
}) => {
  const btn = document.createElement('div');
  btn.classList.add('btn');
  btn.id = code;
  btn.innerHTML = inner(defVal, shiftVal, altVal, altShiftVal);
  btn.style.flexGrow = addBtnFlexGrow(code);
  if (mousePressStatesArray.includes(code)) {
    if (code.includes('Shift')) {
      btn.mousedown = shiftHandler;
      btn.mouseup = shiftHandler;
    } else if (code.includes('Alt')) {
      btn.mousedown = altHandler;
      btn.mouseup = altHandler;
    }
  }
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

document.addEventListener('DOMContentLoaded', app);
document.addEventListener('keydown', pressHandle);
document.addEventListener('keyup', pressHandle);

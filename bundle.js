/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/_constants.js":
/*!*********************************!*\
  !*** ./assets/js/_constants.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar data = {\n  KEYS: [[{\n    code: 'Backquote',\n    defVal: '`',\n    shiftVal: '~',\n    altVal: 'ё',\n    altShiftVal: 'Ё'\n  }, {\n    code: 'Digit1',\n    defVal: '1',\n    shiftVal: '!',\n    altVal: '1',\n    altShiftVal: '!'\n  }, {\n    code: 'Digit2',\n    defVal: '2',\n    shiftVal: '@',\n    altVal: '2',\n    altShiftVal: '\"'\n  }, {\n    code: 'Digit3',\n    defVal: '3',\n    shiftVal: '#',\n    altVal: '3',\n    altShiftVal: '№'\n  }, {\n    code: 'Digit4',\n    defVal: '4',\n    shiftVal: '$',\n    altVal: '4',\n    altShiftVal: ';'\n  }, {\n    code: 'Digit5',\n    defVal: '5',\n    shiftVal: '%',\n    altVal: '5',\n    altShiftVal: '%'\n  }, {\n    code: 'Digit6',\n    defVal: '6',\n    shiftVal: '^',\n    altVal: '6',\n    altShiftVal: ':'\n  }, {\n    code: 'Digit7',\n    defVal: '7',\n    shiftVal: '&',\n    altVal: '7',\n    altShiftVal: '?'\n  }, {\n    code: 'Digit8',\n    defVal: '8',\n    shiftVal: '*',\n    altVal: '8',\n    altShiftVal: '*'\n  }, {\n    code: 'Digit9',\n    defVal: '9',\n    shiftVal: '(',\n    altVal: '9',\n    altShiftVal: '('\n  }, {\n    code: 'Digit0',\n    defVal: '0',\n    shiftVal: ')',\n    altVal: '0',\n    altShiftVal: ')'\n  }, {\n    code: 'Minus',\n    defVal: '-',\n    shiftVal: '_',\n    altVal: '-',\n    altShiftVal: '_'\n  }, {\n    code: 'Equal',\n    defVal: '=',\n    shiftVal: '+',\n    altVal: '=',\n    altShiftVal: '+'\n  }, {\n    code: 'Backspace',\n    defVal: '&lArr;',\n    shiftVal: '&lArr;',\n    altVal: '&lArr;',\n    altShiftVal: '&lArr;'\n  }], [{\n    code: 'Tab',\n    defVal: 'Tab',\n    shiftVal: 'Tab',\n    altVal: 'Tab',\n    altShiftVal: 'Tab'\n  }, {\n    code: 'KeyQ',\n    defVal: 'q',\n    shiftVal: 'Q',\n    altVal: 'й',\n    altShiftVal: 'Й'\n  }, {\n    code: 'KeyW',\n    defVal: 'w',\n    shiftVal: 'W',\n    altVal: 'ц',\n    altShiftVal: 'Ц'\n  }, {\n    code: 'KeyE',\n    defVal: 'e',\n    shiftVal: 'E',\n    altVal: 'у',\n    altShiftVal: 'У'\n  }, {\n    code: 'KeyR',\n    defVal: 'r',\n    shiftVal: 'R',\n    altVal: 'к',\n    altShiftVal: 'К'\n  }, {\n    code: 'KeyT',\n    defVal: 't',\n    shiftVal: 'T',\n    altVal: 'е',\n    altShiftVal: 'Е'\n  }, {\n    code: 'KeyY',\n    defVal: 'y',\n    shiftVal: 'Y',\n    altVal: 'н',\n    altShiftVal: 'Н'\n  }, {\n    code: 'KeyU',\n    defVal: 'u',\n    shiftVal: 'U',\n    altVal: 'г',\n    altShiftVal: 'Г'\n  }, {\n    code: 'KeyI',\n    defVal: 'i',\n    shiftVal: 'I',\n    altVal: 'ш',\n    altShiftVal: 'Ш'\n  }, {\n    code: 'KeyO',\n    defVal: 'o',\n    shiftVal: 'O',\n    altVal: 'щ',\n    altShiftVal: 'Щ'\n  }, {\n    code: 'KeyP',\n    defVal: 'p',\n    shiftVal: 'P',\n    altVal: 'з',\n    altShiftVal: 'З'\n  }, {\n    code: 'BracketLeft',\n    defVal: '[',\n    shiftVal: '{',\n    altVal: 'х',\n    altShiftVal: 'Х'\n  }, {\n    code: 'BracketRight',\n    defVal: ']',\n    shiftVal: '}',\n    altVal: 'ъ',\n    altShiftVal: 'Ъ'\n  }, {\n    code: 'Backslash',\n    defVal: '\\\\',\n    shiftVal: '|',\n    altVal: '\\\\',\n    altShiftVal: '/'\n  }, {\n    code: 'Delete',\n    defVal: 'Del',\n    shiftVal: 'Del',\n    altVal: 'Del',\n    altShiftVal: 'Del'\n  }], [{\n    code: 'CapsLock',\n    defVal: 'Caps',\n    shiftVal: 'Caps',\n    altVal: 'Caps',\n    altShiftVal: 'Caps'\n  }, {\n    code: 'KeyA',\n    defVal: 'a',\n    shiftVal: 'A',\n    altVal: 'ф',\n    altShiftVal: 'Ф'\n  }, {\n    code: 'KeyS',\n    defVal: 's',\n    shiftVal: 'S',\n    altVal: 'ы',\n    altShiftVal: 'Ы'\n  }, {\n    code: 'KeyD',\n    defVal: 'd',\n    shiftVal: 'D',\n    altVal: 'в',\n    altShiftVal: 'В'\n  }, {\n    code: 'KeyF',\n    defVal: 'f',\n    shiftVal: 'F',\n    altVal: 'а',\n    altShiftVal: 'А'\n  }, {\n    code: 'KeyG',\n    defVal: 'g',\n    shiftVal: 'G',\n    altVal: 'п',\n    altShiftVal: 'П'\n  }, {\n    code: 'KeyH',\n    defVal: 'h',\n    shiftVal: 'H',\n    altVal: 'р',\n    altShiftVal: 'Р'\n  }, {\n    code: 'KeyJ',\n    defVal: 'j',\n    shiftVal: 'J',\n    altVal: 'о',\n    altShiftVal: 'О'\n  }, {\n    code: 'KeyK',\n    defVal: 'k',\n    shiftVal: 'K',\n    altVal: 'л',\n    altShiftVal: 'Л'\n  }, {\n    code: 'KeyL',\n    defVal: 'l',\n    shiftVal: 'L',\n    altVal: 'д',\n    altShiftVal: 'Д'\n  }, {\n    code: 'Semicolon',\n    defVal: ';',\n    shiftVal: ':',\n    altVal: 'ж',\n    altShiftVal: 'Ж'\n  }, {\n    code: 'Quote',\n    defVal: '\\'',\n    shiftVal: '\"',\n    altVal: 'э',\n    altShiftVal: 'Э'\n  }, {\n    code: 'Enter',\n    defVal: 'Enter',\n    shiftVal: 'Enter',\n    altVal: 'Enter',\n    altShiftVal: 'Enter'\n  }], [{\n    code: 'ShiftLeft',\n    defVal: 'Shift',\n    shiftVal: 'Shift',\n    altVal: 'Shift',\n    altShiftVal: 'Shift'\n  }, {\n    code: 'KeyZ',\n    defVal: 'z',\n    shiftVal: 'Z',\n    altVal: 'я',\n    altShiftVal: 'Я'\n  }, {\n    code: 'KeyX',\n    defVal: 'x',\n    shiftVal: 'X',\n    altVal: 'ч',\n    altShiftVal: 'Ч'\n  }, {\n    code: 'KeyC',\n    defVal: 'c',\n    shiftVal: 'C',\n    altVal: 'с',\n    altShiftVal: 'С'\n  }, {\n    code: 'KeyV',\n    defVal: 'v',\n    shiftVal: 'V',\n    altVal: 'м',\n    altShiftVal: 'М'\n  }, {\n    code: 'KeyB',\n    defVal: 'b',\n    shiftVal: 'B',\n    altVal: 'и',\n    altShiftVal: 'И'\n  }, {\n    code: 'KeyN',\n    defVal: 'n',\n    shiftVal: 'N',\n    altVal: 'т',\n    altShiftVal: 'Т'\n  }, {\n    code: 'KeyM',\n    defVal: 'm',\n    shiftVal: 'M',\n    altVal: 'ь',\n    altShiftVal: 'Ь'\n  }, {\n    code: 'Comma',\n    defVal: ',',\n    shiftVal: '<',\n    altVal: 'б',\n    altShiftVal: 'Б'\n  }, {\n    code: 'Period',\n    defVal: '.',\n    shiftVal: '>',\n    altVal: 'ю',\n    altShiftVal: 'Ю'\n  }, {\n    code: 'Slash',\n    defVal: '/',\n    shiftVal: '?',\n    altVal: '.',\n    altShiftVal: ','\n  }, {\n    code: 'ShiftRight',\n    defVal: 'Shift',\n    shiftVal: 'Shift',\n    altVal: 'Shift',\n    altShiftVal: 'Shift'\n  }, {\n    code: 'ArrowUp',\n    defVal: '&#9650;',\n    shiftVal: '&#9650;',\n    altVal: '&#9650;',\n    altShiftVal: '&#9650;'\n  }], [{\n    code: 'ControlLeft',\n    defVal: 'Ctrl',\n    shiftVal: 'Ctrl',\n    altVal: 'Ctrl',\n    altShiftVal: 'Ctrl'\n  }, {\n    code: 'MetaLeft',\n    defVal: 'Win',\n    shiftVal: 'Win',\n    altVal: 'Win',\n    altShiftVal: 'Win'\n  }, {\n    code: 'AltLeft',\n    defVal: 'Alt',\n    shiftVal: 'Alt',\n    altVal: 'Alt',\n    altShiftVal: 'Alt'\n  }, {\n    code: 'Space',\n    defVal: ' ',\n    shiftVal: ' ',\n    altVal: ' ',\n    altShiftVal: ' '\n  }, {\n    code: 'AltRight',\n    defVal: 'Alt',\n    shiftVal: 'Alt',\n    altVal: 'Alt',\n    altShiftVal: 'Alt'\n  }, {\n    code: 'ControlRight',\n    defVal: 'Ctrl',\n    shiftVal: 'Ctrl',\n    altVal: 'Ctrl',\n    altShiftVal: 'Ctrl'\n  }, {\n    code: 'ArrowLeft',\n    defVal: '&#9668;',\n    shiftVal: '&#9668;',\n    altVal: '&#9668;',\n    altShiftVal: '&#9668;'\n  }, {\n    code: 'ArrowDown',\n    defVal: '&#9660;',\n    shiftVal: '&#9660;',\n    altVal: '&#9660;',\n    altShiftVal: '&#9660;'\n  }, {\n    code: 'ArrowRight',\n    defVal: '&#9658;',\n    shiftVal: '&#9658;',\n    altVal: '&#9658;',\n    altShiftVal: '&#9658;'\n  }]],\n  CODES: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],\n  mousePressStatesArray: ['ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight'],\n  defAlphabet: 'abcdefghijklmnopqrstuvwxyz',\n  altAlphabet: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./assets/js/_constants.js?");

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_constants */ \"./assets/js/_constants.js\");\n/* eslint-disable no-use-before-define */\n\nvar KEYS = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEYS,\n    CODES = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CODES,\n    mousePressStatesArray = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mousePressStatesArray,\n    defAlphabet = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defAlphabet,\n    altAlphabet = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].altAlphabet;\nvar caps = false;\nvar shift = false;\nvar shiftLeft = false;\nvar shiftRight = false;\nvar alt = false;\nvar lang = JSON.parse(localStorage.getItem('lang')) || false;\n\nvar saveLang = function saveLang() {\n  return localStorage.setItem('lang', lang);\n};\n\nvar reRenderKeyboard = function reRenderKeyboard() {\n  document.querySelector('#keyboard').remove();\n  document.querySelector('.wrapper').append(keyboardEl());\n};\n\nvar inner = function inner(defVal, shiftVal, altVal, altShiftVal) {\n  if (lang) {\n    if (shift) {\n      return altShiftVal;\n    }\n\n    if (caps) {\n      if (altAlphabet.includes(altVal)) return altShiftVal;\n      return altVal;\n    }\n\n    return altVal;\n  }\n\n  if (!lang) {\n    if (shift) {\n      return shiftVal;\n    }\n\n    if (caps) {\n      if (defAlphabet.includes(defVal)) return shiftVal;\n    }\n  }\n\n  return defVal;\n};\n\nvar capslockActive = function capslockActive(btn) {\n  if (btn.id === 'CapsLock') {\n    if (caps) {\n      btn.classList.add('active');\n    } else {\n      btn.classList.remove('active');\n    }\n  }\n};\n\nvar shiftActive = function shiftActive(btn) {\n  if (btn.id === 'ShiftLeft') {\n    if (shiftLeft) {\n      btn.classList.add('active');\n    } else {\n      btn.classList.remove('active');\n    }\n  } else if (btn.id === 'ShiftRight') {\n    if (shiftRight) {\n      btn.classList.add('active');\n    } else {\n      btn.classList.remove('active');\n    }\n  }\n};\n\nvar checkShift = function checkShift(code) {\n  if (code === 'ShiftRight') {\n    shiftRight = true;\n  } else {\n    shiftLeft = true;\n  }\n};\n\nvar shiftReset = function shiftReset() {\n  shift = false;\n  shiftRight = false;\n  shiftLeft = false;\n};\n\nfunction addBtnFlexGrow(code) {\n  if (code.includes('Shift') || code.includes('Enter')) {\n    return '5';\n  }\n\n  if (code.includes('Space')) {\n    return '20';\n  }\n\n  return 2;\n}\n\nfunction btnClickHandler(event) {\n  var area = document.querySelector('#textarea');\n  area.value += event.target.innerHTML;\n}\n\nfunction deleteHandler() {\n  var area = document.querySelector('#textarea');\n  area.value = '';\n}\n\nfunction backspaceHandler() {\n  var area = document.querySelector('#textarea');\n  var size = area.value.length;\n  area.value = area.value.slice(0, size - 1);\n}\n\nfunction enterHandler() {\n  var area = document.querySelector('#textarea');\n  area.value = \"\".concat(area.value, \"\\n\");\n}\n\nfunction tabHandler() {\n  var area = document.querySelector('#textarea');\n  area.value = \"\".concat(area.value, \"  \");\n}\n\nfunction capsHandler() {\n  caps = !caps;\n  reRenderKeyboard();\n}\n\nfunction shiftHandler(_ref) {\n  var type = _ref.type,\n      code = _ref.code;\n\n  if (type === 'mousedown') {\n    checkShift(code);\n    shift = true;\n  } else if (type === 'mouseup') {\n    shiftReset();\n  }\n\n  if (type === 'keydown') {\n    checkShift(code);\n    shift = true;\n\n    if (alt) {\n      lang = !lang;\n      saveLang();\n    }\n  } else if (type === 'keyup') {\n    shiftReset();\n  }\n\n  reRenderKeyboard();\n}\n\nfunction altHandler(_ref2) {\n  var type = _ref2.type;\n\n  if (type === 'keydown') {\n    alt = true;\n\n    if (shift) {\n      lang = !lang;\n      saveLang();\n    }\n  } else alt = false;\n}\n\nfunction nothingHandler() {}\n\nfunction handlerAdd(btn) {\n  switch (btn.id) {\n    case 'Delete':\n      btn.addEventListener('click', deleteHandler);\n      break;\n\n    case 'Backspace':\n      btn.addEventListener('click', backspaceHandler);\n      break;\n\n    case 'Enter':\n      btn.addEventListener('click', enterHandler);\n      break;\n\n    case 'Tab':\n      btn.addEventListener('click', tabHandler);\n      break;\n\n    case 'CapsLock':\n      btn.addEventListener('click', capsHandler);\n      break;\n\n    case 'ShiftLeft':\n      btn.addEventListener('mousedown', shiftHandler);\n      btn.addEventListener('mouseup', shiftHandler);\n      break;\n\n    case 'ShiftRight':\n      btn.addEventListener('mousedown', shiftHandler);\n      btn.addEventListener('mouseup', shiftHandler);\n      break;\n\n    case 'AltLeft':\n      btn.addEventListener('mousedown', altHandler);\n      btn.addEventListener('mouseup', altHandler);\n      break;\n\n    case 'AltRight':\n      btn.addEventListener('mousedown', altHandler);\n      btn.addEventListener('mouseup', altHandler);\n      break;\n\n    case 'ControlLeft':\n      btn.addEventListener('click', nothingHandler);\n      break;\n\n    case 'ControlRight':\n      btn.addEventListener('click', nothingHandler);\n      break;\n\n    case 'MetaLeft':\n      btn.addEventListener('click', nothingHandler);\n      break;\n\n    default:\n      btn.addEventListener('click', btnClickHandler);\n      break;\n  }\n}\n\nfunction pressHandle(event) {\n  event.preventDefault();\n  var type = event.type,\n      code = event.code;\n  if (!CODES.includes(code)) return;\n  var key = document.getElementById(code);\n\n  switch (type) {\n    case 'keydown':\n      if (mousePressStatesArray.includes(code)) {\n        key.mousedown(event);\n        key.classList.add('active');\n      } else {\n        key.click();\n        key.classList.add('active');\n      }\n\n      break;\n\n    case 'keyup':\n      if (mousePressStatesArray.includes(code)) {\n        key.mouseup(event);\n      }\n\n      key.classList.remove('active');\n      break;\n\n    default:\n      break;\n  }\n}\n\nvar btnCreate = function btnCreate(_ref3) {\n  var code = _ref3.code,\n      defVal = _ref3.defVal,\n      shiftVal = _ref3.shiftVal,\n      altVal = _ref3.altVal,\n      altShiftVal = _ref3.altShiftVal;\n  var btn = document.createElement('div');\n  btn.classList.add('btn');\n  btn.id = code;\n  btn.innerHTML = inner(defVal, shiftVal, altVal, altShiftVal);\n  btn.style.flexGrow = addBtnFlexGrow(code);\n\n  if (mousePressStatesArray.includes(code)) {\n    if (code.includes('Shift')) {\n      btn.mousedown = shiftHandler;\n      btn.mouseup = shiftHandler;\n    } else if (code.includes('Alt')) {\n      btn.mousedown = altHandler;\n      btn.mouseup = altHandler;\n    }\n  }\n\n  handlerAdd(btn);\n  capslockActive(btn);\n  shiftActive(btn);\n  return btn;\n};\n\nvar keyboardRow = function keyboardRow(arr) {\n  var row = document.createElement('div');\n  row.classList.add('keyboard--row');\n  arr.map(function (el) {\n    return row.append(btnCreate(el));\n  });\n  return row;\n};\n\nvar keyboardEl = function keyboardEl() {\n  var keyboard = document.createElement('div');\n  keyboard.classList.add('keyboard');\n  keyboard.id = 'keyboard';\n  KEYS.map(function (el) {\n    return keyboard.append(keyboardRow(el));\n  });\n  return keyboard;\n};\n\nvar outputArea = function outputArea() {\n  var area = document.createElement('textarea');\n  area.classList.add('textarea');\n  area.id = 'textarea';\n  area.style.width = '99%';\n  area.style.height = '200px';\n  area.style.fontSize = '1.5em';\n  return area;\n};\n\nvar wrapperEl = function wrapperEl() {\n  var wrapper = document.createElement('div');\n  wrapper.classList.add('wrapper');\n  wrapper.append(outputArea(), keyboardEl());\n  return wrapper;\n};\n\nvar app = function app() {\n  document.querySelector('#page').prepend(wrapperEl());\n};\n\ndocument.addEventListener('DOMContentLoaded', app);\ndocument.addEventListener('keydown', pressHandle);\ndocument.addEventListener('keyup', pressHandle);\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar form = document.querySelector('.form');\nvar input = document.querySelector('.form-input');\nvar isMyMessage = true;\nvar start_messages = [{\n  \"text\": \"Есть над чем задуматься: явные признаки победы институционализации и по сей день остаются уделом \" + \"либералов, которые жаждут быть смешаны с не уникальными данными до степени совершенной неузнаваемости, \" + \"из-за чего возрастает их статус бесполезности!\",\n  \"date\": \"12:34\",\n  \"sender_name\": \"Дженифер\",\n  \"isMyMessage\": false\n}, {\n  \"text\": \"Разнообразный и богатый опыт говорит нам, что высокотехнологичная концепция общественного уклада \" + \"обеспечивает широкому кругу (специалистов) участие в формировании как самодостаточных, так и внешне \" + \"зависимых концептуальных решений.\",\n  \"date\": \"12:35\",\n  \"sender_name\": \"Я\",\n  \"isMyMessage\": true\n}];\nvar chat = document.querySelector('.chat-flow');\nform.addEventListener('submit', handleSubmit.bind());\ndocument.addEventListener('DOMContentLoaded', getMessagesFromLocalStorage.bind());\nfunction getMessagesFromLocalStorage() {\n  var messages = localStorage.getItem('messages');\n  if (!messages) {\n    localStorage.setItem('messages', JSON.stringify({\n      'all': start_messages\n    }));\n    messages = localStorage.getItem('messages');\n  }\n  messages = JSON.parse(messages);\n  var _iterator = _createForOfIteratorHelper(messages.all),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var message = _step.value;\n      createMessageBlock(message, false);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction saveMessageToLocalStorage(message) {\n  var messages = localStorage.getItem('messages');\n  if (!messages) {\n    localStorage.setItem('messages', JSON.stringify({\n      'all': []\n    }));\n  }\n  messages = localStorage.getItem('messages');\n  messages = JSON.parse(messages);\n  messages.all.push(message);\n  localStorage.setItem('messages', JSON.stringify(messages));\n}\nfunction createMessageBlock(message) {\n  var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  // Bubble body\n  var bubble_body = document.createElement('div');\n  bubble_body.className = 'bubble-body';\n  var name = document.createElement('span');\n  name.className = 'name';\n  name.innerText = message.sender_name;\n  bubble_body.append(name);\n  var message_text = document.createElement('span');\n  message_text.className = 'message-text';\n  message_text.innerText = message.text;\n  bubble_body.append(message_text);\n\n  // Metadata\n  var metadata = document.createElement('div');\n  metadata.className = 'metadata';\n  var time = document.createElement('span');\n  time.className = 'time';\n  time.innerText = message.date;\n  metadata.append(time);\n  var status = document.createElement('div');\n  status.className = 'status';\n  status.innerHTML = '<span class=\"material-symbols-outlined\">done_all</span>';\n  metadata.append(status);\n  bubble_body.append(metadata);\n\n  // Bubble\n  var bubble = document.createElement('div');\n  bubble.className = 'outgoing-message';\n  bubble.append(bubble_body);\n\n  // Bubble tail\n  var bubble_tail = document.createElement('div');\n  bubble_tail.className = 'bubble-tail';\n  if (message.isMyMessage) {\n    bubble_tail.innerHTML = '<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6.93969 7.84853C3.41987 7.3457 0.654304 4.58013 0.151472 1.06031L0 0V8H8L6.93969 7.84853Z\" fill=\"#fadeff\"/></svg>';\n    bubble.append(bubble_tail);\n  } else {\n    bubble.className = 'incoming-message';\n    bubble_tail.innerHTML = '<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M1.06031 7.84853C4.58013 7.3457 7.3457 4.58013 7.84853 1.06031L8 0V8H0L1.06031 7.84853Z\" fill=\"#ffffff\"/></svg>';\n    bubble.prepend(bubble_tail);\n  }\n  chat.prepend(bubble);\n  if (save) {\n    saveMessageToLocalStorage(message);\n  }\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n  if (!input.value) return;\n  var sender = isMyMessage ? 'Я' : 'Дженифер';\n  var time = new Date();\n  var message = {\n    'text': input.value,\n    'date': \"\".concat(time.getHours() < 10 ? \"0\" : \"\").concat(time.getHours(), \":\").concat(time.getMinutes() < 10 ? \"0\" : \"\").concat(time.getMinutes()),\n    'sender_name': sender,\n    'isMyMessage': isMyMessage\n  };\n  createMessageBlock(message);\n  input.value = '';\n  isMyMessage = !isMyMessage;\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/index.css?");

/***/ })

/******/ });
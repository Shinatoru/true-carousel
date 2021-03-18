/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function carousel({
  parentSelector = '.true-carousel',
  currentIndex = 1,
  arrows = true,
  infinite = true
} = {}) {
  const parent = document.querySelector(parentSelector);
  const slides = parent.querySelectorAll('div');
  const lastIndex = slides.length - 1;

  function createArrows() {
    const leftArrow = document.createElement('button');
    const rightArrow = document.createElement('button');

    leftArrow.classList.add('arrow', 'left-arrow');
    rightArrow.classList.add('arrow', 'right-arrow');
    
    parent.prepend(leftArrow);
    parent.append(rightArrow);

    leftArrow.addEventListener('click', () => update('prev'));
    rightArrow.addEventListener('click', () => update('next'));
  }

  function addClasses() {
    
    slides[currentIndex].classList.add('true-carousel-current');

    if (currentIndex == 0) {
      if (infinite) {
        slides[lastIndex].classList.add('true-carousel-prev')
      }
      slides[currentIndex + 1].classList.add('true-carousel-next');

    } else if (currentIndex == lastIndex) {
        if (infinite) {
          slides[0].classList.add('true-carousel-next');
        }
        slides[currentIndex - 1].classList.add('true-carousel-prev');
    } else {
      slides[currentIndex - 1].classList.add('true-carousel-prev');
      slides[currentIndex + 1].classList.add('true-carousel-next');
    }
  }

  function removeClasses() {
    parent.querySelector('.true-carousel-current').classList.remove('true-carousel-current');
    parent.querySelector('.true-carousel-prev').classList.remove('true-carousel-prev');
    parent.querySelector('.true-carousel-next').classList.remove('true-carousel-next');
  }
  
  function update(method) {
    removeClasses();
    
    switch (method) {
      case 'prev':
        if (infinite) {
          currentIndex == 0 ? currentIndex = lastIndex : currentIndex--;
        } else {
          if (currentIndex != 0) { currentIndex--; }
        }
        break;
      case 'next':
        if (infinite) {
          currentIndex == lastIndex ? currentIndex = 0 : currentIndex++;
        } else {
          if (currentIndex != lastIndex) { currentIndex++; }
        }
        break;
    }

    addClasses();
  }

  slides.forEach(item => {

    item.addEventListener('click', e => {
      const target = e.currentTarget;

      if (target && target.classList.contains('prev')) {
        update('prev');
      }

      if (target && target.classList.contains('next')) {
        update('next');
      }
    });
  });

  addClasses();
  if (arrows) { createArrows(); }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ "./src/js/carousel.js");



window.addEventListener('DOMContentLoaded', () => {
  (0,_carousel__WEBPACK_IMPORTED_MODULE_1__.default)({
    infinite: false
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
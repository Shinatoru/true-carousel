function carousel({
  currentIndex = 1,
  arrows = true,
  infinite = true,
  swipe = true
} = {}) {
  const parent = document.querySelector('.true-carousel');
  parent.innerHTML = `<div class="true-carousel__inner">${parent.innerHTML}</div>`;
  const container = parent.querySelector('.true-carousel__inner');
  const slides = container.querySelectorAll('div');
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
    slides[currentIndex].classList.remove('true-carousel-current');
    if (infinite || currentIndex != 0) { container.querySelector('.true-carousel-prev').classList.remove('true-carousel-prev'); }
    if (infinite || currentIndex != lastIndex) { container.querySelector('.true-carousel-next').classList.remove('true-carousel-next'); }
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

  function enableSwipe() {
    let x0 = null;

    function unify(e) { return e.changedTouches ? e.changedTouches[0] : e; }

    function lock(e) {
      x0 = unify(e).clientX;
    }

    function move(e) {
      if (x0 || x0 === 0) {
        let dx = unify(e).clientX - x0
        let s = Math.sign(dx);

        if (Math.abs(dx) > 10) {
          if (s < 0) {
            update('next');
          } else if (s > 0) {
            update('prev');
          }
        }
      }
    }

    container.addEventListener('mousedown', lock, false);
    container.addEventListener('touchstart', lock, false);

    container.addEventListener('mouseup', move, false);
    container.addEventListener('touchend', move, false);
  }

  function init() {
    
    if (swipe) { enableSwipe(); }
    if (arrows) { createArrows(); }
    slides.forEach(slide => {
      slide.setAttribute('draggable', 'false');
      slide.classList.add('true-carousel-slide');
    });
    addClasses();
  }

  init();
}

export default carousel;
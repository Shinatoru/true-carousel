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
    slides[currentIndex].classList.remove('true-carousel-current');
    if (infinite || currentIndex != 0) { parent.querySelector('.true-carousel-prev').classList.remove('true-carousel-prev'); }
    if (infinite || currentIndex != lastIndex) { parent.querySelector('.true-carousel-next').classList.remove('true-carousel-next'); }
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

  addClasses();
  if (arrows) { createArrows(); }

}

export default carousel;
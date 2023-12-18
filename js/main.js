const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}

function showHint (e) {
    e.stopPropagation();
    this.parentNode.querySelector('.info-hint').classList.toggle('none');
}

document.addEventListener('click', closeHints);

function closeHints ()  {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
}

for (let hint of infoHints) {
    hint.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

//swiper slider

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 42,
    freeMode: true,
  
/*     breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
    },
 */
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
});
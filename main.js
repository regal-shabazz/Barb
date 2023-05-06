// Hamburger menu 
const openMenuBtn = document.querySelector('.fa-bars');
const closeMenuBtn = document.querySelector('.fa-xmark');
const menu = document.querySelector('.menu-list');
const header = document.querySelector('header')

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('dropped');
  openMenuBtn.style.display = 'none';
  closeMenuBtn.style.display = 'block';
  header.style.backgroundColor = '#1c1c1c'
})

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('dropped');
  openMenuBtn.style.display = 'block';
  closeMenuBtn.style.display = 'none';
  header.style.backgroundColor = 'transparent'
})



















const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const indicator = document.querySelectorAll(".indicator");
let current = 0;

function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    indicator[i].classList.remove("active");
  }
}

function startSlide() {
  reset();
  slides[0].style.display = "block";
  indicator[0].classList.toggle("active");
}

//show previous slide
function slideLeft() {
  reset();
  slides[current - 1].style.display = "block";
  indicator[current - 1].classList.toggle("active");
  current--;
}

//show next slide
function slideRight() {
  reset();

  if (current === slides.length - 1) {
    current = 0;
  } else {
    current++;
  }
  slides[current].style.display = "block";
  indicator[current].classList.toggle("active");
}

leftArrow.addEventListener("click", () => {
  if (current === 0) {
    current = slides.length;
  }

  slideLeft();
});

rightArrow.addEventListener("click", () => {
  if (current === slides.length - 1) {
    current = -1;
  }

  slideRight();
});



const sliderWrap = document.querySelector('.slider-wrap');
let touchStartX = 0;
let touchEndX = 0;

sliderWrap.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

sliderWrap.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;
  handleGesture();
});

function handleGesture() {
  if (touchEndX < touchStartX) {
    slideRight();
  }

  if (touchEndX > touchStartX) {
    if (current === 0) {
      current = slides.length;
    }

    slideLeft();
  }
}



const slideTimer = setInterval(slideRight, 7000);
startSlide();
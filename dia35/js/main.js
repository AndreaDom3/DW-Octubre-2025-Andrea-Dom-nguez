//NIVEL 1
//EJERCICIO 1.1
const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img'); 

let currentIndex = 0; 

const totalSlides = slides.length; 
const slideWidth = slides[0].clientWidth; 

function moveToSlide(index) {
   
    const offset = -index * slideWidth; 
    
    slider.style.transform = `translateX(${offset}px)`;
    
    currentIndex = index;
};

function nextSlide() {
    
    if (currentIndex < totalSlides - 1) {
        moveToSlide(currentIndex + 1);
    } else {
        
    }
};

function prevSlide() {

    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
       
    }
};

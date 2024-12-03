// Slideshow JavaScript
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

// Smooth Scroll JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for animation
document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    root: null,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(element => observer.observe(element));
});

// Function to handle image click for enlargement
document.querySelectorAll('.member-img').forEach(img => {
  img.addEventListener('click', function () {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImg = document.createElement('img');
    modalImg.src = this.src;
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    modal.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
});


/*-----------------------------*/


const galleryItems = document.querySelectorAll('.gallery-item');


function redirectToLink(selectElement) {
  const selectedValue = selectElement.value;
  if (selectedValue) {
      window.location.href = selectedValue; // Redirect to the selected link
  }
}



function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('active');
}
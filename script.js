window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var mobileMenu =  document.querySelector("#mobile-menu");
  var scrollPosition = window.pageYOffset;

  if (scrollPosition >= 500) {
    header.classList.add("sticky");
    mobileMenu.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    mobileMenu.classList.remove("sticky");
  }
});

function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('active');
}

let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");

showSlides();
function currentSlide(index) {
  slideIndex = index;
  showSlides();
}
function plusSlides(step) {
  if (step < 0) {
    slideIndex -= 2;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  showSlides();
}
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-toggle")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


function redirectToLink(selectElement) {
  const selectedValue = selectElement.value;
  if (selectedValue) {
      window.location.href = selectedValue; // Redirect to the selected link
  }
}




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
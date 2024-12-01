
const listItems = document.querySelectorAll('#List li');
const messageDiv = document.getElementById('message');


listItems.forEach(item => {
  item.addEventListener('click', function() {

    navigator.clipboard.writeText(this.textContent)
      .then(() => {

        messageDiv.textContent = 'تم نسخ: ' + this.textContent;
        messageDiv.style.display = 'block';
        setTimeout(() => {
          messageDiv.style.display = 'none'; 
        }, 3000);
      })
      .catch(err => {
        console.error('فشل النسخ: ', err);
      });
  });
});


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
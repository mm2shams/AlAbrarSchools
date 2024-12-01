const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');



const imageNamePattern = 'photo (%d).JPG'; 
const totalImages = 100; 

for (let i = 1; i <= totalImages; i++) {
    const img = new Image(); 
    img.src = `photos/${imageNamePattern.replace('%d', i)}`; // استبدال %d برقم الصورة
    img.alt = `صورة ${i}`; 

    img.onload = function() {
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        div.appendChild(img);
        gallery.appendChild(div);


        div.addEventListener('click', () => {
            modalImage.src = img.src;
            modal.style.display = 'block';
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-modal', 'true');
            modalImage.setAttribute('alt', img.alt);
            document.body.style.overflow = "hidden"; 
        });
    };

    img.onerror = function() {
        console.log(`الصورة ${img.src} غير موجودة`);
    };
}

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.removeAttribute('role');
    modal.removeAttribute('aria-modal');
    document.body.style.overflow = "auto"; 
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modal.removeAttribute('role');
        modal.removeAttribute('aria-modal');
        document.body.style.overflow = "auto"; 
    }
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







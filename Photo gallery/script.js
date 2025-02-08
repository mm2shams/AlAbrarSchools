const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Supported image extensions
const imageNames = []; // Array to hold image names

const imageDirectory = 'photos/'; // Directory containing images

function loadImages() {
    // Dynamically load all images from the directory
    // Here, you would typically fetch the image names from the server or a predefined list
    // For demonstration, we will assume a fixed number of images
    for (let i = -2; i <= 1000; i++) {
        imageExtensions.forEach(extension => {
            const imageName = `${imageDirectory}photo (${i})${extension}`;
            imageNames.push(imageName);
        });
    };
    
    // Load images from the imageNames array
    imageNames.forEach(imageName => {
        const img = new Image();
        img.src = imageName; // Load image dynamically
        img.alt = `صورة ${imageName}`; // Use the image name for alt text

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
    });
}

// Lazy loading implementation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImages();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(gallery);

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

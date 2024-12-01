// Fetch news data from an API or use a pre-defined data structure
const newsData = [
  {
    title: 'Breaking News',
    category: 'World',
    imageUrl: 'https://via.placeholder.com/400x300',
    summary: 'This is a breaking news article about an important event happening around the world.'
  },
  {
    title: 'Tech Innovations',
    category: 'Technology',
    imageUrl: 'https://via.placeholder.com/400x300',
    summary: 'Read about the latest technological advancements and innovations shaping the future.'
  },
  {
    title: 'Sports Highlights',
    category: 'Sports',
    imageUrl: 'https://via.placeholder.com/400x300',
    summary: 'Get the latest updates and highlights from the world of sports.'
  },

];

// Function to generate news articles
function generateNewsArticles() {
  const newsGrid = document.querySelector('.news-grid');

  newsData.forEach((article) => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    const img = document.createElement('img');
    img.src = article.imageUrl;
    img.alt = article.title;

    const h3 = document.createElement('h3');
    h3.textContent = article.title;

    const p = document.createElement('p');
    p.textContent = article.summary;

    const readMoreLink = document.createElement('a');
    readMoreLink.href = '#';
    readMoreLink.classList.add('read-more');
    readMoreLink.textContent = 'Read More';

    newsItem.appendChild(img);
    newsItem.appendChild(h3);
    newsItem.appendChild(p);
    newsItem.appendChild(readMoreLink);

    newsGrid.appendChild(newsItem);
  });
}

// Call the function to generate news articles
generateNewsArticles();



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
// Get the current year and display it in the span with id="currentyear"
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the document's last modified date and display it in the paragraph with id="lastModified"
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;

// Responsive Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('responsive');
});
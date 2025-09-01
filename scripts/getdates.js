
const year = new Date().getFullYear();


const yearElement = document.getElementById('currentyear');
if (yearElement) {
    yearElement.textContent = year;
}
const lastModified = document.lastModified;


const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}
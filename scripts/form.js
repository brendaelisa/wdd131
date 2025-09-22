const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductOptions() {
    const selectElement = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

function handleReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = Number(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    
    const counterElement = document.getElementById('reviewCount');
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
}

// Lógica para ejecutar la función correcta según la página
const currentPage = window.location.pathname.split('/').pop();

if (currentPage === 'form.html') {
    document.addEventListener('DOMContentLoaded', populateProductOptions);
} else if (currentPage === 'review.html') {
    document.addEventListener('DOMContentLoaded', handleReviewCounter);
}
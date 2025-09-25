
const bookData = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "Fantasy",
        summary: "Between life and death, there is a library containing an infinite number of books, each telling the story of another reality. Every life you could have lived is in there.",
        cover: "images/midnight-library.jpg",
        isFeatured: true // Usado para la página de inicio
    },
    {
        id: 2,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "Sci-Fi",
        summary: "An astronaut wakes up with amnesia and must save the Earth, with the help of an unlikely alien companion.",
        cover: "images/hail-mary.jpg",
        isFeatured: false
    },
    {
        id: 3,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Sci-Fi",
        summary: "Set in the distant future amidst a feudal interstellar empire where powerful noble houses control planetary fiefs.",
        cover: "images/dune.jpg",
        isFeatured: false
    },
    {
        id: 4,
        title: "Circe",
        author: "Madeline Miller",
        genre: "Mythology",
        summary: "A compelling retelling of the myth of Circe, the goddess of magic, as she navigates power, love, and loneliness.",
        cover: "images/circe.jpg",
        isFeatured: false
    },
    {
        id: 5,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classics",
        summary: "A portrait of the Jazz Age in America, depicting the decadence and excess of the Roaring Twenties.",
        cover: "images/gatsby.jpg",
        isFeatured: false
    }
    // Añade más libros aquí para cumplir con el requisito de contenido
];


function createBookCard(book) {
    // Usa un template literal (`) para construir la cadena HTML
    const html = `
        <div class="book-card">
            <img src="${book.cover}" alt="Cover of ${book.title}" loading="lazy">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p class="summary">${book.summary}</p>
        </div>
    `;
    return html;
}


function loadFeaturedBook() {
    const featuredBookContainer = document.getElementById('featured-book');
    
    // Usa un array method (find) para obtener el libro destacado
    const featuredBook = bookData.find(book => book.isFeatured === true); 

    // Conditional Branching: Verifica si encontró un libro
    if (featuredBook) {
        featuredBookContainer.innerHTML = createBookCard(featuredBook);
    } else {
        featuredBookContainer.innerHTML = '<p>No featured book this month, check back soon!</p>';
    }
}


function loadBookCatalog(books = bookData) {
    const catalogContainer = document.getElementById('book-catalog');
    
    // DOM Modification: Limpia el contenedor antes de añadir los libros
    if (catalogContainer) {
        catalogContainer.innerHTML = ''; 

        // Array Method (forEach): Itera sobre cada libro y añade su HTML
        books.forEach(book => {
            catalogContainer.innerHTML += createBookCard(book);
        });
    }
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredBooks = bookData.filter(book => 
                book.title.toLowerCase().includes(searchTerm) || 
                book.author.toLowerCase().includes(searchTerm)
            );
            loadBookCatalog(filteredBooks); // Recarga el catálogo con los libros filtrados
        });

        // Opcional: buscar al presionar Enter
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
}



function setupForm() {
    const form = document.getElementById('membership-form');
    const nameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('form-message');

    if (!form) return; // Salir si no estamos en la página del formulario

    // Cargar datos de localStorage al inicio
    // DOM Interaction: Modificar valor de un elemento
    nameInput.value = localStorage.getItem('formName') || '';
    emailInput.value = localStorage.getItem('formEmail') || '';
    messageInput.value = localStorage.getItem('formMessage') || '';


    // Escucha eventos de entrada para guardar datos en localStorage
    nameInput.addEventListener('input', () => localStorage.setItem('formName', nameInput.value));
    emailInput.addEventListener('input', () => localStorage.setItem('formEmail', emailInput.value));
    messageInput.addEventListener('input', () => localStorage.setItem('formMessage', messageInput.value));


    // Escuchar el evento de envío del formulario
    // DOM Interaction: Escuchar y reaccionar a un evento
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Detiene el envío por defecto

        // Conditional Branching: Validar si el campo de email tiene un @
        if (!emailInput.value.includes('@')) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.className = 'error';
            // Hacer el mensaje visible
            formMessage.classList.remove('hidden');
            return;
        }

        // Simula el envío exitoso
        formMessage.textContent = 'Thank you for joining! We will contact you soon.';
        formMessage.className = 'success';
        // Hacer el mensaje visible
        formMessage.classList.remove('hidden');
        form.reset();
        
        // Limpiar localStorage después del "envío"
        localStorage.removeItem('formName');
        localStorage.removeItem('formEmail');
        localStorage.removeItem('formMessage');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Conditional Branching: Determina qué script ejecutar basado en la página
    if (document.querySelector('.book-of-the-month')) {
        loadFeaturedBook();
    }
    
    if (document.querySelector('.book-list')) {
        loadBookCatalog();
        setupSearch(); // Inicializa la funcionalidad de búsqueda también
    }

    if (document.querySelector('.contact-form')) {
        setupForm();
    }
});
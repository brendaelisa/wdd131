// main.js

// ==== Datos de Libros ====
const bookData = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        summary: "A young girl grows up in the racially charged Depression-era South.",
        cover: "images/mockingbird.jpg",
        isFeatured: true
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        summary: "A chilling depiction of a totalitarian regime and mass surveillance.",
        cover: "images/1984.jpg",
        isFeatured: false
    },
    {
        id: 3,
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Adventure",
        summary: "Captain Ahab's obsession with the white whale leads to tragedy.",
        cover: "images/mobydick.jpg",
        isFeatured: false
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        summary: "Elizabeth Bennet navigates love and society in 19th-century England.",
        cover: "images/pride-prejudice.jpg",
        isFeatured: false
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        summary: "Bilbo Baggins embarks on an unexpected journey with dwarves.",
        cover: "images/hobbit.jpg",
        isFeatured: false
    },
    {
        id: 6,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        summary: "The mysterious Jay Gatsby pursues wealth and love in the Jazz Age.",
        cover: "images/gatsby.jpg",
        isFeatured: false
    },
    {
        id: 7,
        title: "Frankenstein",
        author: "Mary Shelley",
        genre: "Gothic",
        summary: "A scientist’s experiment creates a being who seeks acceptance.",
        cover: "images/frankenstein.jpg",
        isFeatured: false
    },
    {
        id: 8,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Classic",
        summary: "Holden Caulfield struggles with identity, alienation, and adulthood.",
        cover: "images/catcher.jpg",
        isFeatured: false
    },
    {
        id: 9,
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        summary: "A futuristic society thrives on control, technology, and conformity.",
        cover: "images/brave.jpg",
        isFeatured: false
    },
    {
        id: 10,
        title: "Little Women",
        author: "Louisa May Alcott",
        genre: "Family",
        summary: "The March sisters grow up facing love, hardship, and hope.",
        cover: "images/littlewomen.jpg",
        isFeatured: false
    }
];

// ==== Renderizar libros en books.html ====
function renderBooks(bookArray) {
    const catalog = document.getElementById("book-catalog");
    if (!catalog) return;

    if (bookArray.length === 0) {
        catalog.innerHTML = "<p>No books found.</p>";
        return;
    }

    catalog.innerHTML = bookArray.map(book => `
        <div class="book-card">
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p>${book.summary}</p>
        </div>
    `).join("");
}

// ==== Libro destacado en index.html ====
function renderFeaturedBook() {
    const featured = document.getElementById("featured-book");
    if (!featured) return;

    const book = bookData.find(b => b.isFeatured);
    if (book) {
        featured.innerHTML = `
            <div class="book-card">
                <img src="${book.cover}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p>${book.summary}</p>
            </div>
        `;
    } else {
        featured.innerHTML = "<p>No featured book selected.</p>";
    }
}

// ==== Buscador en books.html ====
function setupSearch() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    if (!searchInput || !searchButton) return;

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredBooks = bookData.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm) ||
            book.summary.toLowerCase().includes(searchTerm)
        );
        renderBooks(filteredBooks);
    });

    searchInput.addEventListener("keyup", e => {
        if (e.key === "Enter") {
            searchButton.click();
        }
    });
}

// ==== Formulario en contact.html ====
function setupForm() {
    const form = document.getElementById("membership-form");
    if (!form) return;

    const messageEl = document.getElementById("form-message");

    form.addEventListener("submit", e => {
        e.preventDefault();

        messageEl.textContent = "Thank you for joining! We’ll be in touch soon.";
        messageEl.classList.remove("hidden");
        form.reset();
    });
}

// ==== Inicializar según la página ====
document.addEventListener("DOMContentLoaded", () => {
    renderBooks(bookData);
    renderFeaturedBook();
    setupSearch();
    setupForm();
});

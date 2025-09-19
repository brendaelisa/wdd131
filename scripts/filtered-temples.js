// Arreglo de objetos de templo de Sudamérica
const temples = [
    {
      templeName: "Buenos Aires Argentina Temple",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17",
      area: 17355,
      imageUrl: "images/buenos_aires_argentina_temple.webp"
    },
    {
      templeName: "Mendoza Argentina Temple",
      location: "Mendoza, Argentina",
      dedicated: "2023, August, 27",
      area: 21000,
      imageUrl: "images/mendoza_argentina_temple_exterior.jpeg"
    },
    {
      templeName: "Córdoba Argentina Temple",
      location: "Córdoba, Argentina",
      dedicated: "2000, January, 9",
      area: 17164,
      imageUrl: "images/cordoba_argentina_temples_buildings.jpeg"
    },
    {
      templeName: "Salta Argentina Temple",
      location: "Salta, Argentina",
      dedicated: "2021, November, 14",
      area: 10475,
      imageUrl: "images/salta_argentina_temple_exterior.jpeg"
    },
    {
      templeName: "Montevideo Uruguay Temple",
      location: "Montevideo, Uruguay",
      dedicated: "2001, March, 18",
      area: 10700,
      imageUrl: "images/montevideo_uruguay_temple_lds.jpeg"
    },
    {
      templeName: "Santiago Chile Temple",
      location: "Santiago, Chile",
      dedicated: "1983, September, 15",
      area: 20853,
      imageUrl: "images/santiago_chile_lds_temple.jpeg"
    },
    {
      templeName: "Antofagasta Chile Temple",
      location: "Antofagasta, Chile",
      dedicated: "2024, May, 19",
      area: 23681,
      imageUrl: "images/antofagasta_chile_temple_exterior_rendering.webp"
    },
    {
      templeName: "Asunción Paraguay Temple",
      location: "Asunción, Paraguay",
      dedicated: "2002, May, 19",
      area: 10700,
      imageUrl: "images/asuncion_paraguay_temple.webp"
    },
    {
      templeName: "São Paulo Brazil Temple",
      location: "São Paulo, Brazil",
      dedicated: "1978, October, 30",
      area: 47600,
      imageUrl: "images/sao_paulo_brazil_temple_lds.jpeg"
    },
    {
      templeName: "Lima Perú Temple",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    }
];

// Función para crear las tarjetas de templo
const createTempleCards = (filteredTemples) => {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; 

    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `Image of ${temple.templeName}`;
        img.loading = "lazy"; 
        img.width = 400;
        img.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        gallery.appendChild(card);
    });
}

// Escuchadores de eventos para la navegación
document.addEventListener("DOMContentLoaded", () => {
    createTempleCards(temples); 
});

document.getElementById("home").addEventListener("click", () => {
    createTempleCards(temples);
    document.getElementById("current-filter").textContent = "South American Temples";
});

document.getElementById("old").addEventListener("click", () => {
    // Filtro para los templos más antiguos de Sudamérica (dedicados antes de 1980)
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1980);
    createTempleCards(oldTemples);
    document.getElementById("current-filter").textContent = "Old Temples";
});

document.getElementById("new").addEventListener("click", () => {
    // Filtro para los templos dedicados después de 2000
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    createTempleCards(newTemples);
    document.getElementById("current-filter").textContent = "New Temples";
});

document.getElementById("large").addEventListener("click", () => {
    // Filtro para los templos más grandes de Sudamérica (con más de 25,000 pies cuadrados)
    const largeTemples = temples.filter(temple => temple.area > 25000);
    createTempleCards(largeTemples);
    document.getElementById("current-filter").textContent = "Large Temples";
});

document.getElementById("small").addEventListener("click", () => {
    // Filtro para los templos más pequeños (con menos de 10,000 pies cuadrados)
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(smallTemples);
    document.getElementById("current-filter").textContent = "Small Temples";
});

// Lógica para el menú de hamburguesa
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('responsive');
});

// Actualización dinámica del footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
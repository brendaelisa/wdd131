// Obtener el año actual
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Obtener la fecha de la última modificación
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Valores estáticos para la temperatura y la velocidad del viento
const temp = 25; // en grados Celsius
const windSpeed = 15; // en km/h

// Función para calcular la sensación térmica
const calculateWindChill = (temp, windSpeed) => {
    // Verificar las condiciones para calcular la sensación térmica
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return 'N/A';
    }
};

// Asignar el resultado del cálculo al elemento HTML
const windChillElement = document.getElementById('wind-chill');
windChillElement.textContent = calculateWindChill(temp, windSpeed);
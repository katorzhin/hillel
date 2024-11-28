const apiKey = '27be72fc78cb2c2e3a5443d6f8aff09c';

const cities = [
    {name: 'Kharkiv', lat: 49.990003265735936, lon: 36.2305059331285},
    {name: 'Kyiv', lat: 50.450001, lon: 30.523333},
    {name: 'Odesa', lat: 46.482526, lon: 30.723309},
    {name: 'Lviv', lat: 49.839683, lon: 24.029717},
    {name: 'Dnipro', lat: 48.464717, lon: 35.046183}
];

const citySelect = document.getElementById('city-select');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const pressureElement = document.getElementById('pressure');
const windElement = document.getElementById('wind');
const dateTimeElement = document.getElementById('date-time');
const refreshBtn = document.getElementById('refresh-btn');

function populateCitySelect() {
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = `${city.lat},${city.lon}`;
        option.textContent = city.name;
        citySelect.appendChild(option);
    });
}

async function loadWeather(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();

        cityElement.textContent = `City: ${data.name}`;
        temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
        humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
        pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;
        windElement.textContent = `Wind: ${Math.round(data.wind.speed * 3.6)} km/h`;

        const now = new Date();
        dateTimeElement.textContent = now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    } catch (error) {
        console.error('Error loading data:', error);
        cityElement.textContent = 'Error loading data';
        temperatureElement.textContent = '';
        descriptionElement.textContent = `Error: ${error.message}`;
    }
}

function updateWeather() {
    const [lat, lon] = citySelect.value.split(',');
    loadWeather(lat, lon);
}

citySelect.addEventListener('change', updateWeather);
refreshBtn.addEventListener('click', updateWeather);

populateCitySelect();
const [defaultLat, defaultLon] = citySelect.value.split(',');
loadWeather(defaultLat, defaultLon);

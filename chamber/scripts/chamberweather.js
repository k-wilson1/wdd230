const currentTemp = document.querySelector("#temp-div");
const weatherIcon = document.querySelector("#weather-info");
const captionDesc = document.querySelector("#hourly-forecast");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.05&lon=-114.16&appid=8b6fb4ffd212493a899438d7792a8ad2&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data); 
        } else {
            throw Error(await response.text());
        } 
    }catch (error) {
            console.log(error);
        }
    }
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconCode = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
}
apiFetch();

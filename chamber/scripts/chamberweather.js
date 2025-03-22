const currentTemp = document.querySelector("#temp-div");
const weatherIcon = document.querySelector("#weather-info");
const captionDesc = document.querySelector("#hourly-forecast");
const laterTemp = document.querySelector("#forecast-temp");
const laterDesc = document.querySelector("#forecast-info");
const forecastContainer = document.querySelector(".forecast-day")
const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.05&lon=-114.16&appid=8b6fb4ffd212493a899438d7792a8ad2&units=imperial";
const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=43.05&lon=-114.16&appid=8b6fb4ffd212493a899438d7792a8ad2&units=imperial";
//async function apiFetch() {
//    try {
//    if (response.ok) {
//            const response = await fetch(url);
//            const data = await response.json();
//            console.log(data);
//           displayResults(data); 
//        } else {
//            throw Error(await response.text());
//        } 
//    }catch (error) {
//            console.log(error);
//        }
//    }
async function apiFetch() {
    try {
        const response = await fetch(forecast);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); 
        } else {
            throw Error(await response.text());
        } 
    }catch (error) {
            console.log(error);
        }
    }
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;F`;
    const iconCode = data.list[0].weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    
    const desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

    for (let i =0; i < 3; i++){
        const dayData = data.list[i * 8];
        const dayTemp = Math.round(dayData.main.temp);
        const dayDesc = dayData.weather[0].description;

        const forecastDate = dayData.dt_txt.split(' ')[0];
        
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('forecast-day');
        
        const dayHeading = document.createElement('h3');
        dayHeading.textContent = forecastDate;
        dayDiv.appendChild(dayHeading);
        
        const tempPara = document.createElement('p');
        tempPara.innerHTML = `${dayTemp}&deg;F`;
        dayDiv.appendChild(tempPara);

        const descPara = document.createElement('p');
        descPara.textContent = dayDesc.charAt(0).toUpperCase() + dayDesc.slice(1);
        dayDiv.appendChild(descPara);

        forecastContainer.appendChild(dayDiv);
    }

}

apiFetch();

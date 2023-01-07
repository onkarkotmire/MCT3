const search_button = document.getElementById("search_button");
const search_input = document.getElementById("search_input");
const temperature = document.getElementById("temperature");
const season = document.getElementById("season");
const windSpeed = document.getElementById("wind_speed");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const city_name = document.getElementById("city_name");
const btn = document.getElementById("btn");
const search = document.getElementById("search")
const first_page = document.getElementsByClassName("first_page")[0];
const second_page = document.getElementsByClassName("second_page")[0];


init();
function init(){
    search_button.addEventListener("click", getWeatherDetails)
}

async function getWeatherDetails(){
    
    let location = search_input.value;

    if(location === ""){
        alert("Please Enter the City Name")
        first_page.style.display = "flex"
        second_page.style.display = "none";
    }

    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e135a33c7a53bcf16ade6978eb700f13`);
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    const weather_icon = jsonData.weather[0].icon;
    const temperature_value1 = jsonData.main.temp;
    const temperature_value = (temperature_value1 - 273.15).toFixed(0);
    const cloud_description = jsonData.weather[0].description;
    const wind_speed = jsonData.wind.speed;
    const humidity_value = jsonData.main.humidity;
    const pressure_value = jsonData.main.pressure;


    weather_image.setAttribute("src", `http://openweathermap.org/img/wn/${weather_icon}@2x.png`)
    temperature.innerHTML = `${temperature_value}&deg;c`
    season.innerText = cloud_description;
    windSpeed.innerHTML = wind_speed + `<span class="unit">km</span>`;
    humidity.innerHTML = humidity_value + `<span class="unit">%</span>`;
    pressure.innerHTML = pressure_value + `<span class="unit">hpa</span>`;
    city_name.innerText = location.toUpperCase();

    first_page.style.display = "none"
    second_page.style.display = "flex";
   

}
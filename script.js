const apiKey = "b30a772e64682e4691ebf4225944254c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

    
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".weather-icon").src = `images/${data.weather[0].main.toLowerCase()}.png`;
    }

    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

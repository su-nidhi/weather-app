

const apikey = 'e649c4457621acdb486927d458cd5a43';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const search = document.querySelector(".searchbar input");
const button = document.querySelector(".icon");
const img = document.querySelector(".weatherr-icon");

async function weathercheck(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `<sup> ℃ </sup>`;
    document.querySelector(".humidty").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km";
    document.querySelector(".sky").innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clouds") {
        img.src = "/weather/cloud.png";
    } else if (data.weather[0].main == "Clear") {
        img.src = "/weather/sun.png";
    } else if (data.weather[0].main == "Rain") {
        img.src = "/weather/rainy.png";
    } else if (data.weather[0].main == "Drizzle") {
        img.src = "/weather/rainy.png";
    }
}
button.addEventListener("click", () => {
    weathercheck(search.value);
    search.value="";
}

)

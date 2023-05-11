const apiKey = '728b0ee6df5687559812bd3169ad77b7';
const searchButton = document.querySelector("button");
const searchInput = document.querySelector("input[type='text']");
const locationElement = document.querySelector(".location");
const weatherElement = document.querySelector(".weather");
const temperatureElement = document.querySelector(".temperature");
const iconElement = document.querySelector(".icon");

function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const location = `${data.name}, ${data.sys.country}`;
      const weather = data.weather[0].description;
      const temperature = `${Math.round(data.main.temp)}&deg;C`;
      const icon = " "
    })
  }

  searchButton.addEventListener('click', getWeather);
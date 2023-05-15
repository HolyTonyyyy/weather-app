const apiKey = '214a8e0415d46f8a6655a634091e446c';
const searchButton = document.querySelector("button");
const searchInput = document.querySelector("input[type='text']");
const locationElement = document.querySelector(".location");
const weatherElement = document.querySelector(".weather");
const temperatureElement = document.querySelector(".temperature");
const iconElement = document.querySelector(".icon");
const clearElement = document.querySelector(".clear")

// to get the weather 
function getHistory() {
  document.querySelector(".history").innerHTML =""
  var searchHistory = JSON.parse(localStorage.getItem("Search-History"))
  if (searchHistory){
  for (i = 0; i < searchHistory.length; i++) {
    var li = document.createElement("li")
    var button = document.createElement("button")
    document.querySelector(".history").appendChild(li)
    li.appendChild(button)
    button.textContent = searchHistory[i]
    button.addEventListener('click', function (){
      searchInput.value = this.textContent
    })
  }
}
}
// unable to get weather because of error
function getWeather(city) {
  city = searchInput.value
  var searchHistory = JSON.parse(localStorage.getItem("Search-History")) || [] 
  searchHistory.push(city)
  getHistory()
  localStorage.setItem("Search-History",JSON.stringify(searchHistory))
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      temperatureElement.innerHTML = data.main.temp
      const location = `${data.name}, ${data.sys.country}`;
      const weather = data.weather[0].description;
      const temperature = `${Math.round(data.main.temp)}&deg;C`;
      const icon = " "
    })
  }

  function clearHistory() {
    localStorage.removeItem("Search-History")
    getHistory()
  }
  clearElement.addEventListener('click', clearHistory);
  searchButton.addEventListener('click', getWeather);
  getHistory();
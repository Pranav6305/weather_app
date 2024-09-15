const url = "https://weather-api138.p.rapidapi.com/weather?city_name=";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "310998e5c1msh15c691d0c71fedfp1d18acjsnc53c740fb1cb",
    "x-rapidapi-host": "weather-api138.p.rapidapi.com",
  },
};

// select HTML elements
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const temp = document.getElementById("temp");
const temp_max = document.getElementById("temp_max");
const pressure = document.getElementById("pressure");
const temp_min = document.getElementById("temp_min");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const wind_deg = document.getElementById("wind_deg");
const wind_speed = document.getElementById("wind_speed");

const getWeather = (city) => {
  // fetching data from API
  cityName.innerHTML = city;
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // Access the nested properties correctly
      feels_like.innerHTML =
        (response.main.feels_like - 273.15).toFixed(2) + " °C" || "-";
      humidity.innerHTML = response.main.humidity || "-";
      temp.innerHTML = (response.main.temp - 273.15).toFixed(2) || "-";
      temp_max.innerHTML =
        (response.main.temp_max - 273.15).toFixed(2) + " °C" || "-";
      pressure.innerHTML = response.main.pressure + " hpa" || "-";
      temp_min.innerHTML =
        (response.main.temp_min - 273.15).toFixed(2) + " °C" || "-";
      sunrise.innerHTML =
        new Date(response.sys.sunrise * 1000).toLocaleTimeString() || "-";
      sunset.innerHTML =
        new Date(response.sys.sunset * 1000).toLocaleTimeString() || "-";
      wind_deg.innerHTML = response.wind.deg + "Km/hr" || "-";
      wind_speed.innerHTML = response.wind.speed || "-";
      //   country.innerHTML = response.sys.country || "-";
    })
    .catch((err) => console.error("Error fetching data:", err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault(); //prevents auto reload of web page
  getWeather(city.value);
});

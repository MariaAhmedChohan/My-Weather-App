
var typed = new Typed(".multiple-text",{
  strings: ["My weather App"],
  typeSpeed: 100,
  backDelay: 1000,
  backSpeed: 100,
  loop: false

  
})

async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const weatherDiv = document.getElementById("weatherInfo");
  if (!location) return;

  weatherDiv.innerHTML = "Loading...";

  try {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=8a97c2d4e3ce4b37971133108250804&q=${location}&aqi=yes`);
    const data = await res.json();

    if (data.error) {
      weatherDiv.innerHTML = `<p style='color: red;'>${data.error.message}</p>`;
    } else {
      weatherDiv.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="weather icon" />
      `;
    }
  } catch (error) {
    weatherDiv.innerHTML = `<p style='color: red;'>Failed to fetch weather data</p>`;
    console.error(error);
  }
}



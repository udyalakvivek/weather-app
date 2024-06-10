function updateDateTime() {
  let date = document.getElementById("spantime");
  let now = new Date();
  date.innerHTML = now.toLocaleString();
  date.innerHTML = now;
  date.style.color = "red";
}

setInterval(updateDateTime, 1000);


const apiKey = "aac4414c65f4b6bd916379ed53321a4a";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather`;

// Get the user's current location
navigator.geolocation.getCurrentPosition(position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Create the API request URL
  const url = `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  // Fetch the data from the API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Do something with the data
      console.log(data);
      const locationName = data.name;
      // console.log("location name is =", locationName)
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      // Update the UI with the data
      document.getElementById("current-Location").innerHTML = `Current Loaction : ${locationName} ,${data.sys.country}`;
      document.getElementById("temperature").innerHTML = `Temperature: ${temperature}°C`;
      document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
      document.getElementById("visibility").innerHTML = `visibility: ${data.visibility}%`;
      document.getElementById("wind-speed").innerHTML = `Wind Speed: ${windSpeed} km/h`;
    })
    .catch(error => console.error(error));
});

let modebtn = document.querySelector('#mode')
let Currentmode = "light"
modebtn.addEventListener('click', () => {
  console.log("You are trying to change ");
  if (Currentmode == "light") {
    Currentmode = "Dark";
    document.body.style.backgroundColor = 'black'
    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector('body').style.color = "white"
    document.querySelector('.container-fluid').style.backgroundColor = "black"
    document.querySelector('.navbar-brand').style.color = "white"
  }
  else {
    Currentmode = "light"
    document.querySelector('body').style.backgroundColor = "white"
    document.querySelector('body').style.color = "black"
    document.querySelector('.container-fluid').style.backgroundColor = "white"
    document.querySelector('.navbar-brand').style.color = "black"
  }
  console.log(Currentmode);
});

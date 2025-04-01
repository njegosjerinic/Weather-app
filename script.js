const apiKey = "407dd7e26771ac041e3cd4d4a00ea296";  // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById("weather").textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error("Error:", error);
            alert("City not found. Please try again.");
        });
}

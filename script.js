async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "a8646d11470f77f7b170eb4944be07e2"; // Remplacez par votre clé API OpenWeather
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Température : ${data.main.temp}°C</p>
        <p>Météo : ${data.weather[0].description}</p>
        <p>Humidité : ${data.main.humidity}%</p>
      `;
      document.getElementById("weatherResult").innerHTML = weather;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>Ville non trouvée !</p>`;
    }
  } catch (error) {
    console.error("Erreur:", error);
    document.getElementById("weatherResult").innerHTML = `<p>Une erreur s'est produite.</p>`;
  }
}
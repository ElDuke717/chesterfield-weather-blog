// WeatherPage.js
import React, { useState, useEffect } from "react";

const MAC_ADDRESS = process.env.REACT_APP_MAC_ADDRESS;
const AW_API_KEY = process.env.REACT_APP_AW_API_KEY;
const APP_KEY = process.env.REACT_APP_APP_KEY;

const WeatherPage = () => {
  // State for weather and sun data
  const [weatherData, setWeatherData] = useState(null);
  const [sunData, setSunData] = useState(null);

  useEffect(() => {
    // Fetches the weather data
    const getWeatherStationData = async () => {
      try {
        const response = await fetch(
          `https://api.ambientweather.net/v1/devices/${MAC_ADDRESS}?apiKey=${AW_API_KEY}&applicationKey=${APP_KEY}`
        );
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.status} - ${response.statusText}`
          );
        }
        const data = await response.json();
        // get the first element of the response array - this is the most recent data
        const datapoint = data[0];
        setWeatherData(datapoint);
        getSunData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetches the sun data
    const getSunData = async () => {
      try {
        const response = await fetch(
          `https://api.sunrise-sunset.org/json?lat=37.3856&lng=-77.6971&date=today`
        );
        const data = await response.json();
        setSunData(data);
      } catch (error) {
        console.error("Error fetching sun data:", error);
      }
    };

    // Load the data initially
    getWeatherStationData();

    // Set interval to fetch data every 5 minutes
    const intervalId = setInterval(() => {
      getWeatherStationData();
    }, 300000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Other helper functions (degreesToCardinal, convertUTCToLocal, getNYCurrentOffset) remain the same.
  function degreesToCardinal(degrees) {
    const cardinalDirections = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.round((degrees % 360) / 22.5);
    return cardinalDirections[index];
  }

  function convertUTCToLocal(utcTimeStr, offset) {
    // Extract hours and minutes from the UTC time string
    const [hourStr, minuteStr] = utcTimeStr.split(":");
    let hour = parseInt(hourStr, 10);
    let minute = parseInt(minuteStr, 10);

    // Calculate local time by adding the timezone offset
    hour += offset;

    // Handle overflows and underflows
    if (hour >= 24) {
      hour -= 24;
    } else if (hour < 0) {
      hour += 24;
    }

    // Return the local time as a string
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  }

  // Calculate sunrise and sunset in local time if sunData is available
  const sunriseLocal = sunData
    ? convertUTCToLocal(
        sunData.results.sunrise,
        new Date().getTimezoneOffset() / -60
      )
    : "";
  const sunsetLocal = sunData
    ? convertUTCToLocal(
        sunData.results.sunset,
        new Date().getTimezoneOffset() / -60
      )
    : "";

  return (
    <div>
      {weatherData && (
        <div className="weather-data">
          <h1 className="section-heading">Station Weather Data</h1>
          <p>
            <strong>Time of Measurement:</strong>{" "}
            <span className="data-value">
              {new Date(weatherData.date).toLocaleDateString("en-US", {
                timeZone: "America/New_York",
              })}
              ,{" "}
              {new Date(weatherData.date).toLocaleTimeString("en-US", {
                timeZone: "America/New_York",
              })}
            </span>
          </p>

          <h2 className="section-heading">Temperature</h2>
          <p>
            <strong>Outdoor:</strong>{" "}
            <span className="data-value">
              {weatherData.tempf}°F /{" "}
              {Math.round((weatherData.tempf - 32) * 0.5556)}°C
            </span>
          </p>
          <p>
            <strong>Feels Like (Outdoor):</strong>{" "}
            <span className="data-value">{weatherData.feelsLike}°F</span>
          </p>
          <p>
            <strong>Feels Like (Indoor):</strong>{" "}
            <span className="data-value">{weatherData.feelsLikein}°F</span>
          </p>

          <h2 className="section-heading">Humidity</h2>
          <p>
            <strong>Outdoor:</strong>{" "}
            <span className="data-value">{weatherData.humidity}%</span>
          </p>
          <p>
            <strong>Indoor:</strong>{" "}
            <span className="data-value">{weatherData.humidityin}%</span>
          </p>

          <h2 className="section-heading">Wind</h2>
          <p>
            <strong>Direction:</strong>{" "}
            <span className="data-value">
              {weatherData.winddir}° / {degreesToCardinal(weatherData.winddir)}
            </span>
          </p>
          <p>
            <strong>Speed:</strong>{" "}
            <span className="data-value">{weatherData.windspeedmph} mph</span>
          </p>
          <p>
            <strong>Max Daily Gust:</strong>{" "}
            <span className="data-value">{weatherData.maxdailygust} mph</span>
          </p>

          <h2 className="section-heading">Rain</h2>
          <p>
            <strong>Hourly:</strong>{" "}
            <span className="data-value">{weatherData.hourlyrainin} in</span>
          </p>
          <p>
            <strong>Daily:</strong>{" "}
            <span className="data-value">{weatherData.dailyrainin} in</span>
          </p>
          <p>
            <strong>Weekly:</strong>{" "}
            <span className="data-value">{weatherData.weeklyrainin} in</span>
          </p>
          <p>
            <strong>Monthly Rainfall:</strong>{" "}
            <span className="data-value">{weatherData.monthlyrainin} in</span>
          </p>
          <p>
            <strong>Last Rainfall:</strong>{" "}
            <span className="data-value">
              {new Date(weatherData.lastRain).toLocaleDateString()}
            </span>
          </p>

          <h2 className="section-heading">Other Information</h2>
          <p>
            <strong>UV Index:</strong>{" "}
            <span className="data-value">{weatherData.uv}</span>
          </p>
          <p>
            <strong>Solar Radiation:</strong>{" "}
            <span className="data-value">
              {weatherData.solarradiation} W/m²
            </span>
          </p>
          <p>
            <strong>Barometric Pressure (Relative):</strong>{" "}
            <span className="data-value">{weatherData.baromrelin} inHg</span>
          </p>
          <p>
            <strong>Barometric Pressure (Absolute):</strong>{" "}
            <span className="data-value">{weatherData.baromabsin} inHg</span>
          </p>
        </div>
      )}
      {sunData && (
        <div>
          
          <p>
            <strong>Sunrise:</strong>{" "}
            <span className="data-value">{sunriseLocal} am</span>
          </p>
          <p>
            <strong>Sunset:</strong>{" "}
            <span className="data-value">{sunsetLocal} pm</span>
          </p>
          <p>
            <strong>Day Length:</strong>{" "}
            <span className="data-value">{sunData.results.day_length}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;

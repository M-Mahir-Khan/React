import React, { useState } from 'react'
import { useEffect } from 'react'

const Fourteen = () => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bdd95182f387a67db24ec8d8613fe65a`)
                    .then((response) => response.json())
                    .then((data) => setWeather(data))

            })
        }
    })
    return (
        <div>
            {weather ? (
                <div>
                    <h2>Current Weather</h2>
                    <p>Temperature: {weather.main.temp}</p>
                    <p>Condition:{weather.weather[0].description}</p>
                </div>
            ) : (
                <div>
                    Loading....
                </div>
            )
            }
        </div>
    )
}

export default Fourteen
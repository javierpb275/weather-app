const request = require('request');//make http calls. It supports HTTPS and follows redirects by default.

const urlWeatherstack = 'http://api.weatherstack.com/current?access_key=0e93adc7da91435c4890075e60c5c6b1&query=New%20York';

request({url: urlWeatherstack, json: true}, (error, response) => {
    console.log(`It is ${response.body.current.temperature} degrees out.`);
    console.log(`There is a ${response.body.current.precip}% chance of rain.`);
})

const urlMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamF2aWVycGIyNzUiLCJhIjoiY2txaTg4ZTRzMXdpYzJ1bWltbXUwZXNhZiJ9.dVUptpdm3nMBcwc95GwIXg&limit=1';

request({url: urlMapbox, json: true}, (error, response) => {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    console.log(`latitude: ${latitude}`);
    console.log(`longitude: ${longitude}`);
})
const request = require('request');//make http calls. It supports HTTPS and follows redirects by default.

const urlWeatherstack = 'http://api.weatherstack.com/current?access_key=5287c1ed8a65a3139af80d11998a60ca&query=New%20York';

request({url: urlWeatherstack, json: true}, (error, response) => {
    if(error) {
        console.log('Unable to connect to weather service!');
    } else if(response.body.error) {
        console.log('Unable to find location');
    } else {
        console.log(`It is ${response.body.current.temperature} degrees out.`);
        console.log(`There is a ${response.body.current.precip}% chance of rain.`);
    }
})

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiamF2aWVycGIyNzUiLCJhIjoiY2txaTg4ZTRzMXdpYzJ1bWltbXUwZXNhZiJ9.dVUptpdm3nMBcwc95GwIXg&limit=1';
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Los Angeles', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})
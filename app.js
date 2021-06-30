//packages:
const request = require('request');//make http calls. It supports HTTPS and follows redirects by default.
//utils:
const geocode = require('./utils/geocode');

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

geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})
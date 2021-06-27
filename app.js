const request = require('request');//make http calls. It supports HTTPS and follows redirects by default.

const url = 'http://api.weatherstack.com/current?access_key=0e93adc7da91435c4890075e60c5c6b1&query=New%20York';

request({url: url, json: true}, (error, response) => {
    console.log(`It is ${response.body.current.temperature} degrees out.`);
    console.log(`There is a ${response.body.current.precip}% chance of rain.`);
})

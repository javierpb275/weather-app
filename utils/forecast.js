//packages:
const request = require('request');

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5287c1ed8a65a3139af80d11998a60ca&query=' + encodeURIComponent(address);
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!',undefined)
        } else if(response.body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined, 'In ' + response.body.request.query + ', It is ' + response.body.current.temperature +
            ' degrees out. And there is a ' + response.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast;
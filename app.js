//utils:
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const commandPlace = process.argv[2] + ' ' + process.argv[3];

const weatherInfo = (address) => {
    if (!address) {
        console.log('Please provide address');
    } else {
        geocode(address, (error, {place, location} = {}) => {
            if(error) {
                return console.log(error)
            }
            forecast(place, (error, forecastData) => {
                if(error) {
                    return console.log(error)
                }
                console.log(location)
                console.log(forecastData);
            })
    
        })
    }
}

weatherInfo(commandPlace);
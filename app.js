//utils:
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const place = process.argv[2] + ' ' + process.argv[3];

const weatherInfo = (place) => {
    if (!place) {
        console.log('Please provide address');
    } else {
        geocode(place, (error, geocodeData) => {
            if(error) {
                return console.log(error)
            }
            forecast(geocodeData.place, (error, forecastData) => {
                if(error) {
                    return console.log(error)
                }
                console.log(geocodeData.location)
                console.log(forecastData);
            })
    
        })
    }
}

weatherInfo(place);
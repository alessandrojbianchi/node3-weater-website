const request = require('request')

const geocode = (address,callback) => {

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxlc3NhbmRyb2piaWFuY2hpIiwiYSI6ImNsbXZ4em04cjBweDMycW9jeml5cXY4d2oifQ.TMiQA0KtQ6_zKJxTOi2GKw&limit=1'

    request({url: url, json:true},(error,{body})=>{

        if(error){

            callback('enable to connect to location service',undefined)

        }else if(body.features.length=== 0){

            callback('Unable to finde location.Try another search',undefined)

        } else{

            callback(undefined, {
                latitude: body.features[0].center[1],
                longitud: body.features[0].center[0],
                location: body.features[0].place_name

            })
        }

    })
}

module.exports = geocode
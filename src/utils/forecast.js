const request = require('request')

const forecast = (location,callback) => {

    // const url = 'http://api.weatherstack.com/current?access_key=75fc2bee7c6b90810fc258bc08681673&query=' + latitude + ',' + longitude'
 
     const url ='http://api.weatherstack.com/current?access_key=75fc2bee7c6b90810fc258bc08681673&query='+ location +''
     request({url:url, json:true}, (error,{body})=>{
 
         if(error){
             callback('enable to connect to location service', undefined)
         }else if(body.succes === false) {
             callback('Enable to find location. Try another search', undefined)
         } else {
 
             callback(body.current.weather_descriptions[0] + '. La temperatura attuale è:' + body.current.temperature +' la temperatura percepita è :' + body.current.feelslike)
 
         }
 
     })
 
   }
 
   module.exports = forecast
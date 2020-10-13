const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', "ejs")
app.use(express.static("public"))

// let thisData
app.get('/', (req, res) => {
    
    // res.sendFile(__dirname + "/index.html")
    res.render("index", {})
    /*
    */
   //     () => {
       
       //         document.querySelector('h1').innerHTML = city.toUpperCase(),
       //         document.querySelector('h2').innerHTML = main,
       //         document.querySelector('.desc').textContent = desc,
       //         document.querySelector('.temp').textContent = temp
       
       // })
    })
app.post('/meteo', (req, res) => {
    const apiKey = "f6f03d4b430d972622542e12b63f852d"
    const city = req.body.ville
    const units = "metric"
    const tab = []
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    https.get(url, response => {
        response.on("data", data => {
        const thisData = JSON.parse(data)
        const newData = {
            name: thisData.name,
            country: thisData.sys.country,
            desc: thisData.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${thisData.weather[0].icon}.png`,
            temp: thisData.main.temp,
            feelsLike: thisData.main.feels_like,
            humidity: thisData.main.humidity
        }
        console.log(thisData)
        console.log("données carte: ")
        console.log(newData)
        tab.push(newData)
        //res.send(`A ${city}, on a un temps ${thisData.weather[0].main}, la température est de ${thisData.main.temp}°C.`)
        res.render("meteo", {tab: tab})
        
        // const {name} = thisData
        // const {temp} = thisData.main
        // const {description, main} = thisData.weather[0]
        // const {country} = thisData.sys
        })
    })
})

app.listen(3000, () => {
    console.log("serveur actif")
})
const axios = require('axios')

const fs = require('fs')
const path = require('path')
const filmFile = path.join(__dirname, `downloads/random`)

axios.get('https://api-ghibli.herokuapp.com/films')
    .then((res) => res.json)
    .then((data) => {
        fs.writeFile(filmFile, JSON.stringify(data), (er) => {
            if (er) {
                console.log(er)
            }
        })
    })
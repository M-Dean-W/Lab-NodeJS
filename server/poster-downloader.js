import axios from "axios";

const fs = require('fs')
const path = require('path')
const filmFile = path.join(__dirname, `downloads/${films.id}`)

axios.get('https://api-ghibli.herokuapp.com/films')
    .then((res) => res.json)
    .then((films) => {
        fs.writeFile(filmFile, JSON.parse(films.image), (er) => {
            if (er) {
                console.log(er)
            }
        })
    })
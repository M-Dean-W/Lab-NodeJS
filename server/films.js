const fs = require('fs')
const path = require('path')

const filmFile = path.join(__dirname, 'fav-films.json')

fetch('https://api-ghibli.herokuapp.com/films')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(films => {
            delete films.original_title
            delete films.image
            delete films.original_title_romanised
            delete films.movie_banner
            delete films.director
            delete films.producer
            delete films.release_date
            delete films.running_time
            delete films.people
            delete films.species
            delete films.locations
            delete films.vehicles
            delete films.url
        });

        fs.writeFile(filmFile, JSON.stringify(data), (er) => {
            if (er) {
                console.log(er)
            }
        })
    })
const axios = require('axios')
const fs = require('fs')
const path = require('path')



fetch('https://api-ghibli.herokuapp.com/films')
    .then((res) => res.json())
    .then((films) => {
        films.forEach(film => {
            const image_url = film.movie_banner
            const downDir = path.join(__dirname, `downloads`, `${film.title}.jpg`)
            axios.get(image_url, { responseType: 'arraybuffer' })
                .then(res => {
                    fs.writeFile(downDir, res.data, (err) => {
                        if (err) {
                            console.log(err)
                        }
                    })
                });
        })
    })


const fs = require('fs')
const path = require('path')

let chirps = ['tweet', 'yo', 'greetings', 'hi', 'cheep']

const chirpsFile = path.join(__dirname, 'chirps.json' )

fs.writeFile(chirpsFile, JSON.stringify(chirps), (er) => {
    if (er) {
        console.log(er)
    }
})

fs.readFile(chirpsFile, (er,data) =>{
    if(er) {
        console.log(er)
    }
    console.log(JSON.parse(data))
})


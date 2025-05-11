const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=98d5a9bc72a98fa048a768d29405d1b3&query=Shyamnagar`;

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log(error);
    
})

request.end()
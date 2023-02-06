const express = require('express')
const app = express();

app.get('/', (req, res) => res.send('Hello world from cubectl'))

app.listen(80,'0.0.0.0', () => {
    console.listen('server is listen on port 80')
})
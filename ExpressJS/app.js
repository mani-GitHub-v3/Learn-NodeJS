const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Namaste NodeJS')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/contact', (req, res) => {
    res.send('contact page')
})

app.get('/see', (req, res) => {
    res.send('see page')
})

app.listen(3000, () => console.log('3000 is running'))
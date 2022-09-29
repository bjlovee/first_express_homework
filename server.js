// require modules
const { response } = require('express')
const express = require('express')

// Create express app 
const app = express()

// Start Route

app.get('/greeting', (req, res) => {
res.send('<h1>Express Is Cool!👨🏾</h1>')

})

app.get('/greeting/:frontedPeople', (req, res) => {
    res.send('<h1>I Love The Backend☕️ sorry frontend people</h1>')
    
    })
    
// End Route


// Tell the app to listen on a port
app.listen(3000, () => {
console.log('listen on port 3000')
})
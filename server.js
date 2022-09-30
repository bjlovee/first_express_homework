// require modules
const { response } = require('express')
const express = require('express')
const tip = [
    {
        100: '$100'
    },
    {
        20: '20%'
    }
 ]
// Create express app 
const app = express()

// Start Route

app.get('/greeting', (req, res) => {
res.send('<h1>Express Is Cool!👨🏾</h1>')
})

app.get('/greeting/:frontend', (req, res) => {
    res.send('<h1>I Love The Backend☕️ sorry frontend people🙍🏾‍♂️</h1>')
    })
    
app.get('/tip', (req, res) => {
res.send('<h1>Hang Tight..</h1>')
})

app.get('/tip/:total', (req, res) => {
    res.send('<h1>Your total today is $85.32</h1>')
    })

    app.get('/tip/:total/:percentage', (req, res) => {
        res.send('<h1>You have tipped 12%, which brings your total up to $95.55</h1>')
        })

// End Route


// Tell the app to listen on a port
app.listen(3000, () => {
console.log('listen on port 3000')
})
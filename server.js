// require modules
const { response } = require('express')
const express = require('express')
// Create express app 
const app = express()

// An Array of answers
const answers = [
    {
    answer: "It is certain",
    },
    {
    answer: "It is decidedly so",   
    },
    {
    answer: "Without a doubt", 
    },
    {
    answer: "Yes definitely",
    },
    {
    answer: "You may rely on it",   
    },
    {
    answer: "As I see it yes",
    },
    {
    answer: "Most likely", 
    },
    {
    answer: "Outlook good",   
    },
    {
    answer: "Yes",
    },
    {
    answer: "Signs point to yes",
    },
    {
    answer: "Reply hazy try again", 
    },
    {
     answer: "Ask again later",
    },  
    {
     answer: "Better not tell you now",   
    },
    {
    answer: "Cannot predict now",
    },
    {
    answer: "Concentrate and ask again",
    },
    {
    answer: "Don't count on it",
    },
    {
    answer: "My reply is no",
    },
    {
     answer: "My sources say no",   
    },
    {
    answer: "Outlook not so good",   
    },
    {
    answer: "Very doubtful"
     
    }
   
]

let magic8Ball = answers[Math.floor(Math.random()*answers.length)];

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

app.get('/magic', (req, res) => {
res.send()
})

app.get('/magic/:Will%20I%20Be%20A%20Millionaire', (req, res) => {
    res.send({magic8Ball})
    })

// End Route


// Tell the app to listen on a port
app.listen(3000, () => {
console.log('listen on port 3000')
})
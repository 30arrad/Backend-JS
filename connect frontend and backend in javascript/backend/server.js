const express = require('express')
// if (import express from 'express') then package.json should have "type": "module" and main should be "server.js"

const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get ('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 2,
            title: "What did one wall say to the other wall?",
            content: "I'll meet you at the corner!"
        },
        {
            id: 3,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        }
    ]
    res.send(jokes)
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
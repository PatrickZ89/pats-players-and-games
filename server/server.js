const express = require('express');
const app = express();
const PORT = 5000;
let bodyParser = require('body-parser');
const players = ['Mary', 'Luke'];

app.use(express.static('server/public'));

// BODY PARSER NEEDS TO BE BEFORE THE POST
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

app.get('/players', (req, res) => {
    res.send(players);
});

app.post('/add-player', (req, res) => {
    console.log(req.body);
    players.push(req.body);
    res.sendStatus(201);
});






const games = [
    {
        playerName: 'Mary',
        playerScore: 16,
        opponentName: 'Luke',
        opponentScore: 7,
        winner: 'Mary'
    },
    {
        playerName: 'Mary',
        playerScore: 22,
        opponentName: 'Luke',
        opponentScore: 18,
        winner: 'Mary'
    },
    {
        playerName: 'Mary',
        playerScore: 14,
        opponentName: 'Luke',
        opponentScore: 17,
        winner: 'Luke'
    }
];
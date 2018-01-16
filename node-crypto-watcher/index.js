var express = require('express');
var mailer = require('./mailer');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Serveur up');
});

app.get('/news', function(req, res) {

    let mailOptions = {
        from: 'crypto.watcher612@gmail.com',
        to: ['bastien.meunier@yahoo.fr', 'bastien.a.meunier@capgemini.com', 'afkin9@gmail.com'],
        subject: 'Bot activation',
        text: 'Bot is activated'
    };

    mailer.sendMail(mailOptions);

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('mail envoyé !');
});

app.get('/testMail', function(req, res) {

    let mailOptions = {
        from: 'crypto.watcher612@gmail.com',
        to: ['bastien.meunier@yahoo.fr'],
        subject: 'Bot activation',
        text: 'Bot is activated'
    };

    mailer.sendMail(mailOptions);

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('mail envoyé !');
});


app.listen(9876);
const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');

const port = process.env.port || 3000;

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Ana'
    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Ana',
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
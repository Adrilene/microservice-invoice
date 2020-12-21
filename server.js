// load the things we need
const express = require('express');
const bodyParser = require('body-parser');
const get_data = require('./get_data');
const app = express();

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
// MIDDLEWARES
app.use(bodyParser.json());

app.get('/invoice', function(req, res) {
    get_data.get_data(req.query.order_id).then(function(data) {
        res.render('pages/index', {
            data: data
        });
    })

});


app.listen(4003, () => {
    console.log(`Servidor rodando na porta 4003`)
});
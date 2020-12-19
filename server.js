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

    var today = new Date();
    get_data.get_data(order_id).then(function(data) {
        res.render('pages/index', {
            data: data
        });
    })

});


app.listen(4005, () => {
    console.log(`Servidor rodando na porta 4005`)
});
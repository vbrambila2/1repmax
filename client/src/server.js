var fs = require('fs');
var data = fs.readFileSync('data.json');
var movements = JSON.parse(data);
console.log(movements);

//console.log('server is running');

var express = require('express');

var app = express();

var server = app.listen(5000, listening);

function listening() {
    console.log('Listening...');
};

app.use(express.static('website'));

app.get('/add/:name/:weight', addMove);

function addMove(req, res) {
    var data = req.params;
    const name = data.name;
    const weight = Number(data.weight);

    var reply;
    if(!weight) {
        reply = {
            msg: "Weight is required as a number"
        }
        res.send(reply);
    } else {
        movements[name] = weight;
        data = JSON.stringify(movements, null, 2);
        fs.writeFile('data.json', data, finished);
        function finished(err) {
            console.log('all set');
            var reply = {
                name: name,
                weight: weight,
                status: "Success",
            }
            res.send(reply);
        }  
    }  
};

app.get('/movements', fetchAll);

function fetchAll(req, res) {
    data = {
        movements: movements 
    }
    res.send(movements);
};

app.get('/search/:name', searchMove);

function searchMove(req, res) {
    var name = req.params.name;
    var reply;
    if (movements[name]) {
        reply = {
            status: "found",
            name: name,
            weight: movements[name]
        }
    } else {
        reply = {
            status: "not found",
            name: name
        }
    }

    res.send(reply);
};
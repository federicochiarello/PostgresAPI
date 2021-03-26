var express = require('express');
var app = express();
var port = 8080;
const pg = require('pg');
const config = {
    user: 'postgres',
    database: 'america',
    password: 'post',
    port: 5432,
    host: 'localhost'
};
const pool = new pg.Pool(config);

app.get('/', function (req, res, next) {
    pool.connect(function (err, client, done) {
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('SELECT * FROM persons', function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        })
    });
});

app.listen(port, function () {
    console.log('Express server inizializzato sulla porta ' + port);
});
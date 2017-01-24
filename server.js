var request = require('request');
var express = require('express');
var app = express()

app.set('port', (process.env.PORT || 5000));


app.get('/', function (req,res){

    var headers = {
        'App-Id': '',
        'App-Key': '',
        'Content-Type': 'application/json'
    };

    var dataString = {
        "sex": "male",
        "age": 30,
        "evidence": [
            {"id": "s_1193", "choice_id": "present"},
            {"id": "s_488", "choice_id": "present"},
            {"id": "s_418", "choice_id": "present"}]};

    var options = {
        url: 'https://api.infermedica.com/v2/diagnosis',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(dataString)
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(body))
        }
    }

    request(options, callback);


}) //app.get




app.listen(app.get('port'))

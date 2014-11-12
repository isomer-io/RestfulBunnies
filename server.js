var express = require('express');
var app = express();

app.get('/hello', function (request, response){
  response.send('Hello World');
});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
	res.sendfile(__dirname + 'index.html');
});

app.listen(3000);
console.log('App running on port 3000');
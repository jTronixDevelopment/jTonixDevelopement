var app = require('express')();
var http = require('http').Server(app);
var jsonfile = require('jsonfile')
var data;

jsonfile.readFile('json.json', function(err, obj) {
  data = obj;
})

app.use(require('express').static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/list', function(req, res) {
  jsonfile.readFile('json.json', function(err, obj) {
    data = obj;
    res.json(obj)
  })
})

app.post('/savedata', (req, res) => {
  console.log("IN THE SAVE DATA")
  req.on('data', function(data) {
    jsonfile.writeFile('json.json', JSON.parse(data), () => {
      console.log(true)
    });
  });
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write("You saved Data");
  res.end();
})


http.listen(3000, function() {
  console.log('listening on *:3000');
});

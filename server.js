var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/home/apcoer/webapp/imad-2016-app/ui/IMG_0601.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_0601.png'));
});
app.get('/home/apcoer/webapp/imad-2016-app/ui/index.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.jpg'));
});
app.get('/home/apcoer/webapp/imad-2016-app/ui/images.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

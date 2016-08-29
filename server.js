var express = require('express');
var app = express();

app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));

express.static.mime.define({'text/cache-manifest': ['mf']});

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send('hello world');
// });
var port = 80;
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
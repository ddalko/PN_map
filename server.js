var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view_engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(5000, function() {
  console.log("Express server has started on port 5000");
})
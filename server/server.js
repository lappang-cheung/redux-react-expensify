var express = require('express');
var path = require('path');
const http = require('http');

var publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
    console.log('Server online')
});

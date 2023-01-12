var express = require('express');
var app = express();

app.use(express.static('public'))
app.use(express.urlencoded())

app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/keyboard_inputs.html')
});

app.listen(3000, function(){
    console.log('Port 3000 is running')
})
const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

//access using http://localhost:3000/help.html
app.use(express.static(__dirname + '/public'));

//this is a handler for the route of the directory
app.get('/', (req,res) => { //request & response
  res.send({acronym: 'AAT',
      name: 'Ashley Alexandra Thompson',
      occupation: 'healer'});
});

//this is a handler for itsfriday
app.get('/itsfriday', (req,res) => { //request & response
  res.send({Day: 'Friday',
      hobbies: ['living', 'sleeping', 'eating']
    });
});
//handler for the route /yogurl
app.get('/yogurl', (req,res) => {
  res.send({message: 'Get outta here'});
});

//handler for crazy
app.get('/crazy', (req,res) =>{
  res.send('<h1>It is IIIIIII</h1>');
});

app.get('/no', (req,res) =>{
  res.send({message: 'NO THANK YOU'});
});



app.listen(port, () => {
  var p = port
  console.log('Server is up on: ');
  console.log(p)
});

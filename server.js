var express = require('express');
var data = require('./data/test.json');
var app = express();
const PORT = 3000;

//We can now serve up static pages
//app.use(express.static(__dirname));

//This is how thr route is built in Express
app.get('/', (req,res)=>{

  res.send(`App is running on the port ${PORT}`);

});


app.listen(PORT,()=>{

  console.log(`App is running on the port ${PORT}`);
  console.log(data);

});


var express = require('express');
var app = express();

const PORT = 3000;

//We can now serve up static pages
app.use(express.static(__dirname));

//app.listen(3000);

app.listen(PORT,()=>{

  console.log(`App is running on the port ${PORT}`);

});


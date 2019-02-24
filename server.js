//Install express server
const express = require('express');
const path = require('path');
const user=require('./Router/rout')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
var PORT = process.env.PORT || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-deploy'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/demo-deploy/index.html'));
});
app.use("/",user);
// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

app.listen(PORT,function(){
    console.log("8080")
})
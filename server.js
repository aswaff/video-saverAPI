var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Task = require('./api/models/videoModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

// Connecting to the config Vars in Heroku
const url = process.env.MONGODB_CONNECT;



// For a local database connection: mongoose.connect('mongodb://localhost/videodb'); 
mongoose.connect(url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const cors = require('cors');
app.use(cors({

    origin: '*'
}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/videoRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Video RESTful API server started on: ' + port);
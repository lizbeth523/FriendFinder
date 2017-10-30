// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express app
var app = express();
app.use('/app', express.static(path.join(__dirname, 'app')));

// for heroku 
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Survey results for everybody who has filled out the survey
var friends = [];

// routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// get all
app.get("/all", function(req, res) {
  res.json(friends);
});

// create new
// app.post("/api/new", function(req, res) {
//   var newreservation = req.body;
//  // newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase(); //starwars example, object .routeName - address for next page

//   if(reservations.includes(newreservation)) {
//      //reservation already exists
//      console.log("You already have a reservation");
//      } else {
//      //doeenst exist
//       console.log(newreservation);
//     if (reservations.length < 5) {
//       reservations.push(newreservation);
//       console.log("Your reservation has been made.");
//     } else {
//       waitList.push(newreservation);
//       console.log("You have been added to the waiting list.");
//     }
// }
//   res.json(newreservation);
// });


// listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
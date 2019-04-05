const express = require('express');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let cvs = [
	{"id": 1, "name": "Bruno", "email": "name1@email.com"}, 
 	{"id": 2, "name": "Nick", "email": "name2@email.com"}, 
 	{"id": 3, "name": "Arthur", "email": "name3@email.com"}, 
 	{"id": 4, "name": "Mubeezi", "email": "name4@email.com"}, 
 	{"id": 5, "name": "Michy", "email": "name5@email.com"}
 ];


app.get('/', function (req, res) {
	res.send("<h1 style='color: blue; border: thin solid red;'>App is working fine!</h1>");
})

app.get("/url", (req, res, next) => {
	res.json(cvs);
 	// res.send(cvs);
});

app.get("/url/:id", (req, res, next) => {
	num = parseInt(req.params.id) - 1;

	res.json(cvs[num]);
});

app.get('/profiles', function (req, res) {
  res.send("<h1 style='color: blue; border: thin solid red;'>I think you want to see all profiles!</h1>")
})

app.post('/profiles', function (req, res) {
  res.send("You are posting something!\n");
  cvs.push({"id": cvs.length+1, "name": "Bruno"});
})

/*
app.get('/profiles/<id>', function (req, res) {
  res.send("<h1 style='color: blue; border: thin solid red;'>App is working fine!</h1>")
})
*/

// Error handlers
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, function() {
    console.log('The CV Builder app is runnning at http://localhost:' + port);
});


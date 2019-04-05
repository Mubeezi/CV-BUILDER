const express = require('express');

var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

const app = express();
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
// for templating
app.use(express.static('public'));
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing multipart/form-data - uploading files
app.use(upload.array()); 
app.use(express.static('public'));


let cvs = [
	{"id": 1, "name": "Bruno", "email": "name1@email.com"}, 
 	{"id": 2, "name": "Nick", "email": "name2@email.com"}, 
 	{"id": 3, "name": "Arthur", "email": "name3@email.com"}, 
 	{"id": 4, "name": "Mubeezi", "email": "name4@email.com"}, 
 	{"id": 5, "name": "Michy", "email": "name5@email.com"}
 ];

app.use(function(req, res, next){
   console.log("Start");
   next();
});
/*
	// pug stuff
	app.get('/first_template', function(req, res){
	   res.render('first_view');
	});
	app.get('/dynamic_view', function(req, res){
	   res.render('dynamic', {
	      name: "TutorialsPoint", 
	      url:"http://www.tutorialspoint.com"
	   });
	});

	// end pug
*/
app.get('/', function (req, res) {
	res.send("<h1 style='color: blue; border: thin solid red;'>App is working fine!</h1>");
})

app.get("/users", (req, res, next) => {
	res.json(cvs);
 	// res.send(cvs);
});

// adding a user
app.post('/users', function (req, res, next) {
	res.send("You are posting something!\n");
	cvs.push({"id": cvs.length+1, "name": "Bruno"});

	console.log("An item of profiles is added at " + Date.now());
	next();
});

// collect a single record
app.get("/users/:id", (req, res, next) => {
	num = parseInt(req.params.id) - 1;

	if (num > cvs.length) {
		res.json({"error": "Sorry, this user does not exist."});
	}
	else {
		res.json(cvs[num]);
	}
});

// delete a single record
app.delete('/users/:id', function(req, res, next){
	console.log("You are deleting something!\n");

	num = parseInt(req.params.id);
	msg = {}
	count = 0;
	id_num = 0

	for (i=0; i < cvs.length; i++){
		if (parseInt(cvs[i].id) === num) {
			count++;
			id_num = i;
		}
		
	}

	cvs.splice(cvs[id_num],1);
	msg = {message: "Person with id " + num + " is sucessfully removed."};
	res.send("An item of profiles is added at " + Date.now() + '\n');
	next();
});

app.get('/profiles', function (req, res) {
  res.send("<h1 style='color: blue; border: thin solid red;'>I think you want to see all profiles!</h1>")
})

//Other routes here
app.get('*', function(req, res){
    res.json({"error": "Sorry, this is an invalid URL."});
});


app.listen(port, function() {
    console.log('The CV Builder app is runnning at http://localhost:' + port);
});

// adding some user
// curl -X POST "http://localhost:5000/users"


// deleting
// curl -X DELETE "http://localhost:5000/users/9"
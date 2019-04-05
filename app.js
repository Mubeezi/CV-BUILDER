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
// 
app.use(express.urlencoded())


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

	var name         = req.body.name
	var gender       = req.body.gender;
	var email        = req.body.email;
	var email2       = req.body.email2;
	var address      = req.body.address;
	var telephone    = req.body.telephone;
	var date_of_birth = req.body.date_of_birth;
	var nationality      = req.body.nationality;
	  // Academic 
	  var school1      = req.body.school1;
	  var acad_year1      = req.body.acad_year1;
	  var acad_grad1      = req.body.acad_grad1;
	  var acad_level1      = req.body.acad_level1;
	  var acad_degree1      = req.body.acad_degree1;
	  var acad_school1      = req.body.acad_school1;

	  var school2      = req.body.school2;;
	  var acad_year2      = req.body.acad_year2;
	  var acad_grad2      = req.body.acad_grad2;
	  var acad_level2      = req.body.acad_level2;
	  var acad_degree2     = req.body.acad_degree2;
	  var acad_school2      = req.body.acad_school2;

	  var school3      = req.body.school3;;
	  var acad_year3      = req.body.acad_year3;
	  var acad_grad3      = req.body.acad_grad3;
	  var acad_level3      = req.body.acad_level3;
	  var acad_degree3      = req.body.acad_degree3;
	  var acad_school3      = req.body.acad_school3;
	  // employment
	  var emp_year1      = req.body.emp_year1;
	  var emp_to1      = req.body.emp_to1;
	  var emp_role1      = req.body.emp_role1;
	  var emp_address1      = req.body.emp_address1;
	  var emp_company1      = req.body.emp_company1;

	  var emp_year2      = req.body.emp_year2;;
	  var emp_to2      = req.body.emp_to2;;
	  var emp_role2      = req.body.emp_role2;;
	  var emp_address2      = req.body.emp_address2;
	  var emp_company2      = req.body.emp_company2;

	  var emp_year3      = req.body.emp_year3;
	  var emp_to3      = req.body.emp_to3;
	  var emp_role3      = req.body.emp_role3;
	  var emp_address3      = req.body.emp_address3;
	  var emp_company3      = req.body.emp_company3;
	  // personal skills
	  var skill1      = req.body.skill1;
	  var skill2      = req.body.skill2;
	  var skill3      = req.body.skill3;
	  var skill4      = req.body.skill4;
	  var skill5      = req.body.skill5;
	  var skill6      = req.body.skill6;
	  var skill7      = req.body.skill7;
	  var skill8      = req.body.skill8;
	  var skill9      = req.body.skill9;
	  var skill10      = req.body.skill10;

	  // portfolio
	  var project1 = req.body.project1;
	  var project1_desc = req.body.project1_desc;

	  var project2 = req.body.project2;
	  var project2_desc = req.body.project2_desc;

	  var project3 = req.body.project3;
	  var project3_desc = req.body.project3_desc;

	  var profile_image = req.body.profile_image;
	  // references
	  var name_ref1 = req.body.name_ref1;
	  var phone_ref1 = req.body.phone_ref1;
	  var email_ref1 = req.body.email_ref1;
	  var position_ref1 = req.body.position_ref1;

	  var name_ref2 = req.body.name_ref2;
	  var phone_ref2 = req.body.phone_ref2;
	  var email_ref2 = req.body.email_ref2;
	  var position_ref2 = req.body.position_ref2;

	  var name_ref3 = req.body.name_ref3;
	  var phone_ref3 = req.body.phone_ref3;
	  var email_ref3 = req.body.email_ref3;
	  var position_ref3 = req.body.position_ref3;


	newuser = {
		"name": name,
		"gender": gender,
		"email": email,
		"email2": email2,
		"address": address,
		"telephone": telephone,
		"date_of_birth": date_of_birth,
		"nationality": nationality,
		"school1": school1,
		"acad_year1": acad_year1,
		"acad_grad1": acad_grad1,
		"acad_level1": acad_level1,
		"acad_degree1": acad_degree1,
		"acad_school1": acad_school1,
		"school2": school2,
		"acad_year2": acad_year2,
		"acad_grad2": acad_grad2,
		"acad_level2": acad_level2,
		"acad_degree2": acad_degree2,
		"acad_school2": acad_school2,
		"school3": school3,
		"acad_year3": acad_year3,
		"acad_grad3": acad_grad3,
		"acad_level3": acad_level3,
		"acad_degree3": acad_degree3,
		"acad_school3": acad_school3,

		"emp_year1": emp_year1,
		"emp_to1": emp_to1,
		"emp_role1": emp_role1,
		"emp_address1": emp_address1,
		"emp_company1": emp_company1,

		"emp_year2": emp_year2,
		"emp_to2": emp_to2,
		"emp_role2": emp_role2,
		"emp_address2": emp_address2,
		"emp_company2": emp_company2,

		"emp_year3": emp_year3,
		"emp_to3": emp_to3,
		"emp_role3": emp_role3,
		"emp_address3": emp_address3,
		"emp_company3": emp_company3,

		"skill1": skill1,
		"skill2": skill2,
		"skill3": skill3,
		"skill4": skill4,
		"skill5": skill5,
		"skill6": skill6,
		"skill7": skill7,
		"skill8": skill8,
		"skill9": skill9,
		"skill10": skill10,

		"project1": project1,
		"project1_desc": project1_desc,

		"project2": project2,
		"project2_desc": project2_desc,

		"project3": project3,
		"project3_desc": project3_desc,

		"profile_image": profile_image,

		"name_ref1": name_ref1,
		"phone_ref1": phone_ref1,
		"email_ref1": email_ref1,
		"position_ref1": position_ref1,

		"name_ref2": name_ref2,
		"phone_ref2": phone_ref2,
		"email_ref2": email_ref2,
		"position_ref2": position_ref2,

		"name_ref3": name_ref3,
		"phone_ref3": phone_ref3,
		"email_ref3": email_ref3,
		"position_ref3": position_ref3,
	}
	
	// cvs.push({"id": cvs.length+1, "name": "Bruno"});
	cvs.push(newuser);

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
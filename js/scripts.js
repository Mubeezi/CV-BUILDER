/*
     $("form").on("submit", function(event) {
           event.preventDefault();
     var inputOne = $(#textOne);
     var inputTwo = $(#textTwo);
     inputTwo.val(inputOne.val());
     });
*/
/*
     var value_of_control = document.getElementById("#myInput");
     alert(value_of_control);
     console.log(value_of_control);
*/

$(document).ready(function(){

    $( "#form" ).submit(function( event ) {
          event.preventDefault();

          var name         = $('input[name=name]').val();
          var gender       = $('input[name=gender]').val();
          var email        = $(this).find('[name=email]').val();
          var email2       = $(this).find('[name=email2]').val();
          var address      = $(this).find('[name=address]').val();
          var telephone    = $(this).find('[name=telephone]').val();
          var date_of_birth = $(this).find('[name=date_of_birth]').val();
          var nationality      = $(this).find('[name=nationality]').val();
          // Academic 
          var school1      = $(this).find('[name=school1]').val();
          var acad_year1      = $(this).find('[name=acad_year1]').val();
          var acad_grad1      = $(this).find('[name=acad_grad1]').val();
          var acad_level1      = $(this).find('[name=acad_level1]').val();
          var acad_degree1      = $(this).find('[name=acad_degree1]').val();
          var acad_school1      = $(this).find('[name=acad_school1]').val();

          var school2      = $(this).find('[name=school2]').val();
          var acad_year2      = $(this).find('[name=acad_year2]').val();
          var acad_grad2      = $(this).find('[name=acad_grad2]').val();
          var acad_level2      = $(this).find('[name=acad_level2]').val();
          var acad_degree2     = $(this).find('[name=acad_degree2]').val();
          var acad_school2      = $(this).find('[name=acad_school2]').val();

          var school3      = $(this).find('[name=school3]').val();
          var acad_year3      = $(this).find('[name=acad_year3]').val();
          var acad_grad3      = $(this).find('[name=acad_grad3]').val();
          var acad_level3      = $(this).find('[name=acad_level3]').val();
          var acad_degree3      = $(this).find('[name=acad_degre31]').val();
          var acad_school3      = $(this).find('[name=acad_school3]').val();
          // employment
          var emp_year1      = $(this).find('[name=emp_year1]').val();
          var emp_to1      = $(this).find('[name=emp_to1]').val();
          var emp_role1      = $(this).find('[name=emp_role1]').val();
          var emp_address1      = $(this).find('[name=emp_address1]').val();
          var emp_company1      = $(this).find('[name=emp_company1]').val();

          var emp_year2      = $(this).find('[name=emp_year2]').val();
          var emp_to2      = $(this).find('[name=emp_to2]').val();
          var emp_role2      = $(this).find('[name=emp_role2]').val();
          var emp_address2      = $(this).find('[name=emp_address2]').val();
          var emp_company2      = $(this).find('[name=emp_company2]').val();

          var emp_year3      = $(this).find('[name=emp_year3]').val();
          var emp_to3      = $(this).find('[name=emp_to3]').val();
          var emp_role3      = $(this).find('[name=emp_role3]').val();
          var emp_address3      = $(this).find('[name=emp_address3]').val();
          var emp_company3      = $(this).find('[name=emp_company3]').val();
          // personal skills
          var skill1      = $(this).find('[name=skill1]').val();
          var skill2      = $(this).find('[name=skill2]').val();
          var skill3      = $(this).find('[name=skill3]').val();
          var skill4      = $(this).find('[name=skill4]').val();
          var skill5      = $(this).find('[name=skill5]').val();
          var skill6      = $(this).find('[name=skill6]').val();
          var skill7      = $(this).find('[name=skill7]').val();
          var skill8      = $(this).find('[name=skill8]').val();
          var skill9      = $(this).find('[name=skill9]').val();
          var skill10      = $(this).find('[name=skill10]').val();
          // Portfolio
          var project1      = $(this).find('[name=project1]').val();
          var project1_desc       = $(this).find('[name=project1_desc]').val();

          var project2      = $(this).find('[name=project2]').val();
          var project2_desc       = $(this).find('[name=project2_desc]').val();

          var project3      = $(this).find('[name=project3]').val();
          var project3_desc       = $(this).find('[name=project3_desc]').val();

          // portfolio
          var project1 = $(this).find('[name=project1]').val();
          var project1_desc = $(this).find('[name=project1_desc]').val();

          var project2 = $(this).find('[name=project2]').val();
          var project2_desc = $(this).find('[name=project2_desc]').val();

          var project3 = $(this).find('[name=project3]').val();
          var project3_desc = $(this).find('[name=project3_desc]').val();

          var profile_image = $(this).find('[name=profile_image]').val();
          // references
          var name_ref1 = $(this).find('[name=name_ref1]').val();
          var phone_ref1 = $(this).find('[name=phone_ref1]').val();
          var email_ref1 = $(this).find('[name=email_ref1]').val();
          var position_ref1 = $(this).find('[name=position_ref1]').val();

          var name_ref2 = $(this).find('[name=name_ref2]').val();
          var phone_ref2 = $(this).find('[name=phone_ref2]').val();
          var email_ref2 = $(this).find('[name=email_ref2]').val();
          var position_ref2 = $(this).find('[name=position_ref2]').val();

          var name_ref3 = $(this).find('[name=name_ref3]').val();
          var phone_ref3 = $(this).find('[name=phone_ref3]').val();
          var email_ref3 = $(this).find('[name=email_ref3]').val();
          var position_ref3 = $(this).find('[name=position_ref3]').val();

          // var workplace2 = $(this).find('[name=workplace2]').val();
          alert('New content as: \n Names:' + name + '\nGender: ' + gender + '\nBirth Date: ' + date_of_birth + '\nEmail: ' + email);


          //alert('New user added as: \nFirst name:' + firstname + '\nSecond name: ' + secondname + '\nPhone number: ' + phonenumber + '\nEmail: ' + email);

          window.location.href = "reviews.html"
    });

});

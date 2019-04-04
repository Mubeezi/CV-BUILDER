/*$("form").on("submit", function(event) {
      event.preventDefault();
var inputOne = $(#textOne);
var inputTwo = $(#textTwo);
inputTwo.val(inputOne.val());
});
*/
/*var value_of_control = document.getElementById("#myInput");
alert(value_of_control);
console.log(value_of_control);*/

$(document).ready(function(event){

    $( "#form_1" ).submit(function( event ) {
          event.preventDefault();

          var name         = $('input[name=name]').val();
          var gender       = $('input[name=gender]').val();
          var email        = $(this).find('[name=email]').val();
          var email2       = $(this).find('[name=email2]').val();
          var address      = $(this).find('[name=address]').val();
          var telephone    = $(this).find('[name=telephone]').val();
          var date_of_birth = $(this).find('[name=date_of_birth]').val();
          var nationality      = $(this).find('[name=nationality]').val();
          
          var school1      = $(this).find('[name=school1]').val();
          var school2      = $(this).find('[name=school2]').val();
          var school3      = $(this).find('[name=school3]').val();
          var school4      = $(this).find('[name=school4]').val();
          var school5      = $(this).find('[name=school5]').val();
          var school6      = $(this).find('[name=school6]').val();
          var range1       = $(this).find('[name=range1]').val();
          var range2       = $(this).find('[name=range2]').val();
          var range3       = $(this).find('[name=range3]').val();
          var range4       = $(this).find('[name=range4]').val();
          var grade1       = $(this).find('[name=grade1]').val();
          var grade2       = $(this).find('[name=grade2]').val();
          var grade3       = $(this).find('[name=grade3]').val();
          var grade4       = $(this).find('[name=grade4]').val();
          var job1         = $(this).find('[name=job1]').val();
          var job2 = $(this).find('[name=job2]').val();
          var job3 = $(this).find('[name=job3]').val();
          var job-duration1 = $(this).find('[name=job-duration1]').val();
          var job-duration2 = $(this).find('[name=job-duration2]').val();
          var job-duration3 = $(this).find('[name=job-duration3]').val();
          var role1 = $(this).find('[name=role1]').val();
          var role2 = $(this).find('[name=role2]').val();
          var role3 = $(this).find('[name=role3]').val();
          var address1 = $(this).find('[name=address1]').val();
          var address2 = $(this).find('[name=address2]').val();
          var address3 = $(this).find('[name=address3]').val();
          var company1 = $(this).find('[name=company1]').val();
          var company2 = $(this).find('[name=company2]').val();
          var company3 = $(this).find('[name=company3]').val();
          var skill1 = $(this).find('[name=skill1]').val();
          var skill2 = $(this).find('[name=skill2]').val();
          var skill3 = $(this).find('[name=skill3]').val();
          var skill4 = $(this).find('[name=skill4]').val();
          var skill5 = $(this).find('[name=skill5]').val();
          var skill6 = $(this).find('[name=skill6]').val();
          var skill7 = $(this).find('[name=skill7]').val();
          var skill8 = $(this).find('[name=skill8]').val();
          var skill9 = $(this).find('[name=skill9]').val();
          var skill10 = $(this).find('[name=skill10]').val();
          var project1 = $(this).find('[name=project1]').val();
          var project2 = $(this).find('[name=project2]').val();
          var ref1 = $(this).find('[name=ref1]').val();
          var ref2 = $(this).find('[name=ref2]').val();
          var num1 = $(this).find('[name=num1]').val();
          var num2 = $(this).find('[name=num2]').val();
          var workplace1 = $(this).find('[name=workplace1]').val();
          var workplace2 = $(this).find('[name=workplace2]').val();



          //alert('New user added as: \nFirst name:' + firstname + '\nSecond name: ' + secondname + '\nPhone number: ' + phonenumber + '\nEmail: ' + email);

          //window.location.href = "index.html"
    });

});

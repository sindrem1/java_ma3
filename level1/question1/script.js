//Use RegEx to validate form

function ValidateForm() {
    
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var phonenumber = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    var firstnamePattern = /[a-zA-Z]/;
    var lastnamePattern = /[a-zA-Z]/;
    var phonePattern = /^\d\d\d\d\d\d\d\d/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var firstnameCheck = firstnamePattern.test(firstname);
    var lastnameCheck = lastnamePattern.test(lastname);
    var phoneCheck = phonePattern.test(phonenumber);
    var emailCheck = emailPattern.test(email); 


    if (firstnameCheck === false) {
        document.getElementById("fnameWarning").innerHTML = "Please fill in your first Name";
    }

    if (lastnameCheck === false) {
        document.getElementById("lnameWarning").innerHTML = "Please fill in your last name";
    }

    if (phoneCheck === false) {
        document.getElementById("phoneWarning").innerHTML = "Please fill in your Norwegian phonenumber (8-digits)";    
    }

    if (emailCheck === false) {
        document.getElementById("emailWarning").innerHTML = "Please fill in your email address.(eg.sindre@sindrem.no)";

    };
   };

    
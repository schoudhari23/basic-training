function validate() {
    if (myform.fn.value.length == 0) {
        document.getElementById("error").innerHTML = "Please provide your name ";
        document.myform.fn.value = "";
        //document.myform.fn.focus();
        return false;
    }
    if (document.myform.fathername.value == "") {
        document.getElementById("error").innerHTML = "Please provide your Father Name!";
        document.myform.ffn.value = "";
        //document.myform.ffn.focus() ;
        return false;
    }

    if (document.myform.paddress.value == "") {
        document.getElementById("error").innerHTML = "Please provide your Postal Address!";
        //document.myform.pa.focus() ;
         return false;
    }
    if (document.myform.personaladdress.value == "") {
        document.getElementById("error").innerHTML = "Please provide your Personal Address!";
        //document.myform.personaladdress.focus() ;
         return false;
    }
    if ((myform.sex[0].checked == false) && (myform.sex[1].checked == false)) {
        document.getElementById("error").innerHTML = "Please choose your Gender: Male or Female";
         return false;
    }
    if (document.myform.City.value == "-1") {
        document.getElementById("error").innerHTML = "Please provide your City!";
        // document.myform.City.focus() ;
          return false;
    }
    if (document.myform.Course.value == "-1") {
        document.getElementById("error").innerHTML = "Please provide your Course!";

          return false;
    }
    if (document.myform.District.value == "-1") {
        document.getElementById("error").innerHTML = "Please provide your Select District!";

          return false;
    }
    if (document.myform.State.value == "-1") {
        document.getElementById("error").innerHTML = "Please provide your Select State!";

         return false;
    }
    if (document.myform.pincode.value == "" ||
        isNaN(document.myform.pincode.value) ||
        document.myform.pincode.value.length != 6) {
        document.getElementById("error").innerHTML = "Please provide a pincode in the format ######.";
        // document.myform.pincode.focus() ;
         return false;
    }
    /*var email = document.myform.emailid.value;
     atpos = email.indexOf("@");
     dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
    {
        document.getElementById("error").innerHTML="Please enter correct email ID";
        document.myform.emailid.focus() ;
       // return false;
    }*/
    var email = document.myform.emailid.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        {
            document.getElementById("error").innerHTML = "Please enter correct email ID";
            // document.myform.emailid.focus() ;
            return false;
        }
    }

    if (document.myform.dob.value == "") {
        document.getElementById("error").innerHTML = "Please provide your DOB!";
        // document.myform.dob.focus() ;
        // return false;
    }
    if (document.myform.mobileno.value == "" ||
        isNaN(document.myform.mobileno.value) ||
        document.myform.mobileno.value.length != 10) {
        document.getElementById("error").innerHTML = "Please provide a Mobile No in the format 123.";
        // document.myform.mobileno.focus() ;
        // return false;
    }
    return (true);
}
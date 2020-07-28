				/*to make sure all fields have entry value*/
function validateForm() {
	var first = document.forms["myForm"]["FirstName"].value;
	var last = document.forms["myForm"]["LastName"].value;
	var middle = document.forms["myForm"]["Middle Name"].value;
	var db = document.forms["myForm"]["DateofBirth"].value;
	var gend = document.forms["myForm"]["Male"].value;
	var img = document.forms["myForm"]["Image"].value;

	while (first === "" || last === "" || middle === "" || db === "" || gend === "" || img === ""){
		if (first === ""){
			alert("First Name cannot be left blank");
		}

		if (last === ""){
			alert("Last Name cannot be left blank");
		}

		if (middle === ""){
			alert("Middle Name cannot be left blank");
		}

		if (db === ""){
			alert("Date of Birth cannot be left blank");
		}

		if (gend === ""){
			alert("Please select a Gender");
		}

		if (img === ""){
			alert("Image has to be uploaded");
		}

		return false;

	}
}





//DateofBirth validation and Age generator




function myAgeValidation() {

    var lre = /^\s*/;
    var datemsg = "";

    var inputDate = document.myForm.DateofBirth.value;
    inputDate = inputDate.replace(lre, "");
    document.myForm.DateofBirth.value = inputDate;
    datemsg = isValidDate(inputDate);
        if (datemsg != "") {
            alert(datemsg);
            return;
        }
        else {
            //Now find the Age based on the Birth Date
            getAge(new Date(inputDate));
        }

}

function getAge(birth) {

    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();

    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var birthday = birth.getDate();

    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;

    if(age_month < 0 || (age_month == 0 && age_day <0)) {
            age = parseInt(age) -1;
        }
    //alert(age);
	document.getElementById("theAge").innerHTML = age;

    //disable this part as it is now hosted and want anyone to use

    /*if ((age == 9 && age_month <= 0 && age_day <=0) || (age > 12) || (age <9)) {
	alert("Sorry, you cannot access this site.");
    return false;
    }
    else {
        alert("Welcome!");
    }*/

}

function isValidDate(dateStr) {


    var msg = "";
    // Checks for the following valid date formats:
    // MM/DD/YY   MM/DD/YYYY   MM-DD-YY   MM-DD-YYYY
    // Also separates date into month, day, and year variables

    // To require a 2 & 4 digit year entry, use this line instead:
    //var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{2}|\d{4})$/;
    // To require a 4 digit year entry, use this line instead:
    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;

    var matchArray = dateStr.match(datePat); // is the format ok?
    if (matchArray == null) {
        msg = "Date is not in a valid format.";
        return msg;
    }

    month = matchArray[1]; // parse date into variables
    day = matchArray[3];
    year = matchArray[4];


    if (month < 1 || month > 12) { // check month range
        msg = "Month must be between 1 and 12.";
        return msg;
    }

    if (day < 1 || day > 31) {
        msg = "Day must be between 1 and 31.";
        return msg;
    }

    if ((month==4 || month==6 || month==9 || month==11) && day==31) {
        msg = "Month "+month+" doesn't have 31 days!";
        return msg;
    }

    if (month == 2) { // check for february 29th
    var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    if (day>29 || (day==29 && !isleap)) {
        msg = "February " + year + " doesn't have " + day + " days!";
        return msg;
    }
    }

    if (day.charAt(0) == '0') day= day.charAt(1);

    //Incase you need the value in CCYYMMDD format in your server program
    //msg = (parseInt(year,10) * 10000) + (parseInt(month,10) * 100) + parseInt(day,10);

    return msg;	// date is valid
}



/*Collect form information*/

	var cName = document.getElementById("fName").value;
	var surname = document.getElementById("lName").value;
	var midName = document.getElementById("mName").value;
	var dateBorn = document.getElementById("dob").value;
	var howOld = document.getElementById("theAge").value;
	var sex = document.getElementById("gender").value;
	alert(cName);
	document.write(surname);

	function outputForm(cName, surname, midName, dateBorn, howOld, sex){
	alert(cName);
	document.getElementById("data1").innerHTML = cName;
	document.getElementById("data2").innerHTML = surname;
	document.getElementById("data3").innerHTML = midName;
	document.getElementById("data4").innerHTML = dateBorn;
	document.getElementById("data5").innerHTML = howOld;
	document.getElementById("data6").innerHTML = sex;
}

document.getElementById("form").onsubmit = function ()
{
	var errors = false;
	var name = document.getElementById("naam").value;
	var email = document.getElementById("email").value;
	
	if(name == "")
	{
		document.getElementById("errornaam").innerText = "Mag niet leeg zijn.";
		document.getElementById("errornaam").style.color = "#080122";
        document.getElementById("naam").style.border = "2px solid red";
		errors = true;
	}
	
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
 	if(email == "" || atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{
		document.getElementById("erroremail").innerText = "Emailadres klopt niet.";
		document.getElementById("erroremail").style.color = "#080122";
        document.getElementById("email").style.border = "2px solid red";
		errors = true;
	}

	if(errors == true)
	{
		return(false);
	}
}
function myFunction(event) {

    let firstName = document.getElementById("mustfirstName").value;
    let lastName = document.getElementById("mustLastName").value;
    
    document.getElementById('valid').innerHTML = '';
    document.getElementById('valid2').innerHTML = '';

    //Validtating regex
    var  regex = /^[a-zA-Z]+$/;
    if (!firstName.match(regex))
    { 
        document.getElementById("valid").innerHTML = "Invalid! FirstName Must Be String";
        event.preventDefault();

    }
    
    if (!lastName.match(regex))
    {
        document.getElementById("valid2").innerHTML = "Invalid! LastName Must Be String";
        event.preventDefault();

    }

  //  event.preventDefault();

}

  function StringOnlyFunc(evt) 
  {
	//evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if ( charCode > 48 && charCode < 57)
		return false;

	return true;
}
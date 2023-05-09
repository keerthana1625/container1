var movie = {};
  movie['movie1'] = ['10.00 am', '1.00 pm', '4.00 pm'];
  movie['movie2'] = ['11.00 am', '2.00pm', '5.00 pm'];
  movie['movie3'] = ['10.30 am', '1.15 pm', '6.00 pm'];
  
function ChangeCarList() 
{
    var carList = document.getElementById("car");
    var modelList = document.getElementById("carmodel");
    var selCar = carList.options[carList.selectedIndex].value;
    while (modelList.options.length) {
      modelList.remove(0);
    }
    var cars = movie[selCar];
    if (cars) {
      var i;
      for (i = 0; i < cars.length; i++) {
        var car = new Option(cars[i], i);
        modelList.options.add(car);
      }
    }
  } 

function validatebooking()
  {
    var val= document.getElementById('car').value;
    var m1="movie1";
    var m2="movie2";
    var m3="movie3";
    if (val==m1 || val==m2 || val==m3) 
    {
      return true;
    }
    else
    {
      alert("Please choose a Movie");
      return false;
    }
  }

function validatename() 
{
  var fname= document.getElementById('fname').value;
  var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
  if (rel.test(fname)) 
  {
    document.getElementById('fnameprompt').innerHTML="";
    return true;
  }
  else
  {
    document.getElementById('fnameprompt').style.color="red";
    document.getElementById('fnameprompt').innerHTML="Don't use any digits";
    return false;
  }
}

function validatepass() 
	{
		var passwordInput = document.getElementById('password-input');
    var password = passwordInput.value;
  
  if (validatePassword(password)) {
    document.getElementById('passprompt').innerHTML="";
    return true;
  } else {
    document.getElementById('passprompt').style.color="red";
    document.getElementById('passprompt').innerHTML="Use at least one small case letter, an uppercase letter, a digit, and a special character with a minimum password length of 8.";
    return false;
  }
};

function validatePassword(password) {

  var lowercaseRegex = /[a-z]/;
  var uppercaseRegex = /[A-Z]/;
  var digitRegex = /\d/;
  var specialCharRegex = /[!@#$%^&*()]/;
  
 
  if (
    password.length < 8 ||
    !lowercaseRegex.test(password) ||
    !uppercaseRegex.test(password) ||
    !digitRegex.test(password) ||
    !specialCharRegex.test(password)
  ) {
    return false;
  }
  
  return true;
	}

  function validatephone()
  {
    var phn= document.getElementById('phn').value;
    var re3= /^\d{10}$/;
    if(!re3.test(phn)|| phn === '0000000000')
    {
      document.getElementById('phnprompt').style.color="red";
      document.getElementById('phnprompt').innerHTML="Use correct format";
      return false;
    }
    else
    {
      document.getElementById('phnprompt').innerHTML="";
      return true;
    }
  }

  function submitalert()
  {
    if(validatename() || validatepass() || validatephone()){
      alert("Successfully Registered");
      return true;
    }
    else{
      alert("Invalid Details");
      return false;
    }
  }

  
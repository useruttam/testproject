function validate()
{
  alert("invalid");
    var username=document.getElementById("username").nodeValue;
    var password=document.getElementById("password").nodeValue;
  if(username=="myname" && password=="mypassword")
  {
      alert("login succesfull");
      return false;
  }
  else {
    alert("invalid details");
  }
}

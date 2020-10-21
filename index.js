function validateForm() {
  var name = document.getElementById('guest-name').value; 
  var email = document.getElementById('guest-email').value;
  var mes = document.getElementById('guest-mes').value;
 var text;
 // validate if empty or not
  if (name == "" || email == "" || mes == "") {
    text = "Please fill out the form completely.";
    } 
  else {
    text = "Thank you " + name + " " + email + ", we received your message.";
    }
// displays text 
    alert(text);
}

function validate(e)
{ 
e.preventdefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const message = document.getElementById("message").value;

let msg = '';
if (email == '')
{
    msg = "please enter your email.";
    message.style.colour = "red";
}
if (password == '' )
{
msg = "please enter your password.";  
message.style.colour = "red"; 
}    

message.innerText = msg;
}
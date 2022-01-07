const a = document.querySelector(".btn");
const b = document.querySelector(".btn2");
const p = document.querySelector("p");
a.addEventListener("click", function () {
  p.innerHTML = "I'm right";
});
b.addEventListener("click", function () {
  p.innerHTML = "No, I'm right!";
});


const newText=document.querySelector('h1')
function CheckPassword(inputtxt) 
{ 
var passw=12345678;
if(inputtxt.value.match(passw)) 
{ 
    alert('success')
    h1.innerHTML='correct'
return true;
}
else
{ 
alert('Wrong')
h1.innerHTML='wrong password'
return false;
}
}

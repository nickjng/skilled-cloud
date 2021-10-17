var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () { //esse addEventListener serve para adicionar um evento que nesse caso é o click, ao clicar no btnSignin,
 //ele vai fazer essa função, de receber um class "btnSignin"
   body.className = "btnSignin"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
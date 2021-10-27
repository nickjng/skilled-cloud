var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


 
function cadastro(){
    var mail = input_email.value;
    var pass_senha = input_senha.value;
    var nome = input_nome.value;
    var mail_entrar = input_entrar_email.value;
    var senha_entrar = input_entrar_senha.value;
    if(mail == "" || pass_senha == "" || nome == ""){
        alert("Todos os campos devem ser preenchidos");

    }
    
}
function entrar(){
    var mail_entrar = input_entrar_email.value;
    var senha_entrar = input_entrar_senha.value;
    if(mail_entrar == "" || senha_entrar == ""){
        alert("Todos os campos devem ser preenchidos");
    } else if (mail_entrar == "cliente123@skilledcloud.com" && senha_entrar == "123456"){
        window.location.href = "./dashboard-cliente.html";
       
    }else {
        alert("email ou senha incorretos")
    }
}
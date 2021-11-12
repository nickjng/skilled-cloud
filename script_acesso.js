var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


document.getElementById("signin").addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

document.getElementById("signup").addEventListener("click", function () {
    body.className = "sign-up-js";
})


 
function cadastro(){
    var mail = input_email.value;
    var pass_senha = input_senha.value;
    var nomeVar = input_nome.value;
    var cepVar = input_cep.value;
    var enderecoVar = input_endereco.value;
    var cnpjVar = input_cnpj.value;
    if (mail == "" || pass_senha == "" || nome == "") {
        alert("Todos os campos devem ser preenchidos");

    } else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nomeVar,
                email: mail,
                senha: pass_senha,
                cnpj: cnpjVar,
                cep: cepVar,
                endereco: enderecoVar
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                window.alert("Cadastro realizado com sucesso!");
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
}
function entrar(event){
    // console.log(event);
    // event.preventDefault();
    var mail_entrar = input_entrar_email.value;
    var senha_entrar = input_entrar_senha.value;
    if(mail_entrar == "" || senha_entrar == ""){
        alert("Todos os campos devem ser preenchidos");
    } else if (mail_entrar == "cliente123@skilledcloud.com" && senha_entrar == "123456"){
        window.location.href = "./dashboard.html";
       
    }else {
        alert("email ou senha incorretos")
    }
}
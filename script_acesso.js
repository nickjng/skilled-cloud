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
    if (pass_senha != "" && nomeVar != "" && cepVar != "" && enderecoVar != "" && cnpjVar != "" && mail != "") {
        if (mail.indexOf("@") > -1) {
            if (mail.indexOf(".com") > -1) {
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
                        input_email.value = '';
                        input_senha.value = '';
                        input_nome.value = '';
                        input_cep.value = '';
                        input_endereco.value = '';
                        input_cnpj.value = '';

                    } else {
                        throw ("Houve um erro ao tentar realizar o cadastro!");
                    }
                }).catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                });
            } else {
                alert("email ou senha invalido")
                document.getElementById("input_email").style.border = "1px solid red"
                document.getElementById("input_senha").style.border = "1px solid red"
                document.getElementById("input_nome").style.border = "1px solid red"
                document.getElementById("input_cnpj").style.border = "1px solid red"
                document.getElementById("input_endereco").style.border = "1px solid red"
                document.getElementById("input_cep").style.border = "1px solid red"
            }
        } else {

            alert("email ou senha invalido")
            document.getElementById("input_email").style.border = "1px solid red"
            document.getElementById("input_senha").style.border = "1px solid red"
            document.getElementById("input_nome").style.border = "1px solid red"
            document.getElementById("input_cnpj").style.border = "1px solid red"
            document.getElementById("input_endereco").style.border = "1px solid red"
            document.getElementById("input_cep").style.border = "1px solid red"
        }
    } else {
        alert("os campos precisam ser preenchidos")

        document.getElementById("input_email").style.border = "1px solid red"
        document.getElementById("input_senha").style.border = "1px solid red"
        document.getElementById("input_nome").style.border = "1px solid red"
        document.getElementById("input_cnpj").style.border = "1px solid red"
        document.getElementById("input_endereco").style.border = "1px solid red"
        document.getElementById("input_cep").style.border = "1px solid red"
    }
}


     
      

function entrar() {
    var emailVar = input_entrar_email.value;
    var senhaVar = input_entrar_senha.value;

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailVar == "" || senhaVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        document.getElementById("input_entrar_email").style.border = "1px solid red"
        document.getElementById("input_entrar_senha").style.border = "1px solid red"
        return false;
        
    } else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
            window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
            document.getElementById("input_entrar_email").style.border = "1px solid red"
            document.getElementById("input_entrar_senha").style.border = "1px solid red"
    } else {

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: emailVar,
            senha: senhaVar,
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_FABRICANTE = json.nomeFabricante;
                sessionStorage.ID_USUARIO = json.id;
                alert('Bem vindo!');
                window.location="./dashboard2.html";
                

            });

        } else {
            alert("Email ou senha incorretos!")
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}
}
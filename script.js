// Variavell global:
var theme_dark = false;

// Funções:
// modo dark:
function dark() {
    if (theme_dark == false) {
        theme_dark = true;
        photo_fundo.style.backgroundImage = "url(imgs/background_dark.jpg)"
        id_body.style.backgroundColor = "#141414"
        id_body.style.color = "white"
        a_inicio.style.color = "white"
        a_sobre.style.color = "white"
        a_simulador.style.color = "white"
        a_login.style.color = "white"
        foto_logo.innerHTML = `<img src="imgs/Logotipo_black_2.png" >`
        titulo.style.color = "#3B3B3B"
        divisao1.style.backgroundColor = "#141414"
        imagem_logo.src = "imgs/Logotipo_black_2.png"
        usuario.style.backgroundColor = "#474a51"
        quantidade.style.backgroundColor = "#474a51"
        tipo_vacina.style.backgroundColor = "#474a51"
        preco.style.backgroundColor = "#474a51"
        usuario.style.color = "#fff"
        quantidade.style.color = "#fff"
        tipo_vacina.style.color = "#fff"
        preco.style.color = "#fff"
        //  alert("tema escuro")
    } else {
        theme_dark = false
        photo_fundo.style.backgroundImage = "url(imgs/background_white.jpg)"
        id_body.style.backgroundColor = "white"
        id_body.style.color = "#3B3B3B"
        a_inicio.style.color = "black"
        a_sobre.style.color = "black"
        a_simulador.style.color = "black"
        a_login.style.color = "black"
        foto_logo.innerHTML = `<img src="imgs/skilled_cloud.png" >`
        titulo.style.color = "white"
        divisao1.style.backgroundColor = "white"
        imagem_logo.src = "./imgs/skilled_cloud.png"
        usuario.style.backgroundColor = "#fff"
        quantidade.style.backgroundColor = "#fff"
        tipo_vacina.style.backgroundColor = "#fff"
        preco.style.backgroundColor = "#fff"
        usuario.style.color = "#000"
        quantidade.style.color = "#000"
        tipo_vacina.style.color = "#000"
        preco.style.color = "#000"
        //  alert("tema claro")
    }
}
// simulador financeiro
function calculo() {
    var tipo = tipo_vacina.value; // a porcentagem de perdas é o id das options, dado fornecido pelo SUS 
    var perda = tipo * quantidade.value / 100; // porcentagem perdas * o quanto produz / 100 passando para porcentagem
    var lucro = quantidade.value - perda;
    var vantagem = perda * preco.value / 20; // valor das perdas * 20% resultando no que podemos proporcionar.

    impressao.innerHTML = `Com base em dados fornecidos pelo sistema publico de saúde 
            brasileiro, atualmente em média estima-se que o ${usuario.value} perde <b>${perda}</b> vacinas mensalmente. 
            Com a solução da Skilled Cloud, você terá um lucro 20% maior, isto é R$ <b>${vantagem},00</b>
            somados à sua receita atual por mês. `;

    impressao.style.display = 'block';

}
const idConselho = document.querySelector(".id-conselho");
const descricaoConselho = document.querySelector(".conselho-descricao");
const procurarConselho = document.querySelector(".procurar-conselho");

async function pegarConselho (){
    const resposta = await fetch ("https://api.adviceslip.com/advice");
    const conteudoConselho = await resposta.json();
    const numero = `advice #${conteudoConselho.slip.id}`;
    const textoConselho = `"${conteudoConselho.slip.advice}"`;

    idConselho.innerHTML = numero;
    descricaoConselho.innerHTML = textoConselho;

}

procurarConselho.addEventListener("click", pegarConselho);
pegarConselho();
const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-Resultado');
const textoResultado = document.querySelector('.texto-Resultado');

const perguntas = [
    {
        enunciado: "Insira o enunciado da pergunta 1",
        alternativa: ["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Insira o enunciado da Pergunta 2",
        alternativa: ["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Insira o enunciado da Pergunta 3",
        alternativa: ["Alternativa","Alternativa 2"]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
mostraPergunta();

function mostraAlternativas() {
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = 
        document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
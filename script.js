const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [ 
  {
    enunciado:"Qual é a cor dos seus olhos ?",
    alternativas:[
      "Azuis",
      "verdes",
    ]
    },
  {
  enunciado: "Pergunta 2"
    alternativas:[
  "Resposta 1",
  "Resposta 2",
    ]
  },
{
  enunciado:"Qual é a cor dos seus olhos ?",
  alternativas:[
    "Azuis",
    "verdes",
  ]
  },
  {
    enunciado:"Qual é a cor dos seus olhos ?",
    alternativas:[
      "Azuis",
      "verdes",
    ]
    },
    {
      enunciado:"Qual é a cor dos seus olhos ?",
      alternativas:[
        "Azuis",
        "verdes",
      ]
      },
];

let atual = 0;
let perguntAtual = perguntas[atual];

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
  botaoAlternativas.textContent= alternativa;
  caixaAlternativas.appendChild(botaoAlternativa);
  }
}


function mostraPergunta() {
perguntAtual = perguntas[atual];
  caixaPerguntas.textContent=perguntAtual.enunciado;
  mostraAlternativas();
   }
mostraPergunta();



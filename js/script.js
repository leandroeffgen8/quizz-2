const questions = [
    {
      "question": "Qual é a praia mais famosa de Maceió, conhecida por suas águas cristalinas e piscinas naturais?",
      "answers": [
        {
          "answer": "Praia de Ponta Verde",
          "correct": false
        },
        {
          "answer": "Praia de Pajuçara",
          "correct": true
        },
        {
          "answer": "Praia de Jatiúca",
          "correct": false
        },
        {
          "answer": "Praia de Barra de São Miguel",
          "correct": false
        },
      ]
    },
    {
      "question": "Em qual praia de Maceió você pode encontrar as jangadas que levam os turistas às famosas piscinas naturais?",
      "answers": [
        {
          "answer": "Praia de Guaxuma",
          "correct": false
        },
        {
          "answer": "Praia do Gunga",
          "correct": false
        },
        {
          "answer": "Praia de Ponta Verde",
          "correct": false
        },
        {
          "answer": "Praia de Pajuçara",
          "correct": true
        },
      ]
    },
    {
      "question": "Qual praia é mais indicada para a prática de esportes como kitesurf e windsurf em Maceió?",
      "answers": [
        {
          "answer": "Praia de Ponta Verde",
          "correct": false
        },
        {
          "answer": "Praia de Jatiúca",
          "correct": false
        },
        {
          "answer": "Praia de Cruz das Almas",
          "correct": true
        },
        {
          "answer": "Praia de Paripueira",
          "correct": false
        },
      ]
    },
    {
        "question": "Qual praia de Maceió é conhecida por suas falésias coloridas e paisagens deslumbrantes?",
        "answers": [
          {
            "answer": "Praia do Francês",
            "correct": true
          },
          {
            "answer": "Praia do Gunga",
            "correct": false
          },
          {
            "answer": "Praia de Barra de São Miguel",
            "correct": false
          },
          {
            "answer": "Praia de Jacarecica",
            "correct": false
          },
        ]
    },
    {
    "question": "Qual é a praia mais ao norte de Maceió, conhecida por suas águas tranquilas e propícias para banho?",
    "answers": [
        {
        "answer": "Praia de Ipioca",
        "correct": true
        },
        {
        "answer": "Praia de Guaxuma",
        "correct": false
        },
        {
        "answer": "Praia de Riacho Doce",
        "correct": false
        },
        {
        "answer": "Praia de Garça Torta",
        "correct": false
        },
    ]
    },
    {
    "question": "Em qual praia de Maceió está localizado o 'Mirante do Gunga,' um ponto turístico com vista panorâmica?",
    "answers": [
        {
        "answer": "Praia de Pajuçara",
        "correct": false
        },
        {
        "answer": "Praia de Ponta Verde",
        "correct": false
        },
        {
        "answer": "Praia de Cruz das Almas",
        "correct": false
        },
        {
        "answer": "Praia do Gunga",
        "correct": true
        },
        ]
    },
    {
    "question": "Qual praia de Maceió é ideal para os amantes do surf, com ondas propícias para a prática desse esporte?",
    "answers": [
        {
        "answer": "Praia de Riacho Doce",
        "correct": false
        },
        {
        "answer": "Praia de Guaxuma",
        "correct": true
        },
        {
        "answer": "Praia de Cruz das Almas",
        "correct": false
        },
        {
        "answer": "Praia de Jacarecica",
        "correct": false
        },
        ]
    },
    {
    "question": "Em qual praia de Maceió está localizado o Parque Municipal de Maceió, uma área de preservação ambiental?",
    "answers": [
        {
        "answer": "Praia de Garça Torta",
        "correct": true
        },
        {
        "answer": "Praia do Pontal da Barra",
        "correct": false
        },
        {
        "answer": "Praia do Gunga",
        "correct": false
        },
        {
        "answer": "Praia de Ipioca",
        "correct": false
        },
        ]
    },
];

const container = document.querySelector('.container');
const titleQuizz = document.querySelector('.title-quizz');
const contentQuizz = document.querySelector('.content-quizz');
const quizz = document.querySelector('.quizz');
const contentOptions = document.querySelector('.content-options');
const respostas = document.querySelector('.respostas');
const contentScore = document.querySelector('.content-score');

let actual = 0;
let points = 0;

function init(){    
    createQuestion(0);
}

function createQuestion(i){

    //Remove as respostas anteriores
    
    const buttons = respostas.querySelectorAll('button');
    buttons.forEach(function(btn){
        btn.remove();
    });

    //Alterar o titulo da pergunta
    const quizz = contentQuizz.querySelector('.quizz');
    quizz.textContent = questions[i].question;

    //Altera a quantidade de paginas conforme for selecionada.
    const qtdaPerguntas = titleQuizz.querySelector('.qtdaPerguntas');
    qtdaPerguntas.textContent = i + 1;

    //Total de perguntas
    const totalPerguntas = titleQuizz.querySelector('.totalPerguntas');
    totalPerguntas.textContent = questions.length;

    questions[i].answers.forEach(function(resposta){
        //Clone o html 
        const buttonClone = document.querySelector('.template-option').cloneNode('true');
        const opt = buttonClone.querySelector('.text');
        opt.textContent = resposta['answer'];       
        
        buttonClone.setAttribute('resposta-correta', resposta['correct']);
        
        buttonClone.classList.remove('hide');
        buttonClone.classList.remove('template-option');
       
        respostas.appendChild(buttonClone);       
        answersRandom();

        buttonClone.addEventListener('click', function(){
            checkAnswer(this);
        });

    });
   
    actual++;
}

function answersRandom() {   
   
    const buttons2 = respostas.querySelectorAll('button');
    //Duas maneiras de fazer
    //const buttons = Array.from(buttons2);
    const buttons = [...buttons2];

    buttons.sort(() => { return Math.random() - 0.5 });
    buttons.forEach( button => respostas.appendChild(button) );
}

function checkAnswer(btn){

    const buttons = respostas.querySelectorAll('button');
    
    // Verifica se é verdadeiro
    buttons.forEach(function(button){
        button.classList.add('active');
        if( button.getAttribute('resposta-correta') === 'true' ){
            button.classList.add('check-ok');
            if( btn === button ){
                points++;                
            }
        }else{
            button.classList.add('check-error');
        }
    });

    showAnswers();
  
}

function showAnswers(){

    setTimeout( () => {

        //Verifica se é a ultima pergunta
        if( actual >= questions.length ){
            showSucessMessage();
            return false;
        }

        //pula para a proxima pergunta
        createQuestion(actual);
        answersRandom();

    },1200);

}

function showSucessMessage(){

    hideBlocks();
    
    //calcula a porcentagem de acertos
    const score = ((points / questions.length) * 100).toFixed(2);
    const percent = contentScore.querySelector('.percent');
    percent.textContent = `${score}%`;
    
    const finish = contentScore.querySelector('h2');

    if( +score >= 100 ){
        finish.textContent = 'UAUUU! Você sabe tudo mesmo :)';
        percent.classList.add('alto');
    }else if( +score >= 50 ){
        finish.textContent = 'Parabéns!';
    }else if( +score <= 0 ){
        finish.textContent = 'Xiiii! Você não conhece Maceió :(';
        percent.classList.add('baixo');
    }else{
        finish.textContent = 'Você precisa vir mais vezes à Maceió';
    }

    //Calcula o total de acertos
    const correctAnswers = contentScore.querySelector('#correct-answers');
    correctAnswers.textContent = points;

    //Total de perguntas
    const questionsQty = contentScore.querySelector('#questions-qty');
    questionsQty.textContent = questions.length;

}

//add ou remove class para ocultar em determinado momento
function hideBlocks(){
    contentScore.classList.toggle('hide');
    titleQuizz.classList.toggle('hide');
    quizz.classList.toggle('hide');
    contentOptions.classList.toggle('hide');

    if(!contentOptions.classList.contains('paddingNone') && !contentQuizz.classList.contains('paddingNone')){
        container.classList.add('paddingNone');
        contentQuizz.classList.add('paddingNone');
    }else{
        container.classList.remove('paddingNone');
        contentQuizz.classList.remove('paddingNone');
    }
}

const restart = document.querySelector('#restart');

//Reenicia o quizz
restart.addEventListener('click', () => {
    actual = 0;
    points = 0;
    hideBlocks();
    answersRandom();
    init();
})

init();
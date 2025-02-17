let jogoAlugado = 0;

function contarJogosAlugados(){
    console.log(`Jogos alugados = ${jogoAlugado}`);
}

function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button'); 
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')){
            if(confirm(`Você tem certeza que deseja devolver esse Jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return')
            botao.textContent = 'Alugar';
            jogoAlugado --;
        }

    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';
        jogoAlugado++;
    }

    contarJogosAlugados();
    
}

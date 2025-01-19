 function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso'); //recupera elemento do form
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso.value == 'pista'){
        comprarPista(qtd);
    }else if (tipoIngresso.value == 'superior'){
        comprarSuperior(qtd);
    }else {
        comprarInferior(qtd);
    }
 }

 function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);//textContent mexe no texto do html
    if (qtd > qtdPista){
        alert('Quantidade de ingresso indisponível.');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert(' Compra realizada com sucesso.');
    }
 }

 function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);//textContent mexe no texto do html
    if (qtd > qtdSuperior){
        alert('Quantidade de ingresso indisponível.');
    } else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert(' Compra realizada com sucesso.');
    }
 }

 function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);//textContent mexe no texto do html
    if (qtd > qtdInferior){
        alert('Quantidade de ingresso indisponível.');
    } else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert(' Compra realizada com sucesso.');
    }
 }
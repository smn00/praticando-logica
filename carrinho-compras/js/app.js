let totalGeral = 0
limpar()

function adicionar(){
    
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];//slipt coloca em array escolec=os um separa dor e aparti dele dizemos a posição que queremos
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if(quantidade<=0){
        alert('Insira um valor maior que 0(zero)');
        return;
    }
    let totalPreco = quantidade * valorProduto;//calcula preço

    let carrinho = document.getElementById('lista-produtos');//adiciono no carinho 
    carrinho.innerHTML= carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
    </section>`

    totalGeral = totalGeral + totalPreco;//calcula o valor total
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = 0//zera o contador
}


function limpar() {
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0'
    
}
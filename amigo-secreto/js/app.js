 let amigos = [];
 
 function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo.value == ''){
        alert('Campo vazio, informe o nome a ser adicionado.');
        return;
    }
    if(amigos.includes(nomeAmigo.value)){
        alert('Já possui esse nome na lista');
        return;
    }
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    if (listaAmigos == ''){
        listaAmigos.textContent = nomeAmigo.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' +nomeAmigo.value;
    }
    nomeAmigo.value = '';
 }

 function sortear(){
    if (amigos.length < 4){
        alert('Informe pelo menos 4(quatro) nomes.');
        return;
    }
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }

 }

 function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

 function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

 }
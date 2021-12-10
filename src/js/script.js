const ul = document.querySelector('.containerListaProdutos ul');
const vitrineCarrinho = document.querySelector(".containerCarrinho ul")
let carrinhoCompra = [];

//FUNÇÃO PARA MONTAR TEMPLATE DO PRODUTO
function montarListaProdutos(listaProdutos,ul) {
    
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {

        const li        = document.createElement('li');
        const img       = document.createElement('img');
        const h3        = document.createElement('h3');
        const p         = document.createElement('p');
        const span      = document.createElement('span');
        const ol        = document.createElement('ol');
        const button    = document.createElement('button');

        img.src             = produto.img;
        img.alt             = produto.nome;
        h3.innerText        = produto.nome;
        p.innerText         = produto.preco;
        span.innerText      = produto.secao;
        button.innerText    = 'Adicionar ao Carrinho';
        button.id           = produto.id;
        button.addEventListener("click", interceptandoEvento);

        for(let i=0; i<produto.componentes.length; i++){
            const li2 = document.createElement('li');
            li2.innerText = produto.componentes[i];
            ol.appendChild(li2);
        }

        li.appendChild(img);
        li.appendChild(h3); 
        li.appendChild(p);
        li.appendChild(span);           
        li.appendChild(ol);
        li.appendChild(button);
        ul.appendChild(li);

    });
}


//FUNÇÃO PARA EXIBIR/BUSCAR PRODUTOS PELO NOME 
function exibirPorNomes() {
   
    const inputBusca = document.querySelector('input');

    const listaPorNome = produtos.filter((produto) => {
        return produto.nome === inputBusca.value;
    });

    montarListaProdutos(listaPorNome,ul);
    exibirPreço(listaPorNome);

    const botaoMostrarPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
    
    botaoMostrarPorNome.addEventListener('click', exibirPorNomes);
}
exibirPorNomes(); 

function exibirPorSecao() {
   
    const inputBusca = document.querySelector('input');

    const listaPorSecao = produtos.filter((produto) => {
        return produto.secao === inputBusca.value;
    });

    montarListaProdutos(listaPorSecao,ul);

    const botaoMostrarPorSecao = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
    
    botaoMostrarPorSecao.addEventListener('click', exibirPorSecao);
}
exibirPorSecao(); 

function exibirPorCategoria() {
   
    const inputBusca = document.querySelector('input');

    const listaPorCategoria = produtos.filter((produto) => {
        return produto.categoria === inputBusca.value;
    });

    montarListaProdutos(listaPorCategoria,ul);

    const botaoMostrarPorCategoria = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
    
    botaoMostrarPorCategoria.addEventListener('click', exibirPorCategoria);
}
exibirPorCategoria(); 

//FUNÇÃO PARA FILTRAR PRODUTOS DO HORTIFRUTI
function filtrarPorHortifruti() {
    
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti,ul);

    const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
    
    botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);
}
filtrarPorHortifruti(); 

//FUNÇÃO PARA EXIBIR TODOS OS PRODUTOS
function exibirTodosProdutos() {
    
    const listaTodos = produtos.filter((produto) => {
        return produto;
    });

    montarListaProdutos(listaTodos,ul);

    const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
    
    botaoMostrarTodos.addEventListener('click', exibirTodosProdutos);
}
exibirTodosProdutos(); 

//FUNÇÃO PARA ADICIONAR PREÇO
function exibirPreço(produtosFiltrados) {

    let precoTotal = document.getElementById('precoTotal');
    precoTotal.innerText = '';

    let precoProdutos = produtosFiltrados.reduce((acc,produtos) => acc+Number(produtos.preco),0);

    precoTotal.innerText = precoProdutos;
}

//FUNÇÃO PARA INTERCEPTAR CLIQUE
function interceptandoEvento(evt){
    
    const buttonComprar = evt.target.id; 
    adicionarProdutoCarrinho(buttonComprar);
}


//FUNÇÃO PARA ADICIONAR PRODUTOS AO CARRINHO
function adicionarProdutoCarrinho(buttonComprar){

    const produtoFiltrado  = produtos.find((produto)=>produto.id == buttonComprar);

    carrinhoCompra.push(produtoFiltrado);
    
    montarlistaCarrinho(carrinhoCompra,vitrineCarrinho);
    exibirPreço(carrinhoCompra);
}

function montarlistaCarrinho(listaProdutos,ul) {
    
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {

        const li       = document.createElement('li');
        const img      = document.createElement('img');
        const h3       = document.createElement('h3');
        const p        = document.createElement('p');
        const span     = document.createElement('span');

        img.src          = produto.img;
        img.alt          = produto.nome;
        h3.innerText     = produto.nome;
        p.innerText      = produto.preco;
        span.innerText   = produto.secao;

        li.appendChild(img);
        li.appendChild(h3); 
        li.appendChild(p);
        li.appendChild(span);           
        ul.appendChild(li);

    });
}



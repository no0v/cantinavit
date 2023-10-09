let carrinho = [];
let total = 0;

function adicionarProduto(preco) {
    carrinho.push(preco);
    atualizarCarrinho();
}


function atualizarCarrinho() {
    let listaCarrinho = document.getElementById("cart");
    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<li>Nenhum item no carrinho</li>";
    } else {
        carrinho.forEach(function (preco) {
            let item = document.createElement("li");
            item.innerText = `R$ ${preco.toFixed(2)}`;
            listaCarrinho.appendChild(item);
        });
    }

    total = carrinho.reduce(function (acumulador, preco) {
        return acumulador + preco;
    }, 0);

    document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Adicionar evento de clique para os botões "Adicionar ao Carrinho"
let botoesAdicionar = document.querySelectorAll(".add-to-cart");
botoesAdicionar.forEach(function (botao) {
    botao.addEventListener("click", function () {
        let preco = parseFloat(botao.getAttribute("data-price"));
        adicionarProduto(preco);
    });
});

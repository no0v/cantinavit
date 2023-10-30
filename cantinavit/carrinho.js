// Carrinho de compras
const cart = document.getElementById('cart');
const totalElement = document.getElementById('total');

// Função para adicionar um item ao carrinho
function addToCart(productName, productPrice) {
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - ${productPrice} reais`;
    cart.appendChild(listItem);

    // Atualizar o total
    const currentTotal = parseFloat(totalElement.textContent.replace('R$', '').trim());
    const newTotal = currentTotal + parseFloat(productPrice);
    totalElement.textContent = `R$ ${newTotal.toFixed(2)}`;
}

// Adicionar eventos de clique aos botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name'); // Obter o nome do produto
        const productPrice = this.getAttribute('data-price'); // Obter o preço do produto
        addToCart(productName, productPrice);
    });
});

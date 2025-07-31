const storeItems = [
    { name: "milk", price: 5 },
    { name: "eggs", price: 3 },
    { name: "cheese", price: 30 }
];

const storeItemsDiv = document.getElementById("store-items");
const cart = document.getElementById("cart");
const cartTotalSpan = document.getElementById("cart-total");

let total = 0;

storeItems.forEach(item => {
    const button = document.createElement("button");
    button.textContent = item.name;
    button.addEventListener("click", () => addToCart(item));
    storeItemsDiv.appendChild(button);
});

function addToCart(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;
    cart.appendChild(listItem);

    total += item.price;
    cartTotalSpan.textContent = total;
}

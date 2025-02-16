// Function to add item to cart
function addToCart(name, price) {
  const item = {
    name: coffee,
    price: 3.99
  };
  };
  localStorage.setItem("cartItem", JSON.stringify(item));
  alert("Item added to cart!");

// Function to populate cart page with item details
function populateCart() {
  const cartItem = localStorage.getItem("cartItem");
  if (cartItem) {
    const item = JSON.parse(cartItem);
    document.getElementById("item-name").textContent = item.name;
    document.getElementById("item-price").textContent = "$" + item.price.toFixed(2);
    document.getElementById("total").textContent = "Total: $" + item.price.toFixed(2);
  }
}

// Function to clear cart
function clearCart() {
  localStorage.removeItem("cartItem");
}
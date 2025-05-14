const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
let cart = [];
let totalPrice = 0;
const addToCart = (event) => {
  const itemName = event.target.dataset.name;
  const itemPrice = parseFloat(event.target.dataset.price);
  cart.push({ name: itemName, price: itemPrice });
  totalPrice += itemPrice;
  const cartItem = document.createElement('li');
  cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
  cartItemsList.appendChild(cartItem);
  totalPriceElement.textContent = totalPrice.toFixed(2);
  placeOrderButton.disabled = false;
};
addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});
const placeOrder = () => {
  if (cart.length === 0) return;
  alert('Order placed successfully!');
  cart = [];
  totalPrice = 0;
  cartItemsList.innerHTML = '';
  totalPriceElement.textContent = '0.00';
  placeOrderButton.disabled = true;
};
placeOrderButton.addEventListener('click', placeOrder);

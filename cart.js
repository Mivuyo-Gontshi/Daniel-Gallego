let cart = [];

// Load cart from localStorage
window.onload = function () {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    renderCart();
  }
};

// Add product to cart
function addToCart(product) {
  // Only add one product or increase quantity by 1 if it already exists
  const index = cart.findIndex(p => p.name === product.name);
  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  renderCart();
  if (typeof showToast === 'function') showToast('Added to cart!');
}

// Save cart
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Remove one quantity
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  saveCart();
  renderCart();
  if (typeof showToast === 'function') showToast('Item updated!');
}

// Remove item entirely
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
  if (typeof showToast === 'function') showToast('Removed from cart!');
}

// Calculate total
function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
}

// Render cart
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total");

  if (!container) return;

  // "+" button in cart uses increaseQuantity(index) only!
  container.innerHTML = cart.map((item, index) => `
    <li>
      ${item.name} - $${item.price.toFixed(2)} × ${item.quantity}
      <button onclick="increaseQuantity(${index})">+</button>
      <button onclick="decreaseQuantity(${index})">−</button>
      <button onclick="removeFromCart(${index})">Remove</button>
    </li>
  `).join('');

  if (totalContainer) {
    totalContainer.innerHTML = `<strong>Total: $${calculateTotal()}</strong>`;
  }

  // Animate cart pop
  container.classList.remove('cart-animate');
  void container.offsetWidth;
  container.classList.add('cart-animate');
}

// Only use addToCart(product) from product listing, NOT from within renderCart.
// In your product listing (not shown here), make sure the "+" button in the cart calls increaseQuantity(index)
// and NOT addToCart({name:..., price:...}) to avoid doubling.

function increaseQuantity(index) {
  cart[index].quantity += 1;
  saveCart();
  renderCart();
  if (typeof showToast === 'function') showToast('Added to cart!');
}

// Optional: Ensure cart is saved before leaving the page (not strictly necessary)
window.addEventListener('beforeunload', saveCart);



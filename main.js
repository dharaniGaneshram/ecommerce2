document.addEventListener("DOMContentLoaded", function () {

  // Mobile menu
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  updateCartCount();
});


// =======================
// ADD TO CART
// =======================
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert(name + " added to cart");
}


// =======================
// CART COUNT
// =======================
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}
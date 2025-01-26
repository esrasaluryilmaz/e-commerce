import { addToCart } from "./cart.js";
import { fetchProducts, renderProducts } from "./product.js";

const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".navbar");
//MenuIcon'a tiklaninca menuye bir class ekle cikar
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("/cart.html")) {
    console.log("Cart sayfasi");
  } else {
    // Eger anasayfadaysak api'a istek at ve verileri al
    const products = await fetchProducts();

    // Apiden gelen verileri render et
    renderProducts(products, (e) => {
      addToCart(e, products);
    });
  }
});

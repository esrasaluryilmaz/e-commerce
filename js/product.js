import elements from "./helpers.js";

//! Db.json'a istek atarak verileri alan fonk.

const fetchProducts = async () => {
  try {
    const res = await fetch("db.json");

    const data = await res.json();
    // Eger bir sikini varsa hata firlat
    if (!res.ok) {
      throw new Error("islem sirasinda bir hata gerceklesti");
    }
    // Bir hata yoksa datayi dondur
    return data;
  } catch (err) {
    console.log(`Hataaa: ${err}`);
    return [];
  }
};
//urunleri render eden fonk.
const renderProducts = (products) => {
  // Disaridan parametre olarak alinan degeri donerek bir html olusturur ve html ise productList icerisine aktarir
  elements.productList.innerHTML = products
    .map(
      (product) => `
   <div class="product">
          <img
            src="${product.image}"
            class="product-image"
            alt="product-image"
          />

          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price}</p>
            <a class="add-to-cart" ${product.id} >Add to cart</a>
          </div>
        </div>
`
    )
    .join("");
  //Elde edilen veri bir dizi oldugundan burada dizi elemanlarini nasil ayirmasi gerektigini belirledik
};
export { fetchProducts, renderProducts };

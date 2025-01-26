//! Sepete ekleme yapan fonk.

import { getFormLocalStorage, saveToLocalStorage } from "./utils.js";

const cart = getFormLocalStorage();

console.log(cart);

export const addToCart = (e, products) => {
  // Tiklanilan elemanin id sina eris
  const productId = parseInt(e.target.dataset.id);
  // Product icerisinden id'si bilinen elemana eris
  const product = products.find((product) => product.id === productId);

  if (product) {
    //Eger urun varsa cart dizisini kontroll

    //Eger spette urun varsa bunu exitingIteme aktar
    const exitingItem = cart.find((item) => item.id === productId);

    if (exitingItem) {
      exitingItem.quantity++;
    } else {
      // Erisilen elemanin verileriyle bir cart eleman objesi olustur
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };
      //Cart dizisine cartItem objesini ekle
      cart.push(cartItem);
    }
    //Cart dizisini locakstorage a ekle

    saveToLocalStorage(cart);
  }
};

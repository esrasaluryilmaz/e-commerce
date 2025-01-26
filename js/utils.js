const saveToLocalStorage = (cart) => {
  //Disaridan verilen elemani stringe cevir ve localstorage ekle
  localStorage.setItem("cart", JSON.stringify(cart));
};
const getFormLocalStorage = () => {
  // cart keyindeki tum elemanlari localstorage dan al

  const strData = localStorage.getItem("cart");

  // Eger strData varsa bunu JSON.parse donustur ve return et eger yoksa bos dizi return et
  return strData ? JSON.parse(strData) : [];
};
export { saveToLocalStorage, getFormLocalStorage };

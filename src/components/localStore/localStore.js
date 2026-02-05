const getItemToLocalStor = () => {
  const getItemCard = localStorage.getItem("cart");

  if (getItemCard) {
    const data = JSON.parse(getItemCard);
    return data;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringiFied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringiFied);
};

const addToLocalStorage = (id) => {
  const cart = getItemToLocalStor();
  //    cart.push(id)
  // or///
  if (!cart.includes(id)) cart.push(id);
  saveCartToLocalStorage(cart);
};

const removeFromLocalStore = (id) => {
  const storeCard = getItemToLocalStor();
  const remainingCard = storeCard.filter((storeId) => storeId !== id);
  saveCartToLocalStorage(remainingCard);
};

export {
  getItemToLocalStor as getStoreCard,
  addToLocalStorage as addToStoreCard,
  removeFromLocalStore as removeCartLs,
};

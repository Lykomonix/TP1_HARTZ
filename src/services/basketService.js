// services/basketService.js

const STORAGE_KEY = "basket";

function getAll() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveAll(basket) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(basket));
}

function add(item) {
  const basket = getAll();
  const existing = basket.find((i) => i.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    basket.push({ ...item, quantity: 1 });
  }

  saveAll(basket);
  return basket;
}

function remove(id) {
  const basket = getAll().filter((i) => i.id !== Number(id));
  saveAll(basket);
  return basket;
}

function updateQuantity(id, quantity) {
  let basket = getAll();

  if (quantity <= 0) {
    basket = basket.filter((i) => i.id !== Number(id));
  } else {
    const item = basket.find((i) => i.id === Number(id));
    if (item) item.quantity = quantity;
  }

  saveAll(basket);
  return basket;
}

function clearAll() {
  localStorage.removeItem(STORAGE_KEY);
}

function getCount() {
  return getAll().reduce((sum, i) => sum + i.quantity, 0);
}

function getTotal() {
  return getAll().reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export default {
  getAll,
  add,
  remove,
  updateQuantity,
  clearAll,
  getCount,
  getTotal
};
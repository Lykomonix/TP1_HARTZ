const STORAGE_KEY = "items";

const MOCK_ITEMS = [
  { id: 1, name: "T-shirt blanc", description: "T-shirt en coton bio, coupe classique.", price: 19.9 },
  { id: 2, name: "Jean slim", description: "Jean slim bleu délavé, taille haute.", price: 49.9 },
  { id: 3, name: "Sweat à capuche", description: "Sweat gris chiné, doublure polaire.", price: 39.9 },
  { id: 4, name: "Baskets blanches", description: "Baskets en cuir synthétique, semelle confort.", price: 59.9 },
  { id: 5, name: "Casquette noire", description: "Casquette ajustable, logo brodé.", price: 14.9 }
];

function seed() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_ITEMS));
  }
}

function getAll() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveAll(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function getById(id) {
  const items = getAll();
  return items.find((item) => item.id === Number(id));
}

function create(itemData) {
  const items = getAll();
  const newItem = {
    id: Date.now(),
    ...itemData,
  };
  items.push(newItem);
  saveAll(items);
  return newItem;
}

function update(id, updates) {
  const items = getAll();
  const index = items.findIndex((item) => item.id === Number(id));
  if (index === -1) {
    return null;
  }
  items[index] = { ...items[index], ...updates };
  saveAll(items);
  return items[index];
}

function remove(id) {
  const items = getAll();
  const filtered = items.filter((item) => item.id !== Number(id));
  if (filtered.length === items.length) {
    return false;
  }
  saveAll(filtered);
  return true;
}

function clearAll() {
  localStorage.removeItem(STORAGE_KEY);
}

export default {
  getAll,
  getById,
  create,
  update,
  remove,
  clearAll,
  seed
};
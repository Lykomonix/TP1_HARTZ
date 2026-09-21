const STORAGE_KEY = "account";

const DEFAULT_ACCOUNT = {
  role: "user"
};

function get() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { ...DEFAULT_ACCOUNT };
}

function save(account) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(account));
}

function getRole() {
  return get().role;
}

function isAdmin() {
  return getRole() === "admin";
}

function setAdmin() {
  const account = get();
  account.role = "admin";
  save(account);
  return account;
}

function setUser() {
  const account = get();
  account.role = "user";
  save(account);
  return account;
}

function reset() {
  localStorage.removeItem(STORAGE_KEY);
}

export default {
  get,
  getRole,
  isAdmin,
  setAdmin,
  setUser,
  reset
};
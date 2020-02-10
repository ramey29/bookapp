const WebStorage = window.localStorage;

function getItem(name: string) {
  return WebStorage.getItem(name);
}

function setItem(name: string, value: string) {
  return WebStorage.setItem(name, value);
}

function getCollectionItem(name: string) {
  return JSON.parse(WebStorage.getItem(name) || "{}");
}

function setCollectionItem(name: string, value: any) {
  return WebStorage.setItem(name, JSON.stringify(value));
}

function removeStoreItem(itemName: string) {
  localStorage.removeItem(itemName);
}

function clearStore() {
  localStorage.clear();
}

export default {
  getItem,
  setItem,
  getCollectionItem,
  setCollectionItem,
  removeStoreItem,
  clearStore
};

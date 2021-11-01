export function setLocalStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}

export function getLocalStorage(name) {
  const item = localStorage.getItem(name);
  return JSON.parse(item);
}

export function SetLocalStore(key, state) {
  if (key !== undefined) {
    window.localStorage.setItem(key, JSON.stringify(state));
    return state;
  }

  return null;
}

export function GetLocalStore(key) {
  const valueLocalStore = window.localStorage.getItem(key);
  if (!key || !valueLocalStore) return null;

  return JSON.parse(valueLocalStore);
}

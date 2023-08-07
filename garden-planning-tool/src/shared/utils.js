export function alphabetize(arr, key) {
  return arr.sort((a, b) => a[key] > b[key] ? 1 : -1);
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

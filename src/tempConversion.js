let celToFah = (cel) => {
  return ((cel * (9 / 5)) + 32);
}

let fahToCel = (fah) => {
  return ((fah - 32) * (5/9));
}

export {celToFah, fahToCel};
const celToFah = (cel) => ((cel * (9 / 5)) + 32);

const fahToCel = (fah) => ((fah - 32) * (5 / 9));

export { celToFah, fahToCel };
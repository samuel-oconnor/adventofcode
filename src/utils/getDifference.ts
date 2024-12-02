export default (a: number, b: number): number => {
  if (a < b) {
    return b - a;
  } else {
    return a - b;
  }
};

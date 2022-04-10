function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const generateColors3or6 = (a) => {
  const colors6 = [];
  while (colors6.length <= a - 1) {
    // let color = rand(1, 20);
    let color = `rgb(${rand(1, 254)}, ${rand(1, 254)}, ${rand(1, 254)})`;
    if (colors6.indexOf(color) === -1) {
      colors6.push(color);
    }
  }
  return colors6;
};

export { rand, generateColors3or6 };

// поиск случайного числа в диапозоне до 100
const numRandom = (min, max) => {
  const random = min + Math.random() * (max - min + 1);
  return Math.floor(random);
};

export default numRandom;

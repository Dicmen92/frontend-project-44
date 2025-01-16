import requestName from './games/cli.js';

// поиск случайного числа в диапозоне до 100
export const numRandom = () => {
  const numLimit = 100;
  return Math.floor(Math.random() * numLimit);
};

console.log('Welcome to the Brain Games!');
export const name = requestName();

export const gameLoop = (question, makingGame) => {
  // начинаем игру
  console.log(question);

  const success = makingGame();

  // При успешном выполнении условия в теле цикла завершаем игру
  if (success === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameLoop;

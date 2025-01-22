import requestName from './games/cli.js';

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

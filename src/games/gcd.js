import getRandomNumber from '../utils/random.js';
import gameLoop from '../index.js';

// Игра "НОД"

const gcd = (x, y) => {
  let a = x;
  let b = y;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const question = 'Find the greatest common divisor of given numbers.';

export function makingGame() {
  const numOne = getRandomNumber(0, 100);
  const numTwo = getRandomNumber(0, 100);

  console.log(`Question: ${numOne} ${numTwo}`);

  const exam = gcd(numOne, numTwo);

  // Возвращаем правильный ответ для проверки
  return { question: `${numOne} ${numTwo}`, correctAnswer: exam };
}

export default function startGcdGame() {
  gameLoop(question, makingGame);
}

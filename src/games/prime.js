import getRandomNumber from '../utils/random.js';
import gameLoop from '../index.js';

// Игра "Простое ли число?"

export const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Бизнес-логика: проверка на простое число
const isPrime = (num) => {
  if (num === 1) {
    return 'yes'; //
  }
  if (num === 0) {
    return 'no';
  }

  for (let index = 2; index <= Math.sqrt(num); index += 1) {
    if (num % index === 0) {
      // Если число делится на index, оно не простое
      return 'no';
    }
  }

  return 'yes';
};

export function makingGame() {
  const numOne = getRandomNumber(0, 100);

  console.log(`Question: ${numOne}`);

  // Проверка числа с помощью бизнес-логики
  const exam = isPrime(numOne);

  // Возвращаем правильный ответ для проверки
  return { question: `Is ${numOne} a prime number?`, correctAnswer: exam };
}

export default function startPrimeGame() {
  gameLoop(question, makingGame);
}

import getRandomNumber from '../utils/random.js';
import gameLoop from '../index.js';

// Игра "Простое ли число?"

export const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function makingGame() {
  // переменная для записи результа
  let exam = 0;

  // присваиваем числу результат функции numRandom()
  const numOne = getRandomNumber(0, 100);

  console.log(`Question: ${numOne}`);

  // проверяем число, которое должно делятся без остатка только на 1 и на само себя
  if (numOne === 1) {
    exam = 'yes';
  } else if (numOne === 0) {
    exam = 'no';
  } else {
    for (let index = 2; index <= numOne / 2; index += 1) {
      if (numOne % index !== 0) {
        exam = 'yes';
      } else {
        exam = 'no';
        break;
        // если при проверке число не простое то прерываем цикл
      }
    }
  }

  // Возвращаем правильный ответ для проверки
  return { question: `${numOne}`, correctAnswer: exam };
}

export default function startPrimeGame() {
  gameLoop(question, makingGame);
}

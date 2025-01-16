import readlineSync from 'readline-sync';
import gameLoop, { name, numRandom } from '../index.js';

// Игра "Простое ли число?"

export const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function makingGame() {
  // переменная для записи результа
  let exam = 0;
  // переменная для проверки успешного выполнения условия игры
  let result = 0;

  for (let i = 0; i < 3; i += 1) {
    // присваиваем числу результат функции numRandom()
    const numTemp = numRandom();

    console.log(`Question: ${numTemp}`);
    const answer = readlineSync.question('Your answer: ');

    // проверяем число, которое должно делятся без остатка только на 1 и на само себя
    if (numTemp === 1) {
      exam = 'yes';
    } else if (numTemp === 0) {
      exam = 'no';
    } else {
      for (let index = 2; index <= numTemp / 2; index += 1) {
        if (numTemp % index !== 0) {
          exam = 'yes';
        } else {
          exam = 'no';
          break;
          // если при проверке число не простое то прерываем цикл
        }
      }
    }

    // проверяем полученный результат с вводом пользователя
    if (answer === exam) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    }
  }
  return result;
}

export default function startPrimeGame() {
  gameLoop(question, makingGame);
}

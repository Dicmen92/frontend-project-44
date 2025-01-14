import readlineSync from 'readline-sync';
import { name, numRandom } from '../index.js';

// Игра "НОД"

export const question = 'Find the greatest common divisor of given numbers.';

export function makingGame() {
  // переменная для записи результа
  let exam = 0;
  // переменная для проверки успешного выполнения условия игры
  let result = 0;

  for (let i = 0; i < 3; i += 1) {
    const numOne = numRandom();
    const numTwo = numRandom();

    console.log(`Question: ${numOne} ${numTwo}`);

    let max = 0;
    let min = 0;

    // определяем из двух большее число
    if (numOne > numTwo) {
      max = numOne;
      min = numTwo;
    } else {
      max = numTwo;
      min = numOne;
    }

    // если большее число делится на меньшее без остатка, значит выводим тот результат
    if (max % min === 0) {
      exam = min;
    // если одно из чисел равно 0, значит выводим соседнее число
    } else if (min === 0) {
      exam = max;
    } else {
    // если большее число делится на меньшее без остатка, значит выводим тот результат
      let temp = max % min;
      // алгоритм Евклида
      while (temp !== 0) {
        exam = temp;
        temp = max % temp;
        if (temp !== 0) {
          exam = temp;
        }
      }
    }

    // одно из чисел простое (делится только на само себя и единицу) - дополнительная проверка
    if (max % exam !== 0 || min % exam !== 0) {
      exam = 1;
    }

    const answer = readlineSync.question('Your answer: ');

    // проверяем полученный результат с вводом пользователя
    if (Number(answer) === exam) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${exam}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  return result;
}

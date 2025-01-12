import readlineSync from 'readline-sync';
import { name, numRandom } from '../index.js';

// Игра "Арифметическая прогрессия"

export const question = 'What number is missing in the progression?';

export function makingGame() {
  // переменная для записи результа
  let exam = 0;
  // переменная для проверки успешного выполнения условия игры
  let result = 0;

  // поиск случайного числа в диапозоне до 10
  const numRandomTemp = () => {
    const numLimit = 10;
    return Math.floor(Math.random() * numLimit);
  };

  for (let i = 0; i < 3; i += 1) {
    const numOne = numRandom();
    const numTwo = numRandomTemp();
    const arr = [];

    exam = numOne;

    for (let index = 0; index < 10; index += 1) {
      exam += numTwo;
      arr.push(exam);
    }

    console.log(`Question: ${arr}`);

    const temp = numRandomTemp();
    console.log(temp);
    console.log(arr[temp]);

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

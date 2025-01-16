import readlineSync from 'readline-sync';
import gameLoop, { name, numRandom } from '../index.js';

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
    const arrShow = arr.concat([]);
    const temp = numRandomTemp();

    arr[temp] = '..';

    console.log(`Question: ${arr.join(' ')}`);

    const answer = readlineSync.question('Your answer: ');

    // проверяем полученный результат с вводом пользователя
    if (Number(answer) === arrShow[temp]) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${arrShow[temp]}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  return result;
}

export default function startProgresGame() {
  gameLoop(question, makingGame);
}

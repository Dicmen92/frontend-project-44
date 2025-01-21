import readlineSync from 'readline-sync';
import numRandom from '../utils/random.js';
import gameLoop, { name } from '../index.js';

// Игра "Арифметическая прогрессия"

export const question = 'What number is missing in the progression?';

export function makingGame() {
  // переменная для записи результа
  let exam = 0;
  // переменная для проверки успешного выполнения условия игры
  let result = 0;

  for (let i = 0; i < 3; i += 1) {
    const numOne = numRandom(0, 100);
    const numTwo = numRandom(0, 10);
    const arr = [];

    exam = numOne;

    for (let index = 0; index < 10; index += 1) {
      exam += numTwo;
      arr.push(exam);
    }
    const arrShow = arr.concat([]);
    const temp = numRandom(0, 10);

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

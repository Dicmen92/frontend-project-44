import numRandom from '../utils/random.js';
import gameLoop from '../index.js';

// Игра "Арифметическая прогрессия"

export const question = 'What number is missing in the progression?';

export function makingGame() {
  // переменная для записи результа
  let exam = 0;

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

  // Возвращаем вопрос и правильный ответ для проверки 

  return { question: `${arr.join(' ')}`, correctAnswer: `${arrShow[temp]}`};
}

export default function startProgresGame() {
  gameLoop(question, makingGame);
}

import getRandomNumber from '../utils/random.js';
import gameLoop from '../index.js';

// Игра "Арифметическая прогрессия"

export const question = 'What number is missing in the progression?';

const getProgression = (initialNum, step, numЕlem) => {
  const arr = [];
  let init = initialNum;

  for (let index = 0; index < numЕlem; index += 1) {
    init += step;
    arr.push(init);
  }

  return arr;
};

const convertArray = (arr) => {
  const result = arr;
  const arrShow = result.concat([]);
  const temp = getRandomNumber(0, result.length - 1);
  result[temp] = '..';
  console.log(`Question: ${result.join(' ')}`);

  return arrShow[temp];
};

export function makingGame() {
  const numOne = getRandomNumber(0, 100);
  const step = getRandomNumber(0, 10);
  const arrLength = getRandomNumber(5, 10);

  const arr = getProgression(numOne, step, arrLength);
  const arrShow = convertArray(arr);

  // Возвращаем вопрос и правильный ответ для проверки
  return { question: `${arr.join(' ')}`, correctAnswer: `${arrShow}` };
}

export default function startProgresGame() {
  gameLoop(question, makingGame);
}

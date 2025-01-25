import getRandomNumber from '../utils/random.js';
import gameLoop from '../index.js';

// Игра "Арифметическая прогрессия"

export const question = 'What number is missing in the progression?';

const getProgression = (initial, step, numЕlem) => {
  const arr = [];
  
  for (let index = 0; index < numЕlem; index += 1) {
    initial += initial + step;
    arr.push[initial];
  }

  return arr;
};

export function makingGame() {
  let exam = 0;

  const numOne = getRandomNumber(0, 100);
  const numTwo = getRandomNumber(0, 10);
  const arr = [];

  exam = numOne;

  for (let index = 0; index < 10; index += 1) {
    exam += numTwo;
    arr.push(exam);
  }

  const arrShow = arr.concat([]);
  const temp = getRandomNumber(0, 10);

  arr[temp] = '..';

  console.log(`Question: ${arr.join(' ')}`);

  // Возвращаем вопрос и правильный ответ для проверки
  return { question: `${arr.join(' ')}`, correctAnswer: `${arrShow[temp]}` };
}

export default function startProgresGame() {
  gameLoop(question, makingGame);
}

import readlineSync from 'readline-sync';
import gameLoop, { name, numRandom } from '../index.js';

// Игра: "Проверка на чётность"

export const question = 'Answer "yes" if the number is even, otherwise answer "no".';

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

    // проверяем число на чётность, и записываем результат в переменную
    if (numTemp % 2 === 0) {
      exam = 'yes';
    } else {
      exam = 'no';
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

export default function startEvenGame() {
  gameLoop(question, makingGame);
}

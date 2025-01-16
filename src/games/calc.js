import readlineSync from 'readline-sync';
import gameLoop, { name, numRandom } from '../index.js';

// Игра: "Калькулятор"

const question = 'What is the result of the expression?';

function makingGame() {
  // переменная для записи результа
  let exam = 0;
  // переменная для проверки успешного выполнения условия игры
  let result = 0;

  for (let i = 0; i < 3; i += 1) {
    const numOne = numRandom();
    const numTwo = numRandom();
    let sign = numRandom();

    if (sign <= 33) {
      sign = '-';
    } else if (sign > 33 && sign <= 66) {
      sign = '+';
    } else {
      sign = '*';
    }

    console.log(`Question: ${numOne} ${sign} ${numTwo}`);

    if (sign === '-') {
      exam = numOne - numTwo;
    } else if (sign === '+') {
      exam = numOne + numTwo;
    } else {
      exam = numOne * numTwo;
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

export default function startCalcGame() {
  gameLoop(question, makingGame);
}

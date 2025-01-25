import getRandomNumber from '../utils/random.js';
import gameLoop from '../index.js';

// Игра: "Калькулятор"

const question = 'What is the result of the expression?';

function makingGame() {
  let exam = 0;

  const numOne = getRandomNumber(0, 100);
  const numTwo = getRandomNumber(0, 100);

  // Определяем операцию +, - или *
  const getRandomOperation = () => {
    const operation = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operation.length);
    return operation[randomIndex];
  };

  const sign = getRandomOperation();

  switch(sign) {
    case '-':
      exam = numOne - numTwo;
      break;
    case '+':
      exam = numOne + numTwo;
      break;
    case '*':
      exam = numOne * numTwo;
      break;
    default:
      // значение по умолчанию, если операция не распознана
      exam = 0;
      break;
  }

  console.log(`Question: ${numOne} ${sign} ${numTwo}`);

  // Возвращаем правильный ответ для проверки
  return { question: `${numOne} ${sign} ${numTwo}`, correctAnswer: exam };
}

export default function startCalcGame() {
  gameLoop(question, makingGame);
}

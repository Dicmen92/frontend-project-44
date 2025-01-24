import getRandomNumber from '../utils/random.js';
import gameLoop from '../index.js';

// Игра: "Калькулятор"

const question = 'What is the result of the expression?';

function makingGame() {
  // переменная для записи результа
  let exam = 0;

  // Генерация 3 вопросов
  const numOne = getRandomNumber(0, 100);
  const numTwo = getRandomNumber(0, 100);
  let sign = getRandomNumber(0, 100);

  // Определяем операцию +, - или *
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

  // Возвращаем правильный ответ для проверки
  return { question: `${numOne} ${sign} ${numTwo}`, correctAnswer: exam };
}

export default function startCalcGame() {
  gameLoop(question, makingGame);
}

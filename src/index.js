import readlineSync from 'readline-sync';
import requestName from './games/cli.js';

console.log('Welcome to the Brain Games!');
export const name = requestName();

export const gameLoop = (question, makingGame) => {
  // Счетчик правильных ответов
  let result = 0;
  // определяем тип ответа
  let answer = '';

  console.log(question);

  for (let i = 0; i < 3; i += 1) {
    // Получаем правильный ответ (при необходимости добавить переменную question
    // если захотим увидеть вопрос)
    const { correctAnswer, standardOut } = makingGame();

    // Запрашиваем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');

    // Условие проверки на число
    // if (Number.isInteger(+userAnswer)) {
    //   answer = Number(userAnswer);
    // } else {
    //   answer = String(userAnswer);
    // }

    if (typeof correctAnswer === 'string') {
      answer = String(userAnswer);
    } else {
      answer = Number(userAnswer);
    }

    if (Number.isNaN(answer)) {
      answer = String(userAnswer);
    }

    if (answer === correctAnswer) {
      console.log('Correct!');
      result += 1;
    } else if (standardOut) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      // Прерываем игру при неправильном ответе
      break;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      // Прерываем игру при неправильном ответе
      break;
    }
  }

  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameLoop;

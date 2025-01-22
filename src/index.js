import requestName from './games/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const name = requestName();

export const gameLoop = (question, makingGame) => {
  console.log(question);

  // Счетчик правильных ответов
  let result = 0;  
  // определяем тип ответа
  let answer = '';

  for (let i = 0; i < 3; i++) {
    // Получаем вопрос и правильный ответ
    const { correctAnswer } = makingGame(); 

    // Запрашиваем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: '); 

    if (!isNaN(userAnswer)) {
      answer = Number(userAnswer);
    } else {
      answer = String(userAnswer);
    }

    if (answer === correctAnswer) {
      console.log('Correct!');
      result += 1;
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

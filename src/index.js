import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

// запрос имени пользователя
function getName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export const name = getName();

export const gameLoop = (question, makingGame) => {
  let result = 0;
  let answer = '';

  console.log(question);

  for (let i = 0; i < 3; i += 1) {
    // Получаем правильный ответ
    const { correctAnswer, standardOut } = makingGame();

    const userAnswer = readlineSync.question('Your answer: ');

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
      break;
    }
  }

  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameLoop;

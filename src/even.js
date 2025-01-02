import readlineSync from 'readline-sync';

export default function checkParity() {
  // поиск случайного числа
  const numRandom = () => {
    const numLimit = 100;
    return Math.floor(Math.random() * numLimit);
  };

  // переменная для записи результа четности/нечетности
  let exam = '';

  // переменная для проверки успешного выполнения условия игры
  let result = 0;

  // начинаем игру "brain-even"
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

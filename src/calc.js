import readlineSync from 'readline-sync';

export default function findMathOperation() {
  // поиск случайного числа
  const numRandom = () => {
    const numLimit = 100;
    return Math.floor(Math.random() * numLimit);
  };

  // переменная для записи результа четности/нечетности
  let exam = '';

  // переменная для проверки успешного выполнения условия игры
  let result = 0;

  // начинаем игру "brain-calc"
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    // присваиваем числу результат функции numRandom()
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

  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

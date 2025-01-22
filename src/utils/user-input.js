// проверяем полученный результат с вводом пользователя

import requestName from '../games/cli.js';

const name = requestName();

export default function inputValid(answer, exam) {
  let result = 0;
  if (Number(answer) === exam) {
    console.log('Correct!');
    result += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${exam}'.\nLet's try again, ${name}!`);
  }
  return result;
}

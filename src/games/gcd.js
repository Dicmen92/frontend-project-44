import readlineSync from 'readline-sync';
import { name, numRandom } from '../index.js';

export const question = 'Find the greatest common divisor of given numbers.';

export function makingGame() {
  // переменная для записи результа
  let exam = 0;
  // переменная для проверки успешного выполнения условия игры
  let result = 0;

  for (let i = 0; i < 3; i += 1) {
    const numOne = numRandom();
    const numTwo = numRandom();

    console.log(`Question: ${numOne} ${numTwo}`);

    // алгоритм Евклида
    if (numTwo === 0) {
      exam = numOne;
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

// /*Запросить 2 числа и найти только наибольший общий делитель.*/

// const nod = (n, m) => {
//   if (m !== 0) {
//     const k = n % m;
//     return nod(m, k);
//   }
//   return n;
// };

// alert('Введите 2 число, что бы найти НОД')
// let numb1 = prompt('Введите первое число');
// let numb2 = prompt('Введите второе число');
// alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + nod(numb1, numb2));

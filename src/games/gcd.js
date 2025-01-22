import numRandom from '../utils/random.js';
import gameLoop from '../index.js';

// Игра "НОД"

export const question = 'Find the greatest common divisor of given numbers.';

export function makingGame() {
  // переменная для записи результа
  let exam = 0;

  for (let i = 0; i < 3; i += 1) {
    const numOne = numRandom(0, 100);
    const numTwo = numRandom(0, 100);

    console.log(`Question: ${numOne} ${numTwo}`);

    let max = 0;
    let min = 0;

    // определяем из двух большее число
    if (numOne > numTwo) {
      max = numOne;
      min = numTwo;
    } else {
      max = numTwo;
      min = numOne;
    }

    // если большее число делится на меньшее без остатка, значит выводим тот результат
    if (max % min === 0) {
      exam = min;
    // если одно из чисел равно 0, значит выводим соседнее число
    } else if (min === 0) {
      exam = max;
    } else {
    // если большее число делится на меньшее без остатка, значит выводим тот результат
      let temp = max % min;
      // алгоритм Евклида
      while (temp !== 0) {
        exam = temp;
        temp = max % temp;
        if (temp !== 0) {
          exam = temp;
        }
      }
    }

    // одно из чисел простое (делится только на само себя и единицу) - дополнительная проверка
    if (max % exam !== 0 || min % exam !== 0) {
      exam = 1;
    }

    // Возвращаем правильный ответ для проверки
    return { question: `${numOne} ${numTwo}`, correctAnswer: exam };
  }
}

export default function startGcdGame() {
  gameLoop(question, makingGame);
}

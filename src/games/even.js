import numRandom from '../utils/random.js';
import gameLoop from '../index.js';

// Игра: "Проверка на чётность"

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

function makingGame() {
  // переменная для записи результа
  let exam = 0;
  
 // Генерация 3 вопросов
  for (let i = 0; i < 3; i += 1) {
    // присваиваем числу результат функции numRandom()
    const numOne = numRandom(0, 100);

    console.log(`Question: ${numOne}`);

    // проверяем число на чётность, и записываем результат в переменную
    if (numOne % 2 === 0) {
      exam = 'yes';
    } else {
      exam = 'no';
    }

   // Возвращаем правильный ответ для проверки
   return { question: `${numOne}`, correctAnswer: exam };
  }
}

export default function startEvenGame() {
  gameLoop(question, makingGame);
}

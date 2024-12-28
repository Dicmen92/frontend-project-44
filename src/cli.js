import readlineSync from 'readline-sync';

export default function requestName () {
const name = readlineSync.question('May I have your name? ');
return console.log(`Hello, ${name}!`);
}
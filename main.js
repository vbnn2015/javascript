//Задача 9.10 Анализ коллекции космических артефактов

// const arr = {
//   A101: { type: "метеорит", year: 1890, exhibits: 15 },
//   A102: { type: "луноход", year: 1973, exhibits: 20 },
//   A103: { type: "скафандр", year: 1969, exhibits: 12 },
//   A104: { type: "спутник", year: 1957, exhibits: 20 },
//   A105: { type: "луноход", year: 1971, exhibits: 10 },
// };

// for (const key in arr) {
//   console.log(
//     `Артефакт ${key}: Тип - ${arr[key].type}, Год - ${arr[key].year}, Показы - ${arr[key].exhibits}`,
//   );
// }
// console.log("");
// console.log(
//   "Артефакты с наибольшим количеством показов (количество показов ):",
// );
//______________________

// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 3);
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7));

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// "use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: "false",
// };
// const posledniProsmotreniy = prompt(
//   "Один из последних просмотренных фильмов?",
//   "",
// );
// const o4nkaFilma = prompt("На сколько оцените его?", "");

// const a = prompt("Один из последних просмотренных фильмов?", "");
// const b = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[posledniProsmotreniy] = o4nkaFilma;
// personalMovieDB.movies[a] = b;
// console.log(personalMovieDB);

//Задачи
"use strict";

const arr = [
  { name: "Ноут", price: 30000, dostavka: 500 },
  { name: "Смартфон", price: 10000, dostavka: 1000 },
  { name: "Планшет", price: 25000, dostavka: 1000 },
];

// arr.forEach((fun) => {
//   const allPrice = fun.price + fun.dostavka;
//   console.log(allPrice);
// });

for (const key in arr) {
  console.log(arr[key]);
}

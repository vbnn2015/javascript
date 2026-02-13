"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: "false",
};
const posledniProsmotreniy = prompt(
  "Один из последних просмотренных фильмов?",
  "",
);
const o4nkaFilma = prompt("На сколько оцените его?", "");

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько оцените его?", "");

personalMovieDB.movies[posledniProsmotreniy] = o4nkaFilma;
personalMovieDB.movies[a] = b;
console.log(personalMovieDB);
console.log(personalMovieDB);

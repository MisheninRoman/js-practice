"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("Последний просмотренный фильм?", "");
const b = +prompt("На сколько его оцените?", "");
const c = prompt("Последний просмотренный фильм?", "");
const d = +prompt("На сколько его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

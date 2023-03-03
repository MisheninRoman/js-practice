"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Последний просмотренный фильм?", ""),
      b = +prompt("На сколько его оцените?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 51) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("FU");
      i--;
    }
  }
}

rememberMyFilms();

function detecPersonalLvl() {
  if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log("слишком мало");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("не плохо, но можно и лучше");
  } else if (personalMovieDB.count >= 30) {
    console.log("да вы человек голубых кровей");
  } else if (personalMovieDB.count < 1) {
    console.log("ты кажется ошибся!");
  } else {
    console.log("error");
  }
}
detecPersonalLvl();

function showMyDB() {
  if (personalMovieDB.private != true) {
    console.log(personalMovieDB);
  } else {
    console.log("is private");
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый ${i} жанр `, "");
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

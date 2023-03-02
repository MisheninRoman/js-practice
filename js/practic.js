"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

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

if (personalMovieDB.count < 10) {
  console.log("слишком мало");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("не плохо, но можно и лучше");
} else if (personalMovieDB.count > 30) {
  console.log("да вы человек голубых кровей");
}

console.log(personalMovieDB);

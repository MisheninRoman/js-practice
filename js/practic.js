"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: () => {
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
  },
  detecPersonalLvl: () => {
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
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый ${i} жанр `, "");

      if (genre == "" || genre == null) {
        console.log("incorrect");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};

// function copyPersonalMDB(mainObj) {
//   let DBCopy = {};
//   let key;

//   for (key in mainObj) {
//     DBCopy[key] = mainObj[key];
//   }

//   return DBCopy;
// }

// const newPersonalMDB = copyPersonalMDB(personalMovieDB);

// console.log(newPersonalMDB);

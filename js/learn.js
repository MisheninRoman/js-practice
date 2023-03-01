"use strict";

alert("Внимание! Сейчас будут задаваться вопросы");

const isOk = confirm("Вы готовы на них ответить?");
const answers = [];

answers[0] = prompt("Ваше имя?", "");
answers[1] = prompt("Ваша фамилия?", "");
answers[2] = +prompt("Сколько вам лет?", "");
answers[3] = prompt("Как зовут вашего мужа?", "");
answers[4] = confirm("Вы его любите?");

document.write(answers);

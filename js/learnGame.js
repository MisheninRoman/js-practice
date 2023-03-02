"use strict";

alert(
  "Внимание! Вы очнулись в каком-то подземелье и слышите чей-то мерзкий голос"
);

const statHero = {
  // персонаж
  name: {},
  race: {},
  health: [],
  strong: [],
  armor: [],
};

for (let i = 0; i < 1; i++) {
  // цикл задающий уточняющие вопросы
  const nameHero = prompt("Представься, жалкое существо!", "");
  const species = prompt(
    `Чтож ${nameHero}, к какой рассе ты принадлежишь?`,
    ""
  );
  if (nameHero != null && species != null && nameHero != "" && species != "") {
    statHero.name = nameHero;
    statHero.race = species;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
  if (species === "human") {
    // условие которое проверяет текст и на основе этого присваивает значения
    statHero.health = 100;
    statHero.strong = 100;
  } else if (species === "dwarf") {
    statHero.health = 150;
    statHero.strong = 120;
  } else if (species === "elf") {
    statHero.health = 140;
    statHero.strong = 150;
  } else if (species === "fairy") {
    statHero.health = 80;
    statHero.strong = 200;
  } else {
    alert("Введи название из представленных в подсказке!");
    i--;
  }
  if (statHero.race === "human") {
    alert(`Жалкий человечешка, надеюсь ты не выйдешь из этого подземелья!`);
  } else if (statHero.race === "dwarf") {
    alert(`Мелкий дварф! Ты пятно на этом свете! Надеюсь ты умрешь!`);
  } else if (statHero.race === "elf") {
    alert(`Мерзкий ельф! Ты пропадешь в этом подземелье!`);
  } else if (statHero.race === "fairy") {
    alert(
      `Милая феечка, я не знаю как ты попала сюда, но надеюсь ты сможешь выбраться!`
    );
  }
}

alert(
  "Голос стих, вы медленно встаете и пытаеетесь сориентироваться на местности"
);

const chest = prompt(
  "Вы идете по тоннелю и замечаете в метрах 100 от себя сундук, вы подойдете к нему?",
  ""
);

if (chest === "нет") {
  alert("Вы прошли мимо сундука и направились вглубь тонелля");
} else if (chest === "да") {
  alert("Вы подошли к сундуку и открыли его");
  function getRandomInt() {
    // функция рандома выпавшего из сундука
    return Math.floor(Math.random() * 4); // генерируем случайное число от 0 до 3 включительно
  }
  getRandomInt();

  if (getRandomInt() == 0) {
    // условие которое дает + к статистике персонажа в зависимости от лута
    alert(
      "В сундуке вы нашли кожанную броню и ржавый короткий мечь. Вы взяли все что нашли, и направились дальше, вглубь тонелля"
    );
    statHero.armor = 50;
    statHero.strong = statHero.strong + 10;
  } else if (getRandomInt() == 1) {
    alert(
      "В сундуке вы нашли латную тяжелую броню и неплохой железный мечь. Вы взяли все что нашли, и направились дальше, вглубь тонелля"
    );
    statHero.armor = 70;
    statHero.strong = statHero.strong + 30;
  } else if (getRandomInt() == 2) {
    alert(
      "В сундуке вы нашли латную броню отличного качества и тяжелый боевой топор. Вы взяли все что нашли, и направились дальше, вглубь тонелля"
    );
    statHero.armor = 90;
    statHero.strong = statHero.strong + 60;
  } else if (getRandomInt() == 3) {
    alert(
      "К сожалению в сундуке лежал только маслянной светильник, однако и им можно хорошенько вдарить в случае чего. Вы взяли все что нашли, и направились дальше, вглубь тонелля"
    );
    statHero.armor = 0;
    statHero.strong = statHero.strong + 10;
  }
}

console.log(statHero);

const enemy = {
  name: skeleton,
  health: 70,
  strong: 35,
  armor: 30,
};

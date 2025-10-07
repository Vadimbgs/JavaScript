//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

/*

// Задача №1 (верна ли запись)
const userInfo = {
	name: "Вася"
	age: 30
}

*/

/*

// Задача №2 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	"58": 'Значение свойства'
}
console.log(userInfo[58]);

*/

/*

// Задача №3 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);

*/

/*

// Задача №4 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
userInfo = null;
user.showInfo();

*/

/*

// Задача №5 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
}
for (const key in userInfo) {
	const value = userInfo[key];
	console.log(value);
}

*/

/*

// Задача №6 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod"
	}
}
for (const key in userInfo.address) {
	console.log(userInfo.address[key]);
}

*/

/*

// Задача №7 (верна ли запись)
const userInfo = {
	name: "Вася",
	age: 30,
	"likes js": true
}
console.log(userInfo."likes js");

*/

// Задача №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/

/*

// Мое решение


let userInfo = {
    name: 'Вася',
    age: 30
}

userInfo.name = 'Лена';

delete userInfo.name;

console.log(userInfo);


*/

/*

// Решение домашки

1.  Нет, там нужно поставить запяту после "name"
2.  Значение свойства, ведь "58" = 58 и тем более в [ ] 
3.  Будет 45 потому что объект не копируеться, а  создаеться новая ссылка на пару ключ-значение
4.  Вася через this сработает
5.  Вася и 30 (выводиться значение)
6.  Uzhhorod
7.  Нет, нужно брать в [ ]  что-то такое: console.log(userInfo["likes js"]);
8.  let userInfo = {
    name: 'Вася',
    age: 30
}

userInfo.name = 'Лена';

delete userInfo.name;

console.log(userInfo);

*/
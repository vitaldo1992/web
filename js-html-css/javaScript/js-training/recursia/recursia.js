// 								ДЛИНА СПИРАЛИ В МАССИВЕ

// Создаем функцию для генерации случайного числа:
function random(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}

// Функция createArray создает массив из (длины стороны, минимального значения, максимального значения);
function createArray(size, min, max) {
	var arr = [];
	for (var i = 0; i < size; i++) {
		arr[i] = [];
		for (var j = 0; j < size; j++) {
			arr[i][j] = random(min, max);
		}
	}
	console.log("\nСозданный массив")
	return arr;
}

// Создаем нашу таблицу Vitaldo по таким параметрам ;
Vitaldo = createArray(5, 1, 10);
console.table(Vitaldo);

// объявляем вспомогательные массивы для левых и правых отрезков которые будут в создаватся в циклах:
var leftLineArray = []; // Временный массив содержащий левый отрезок обрезаемого массива;
var rightLineArray = []; // Временный массив содержащий правый отрезок обрезаемого массива;
var Snake_length = []; // Основной массив к которому будем прибавлять полученные из функции ReturnPerimeter отрезки;

// Объявляем функцию возвращающую нам длинну змейки
function ReturnSnake_length(n) {

	// Сначала выполняем проверку - равен ли наш массив массиву с параметрами arr.length == 1;
	if (n.length == 1 && n[0].length == 1) {
		var center = n[0]; // Если да то это будет последний центральный элемент Center;
		console.log("center", center);
		return Snake_length = Snake_length.concat(center); // Присоединяем последний элемент к нашему змейке Snake_length
	}

	// Объявляем и создаем массив из отрезанной верхней строки нашего основного массива;
	var topLineCut = n.splice(0, 1);
	topLineCut = topLineCut[0]; // присваеваем массиву значение содеращееся в его внутреннем массиве;

	// Объявляем и создаем массив из отрезанной нижней строки нашего основного массива;
	var bottomLineCut = n.splice(n.length - 1, 1);
	bottomLineCut = bottomLineCut[0].reverse(); // присваеваем массиву значение содеращееся в его внутреннем массиве;

	// Объявляем функцию которая возращает нам массив из отрезанной правой стороны основного массива;
	function right_side(n) {
		for (var i = 0; i < n.length; i++) {
			rightLineArray = rightLineArray.concat(n[i].splice(-1, 1))
		}
		return rightLineArray; // Возвращаем созданный массив и прерываем функцию;

	};

	// Объявляем функцию которая возращает нам массив из отрезанной левой стороны основного массива;
	function left_side(n) {
		for (var i = 0; i < n.length; i++) {
			leftLineArray = leftLineArray.concat(n[n.length - i - 1].splice(0, 1))
		}
		return leftLineArray; // Возвращаем созданный массив и прерываем функцию;
	}

	var leftLineCut = left_side(n); // Вызываем функцию и получаем левую строну обрезанного массива
	var rightLineCut = right_side(n); // Вызываем функцию и получаем правую строну обрезанного массива

	// Прибавляем к длине змейки новый отрезки в нужном порядке;
	Snake_length = Snake_length.concat(topLineCut, rightLineCut, bottomLineCut, leftLineCut);

	// Опустошаем временно созданные вспомогательные массивы
	leftLineArray = [];
	rightLineArray = [];

	// Возвращаем функцию вновь - в этот раз она будет работать с уже обрезанным по сторонам массивом.
	ReturnSnake_length(n);
}

// Вызываем функцию "ReturnSnake_length" которая создаст нам Змейку "Snake_length" из массива "Vitaldo"
(ReturnSnake_length(Vitaldo));
console.log("Snake", Snake_length);
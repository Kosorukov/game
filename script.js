let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');
let s = 0;
let s1 = 0;
let s2 = 0;

let map = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,9,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
let bomb = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0]];
x1 = 0, y1 = 0;
map[x1][y1] = 11;
x2 = 9, y2 = 9;
map[x2][y2] = 22;
bomb1 = 3;
bomb2 = 3;

function summa(){
	for (i = 0; i < 10; i++){
		for (j = 0; j < 10; j++){
			if (map[i][j] == 0){
				s++;
			}
		}
	}
}

function summa1(){
	for (i = 0; i < 10; i++){
		for (j = 0; j < 10; j++){
			if ((map[i][j] == 1) || (map[i][j] == 11)){
				s1++;
			}
		}
	}
}

function summa2(){
	for (i = 0; i < 10; i++){
		for (j = 0; j < 10; j++){
			if ((map[i][j] == 2) || (map[i][j] == 22)){
				s2++;
			}
		}
	}
}

function draw(){
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i<=9; i++){
		for (let j = 0; j <= 9; j++){
			if (map[i][j] === 9) {
				ctx.fillStyle = 'black';
				ctx.fillRect(50 * j, 50 * i, 50, 50)
			}

			if (map[i][j] === 11) {
				ctx.fillStyle = 'blue';
				ctx.fillRect(50 * j, 50 * i, 50, 50)
			}

			if (map[i][j] === 22) {
				ctx.fillStyle = 'red';
				ctx.fillRect(50 * j, 50 * i, 50, 50)
			}

			if ((map[i][j] === 2) || (map[i][j] === 25)) {
				ctx.fillStyle = 'pink';
				ctx.fillRect(50 * j, 50 * i, 50, 50)
			}
		}
	}
}

draw();

console.log(map);

//----------------------------------------------

function move2() {
	//движение влево
	if ((event.keyCode == 37) && (y2 >= 1) && (map[x2][y2-1] != 11) && (map[x2][y2-1] != 9)){
		map[x2][y2] = 2;
		map[x2][y2-1] = 22;
		console.log(map);
		y2 -= 1;
		if (bomb[x2][y2] == 1){
			alert('Вы попали на бомбу!');
			location.reload();
		}
	}
	//движение вверх
	if ((event.keyCode == 38) && (x2 >= 1) && (map[x2-1][y2] != 11) && (map[x2-1][y2] != 9)){
		
		map[x2][y2] = 2;
		map[x2-1][y2] = 22;
		console.log(map);
		x2 -= 1;
		if (bomb[x2][y2] == 1){
			alert('Вы попали на бомбу!');
			location.reload();
		}
	}
	//движение вправо
	if ((event.keyCode == 39) && (y2 <= 8) && (map[x2][y2+1] != 11) && (map[x2][y2+1] != 9)){
		map[x2][y2] = 2;
		map[x2][y2+1] = 22;
		console.log(map);
		y2 += 1;
		if (bomb[x2][y2] == 1){
			alert('Вы попали на бомбу!');
			location.reload();
		}
	}
	//движение вниз
	if ((event.keyCode == 40) && (x2 <= 8) && (map[x2+1][y2] != 11) && (map[x2+1][y2] != 9)){
		map[x2][y2] = 2;
		map[x2+1][y2] = 22;
		console.log(map);
		x2 += 1;
		if (bomb[x2][y2] == 1){
			alert('Вы попали на бомбу!');
			location.reload();
		}
	}
	//бомбы
	if ((event.keyCode == 32) && (bomb2 > 0) && (bomb[x2][y2] != 1)){
		bomb[x2][y2] = 2;
		bomb2 -= 1;
		console.log(bomb);
	}


draw();
}

document.addEventListener('keydown', move2);



















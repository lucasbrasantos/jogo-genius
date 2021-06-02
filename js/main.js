let order = [];
let clickedOrder = [];
let score = [];

//0 - green
//1 - red
//2 - yellow
//3- blue


const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

//cria ordem aleartoria de cores
let shuffleOrder = () => {
	let colorOrder = Math.floor(Math.random() * 4)
	console.log(colorOrder);
	order[order.length] = colorOrder;
	clickedOrder = [];

	for(let i in order){
		let elementColor = createColorElement(order[i]);
		lightColor(elementColor, Number(i) + 1);
	}	
}


//acende a proxima cor
let lightColor = (element, Number) => {
	Number = Number * 250;
	console.log(Number);
	setTimeout(() => {
		element.classList.add("selected");
	}, Number - 100);	

	setTimeout(() => {
		element.classList.remove("selected");
	}, 1000)
}


//checa se a ordem pressionada esta correta
let checkOrder = () => {
	for(let i in clickedOrder){
		if (clickedOrder[i] != order[i]){
			gameOver();
			break;
		}
	}
	if (clickedOrder.length == order.length){
		setTimeout(function(){
			alert(`pontuação: ${score}\n Você acertou! iniciando proximo nivel`);
			nextLevel();
		}, 500)
	}
}


//funcao de pressionar
let click = (color) => {
	clickedOrder[clickedOrder.length] = color;
	createColorElement(color).classList.add("selected");

	setTimeout(() => {
		createColorElement(color).classList.remove("selected");
		checkOrder();
	}, 500);
}

let createColorElement = (color) => {
	if (color == 0) {
		return green;
	}
	else if (color == 1) {
		return red;
	}
	else if (color == 2) {
		return yellow;
	}
	else if (color == 3) {
		return blue;
	}
}

//funcao para proximo nivel
let nextLevel = () => {
	score++;
	shuffleOrder();
}

//funcao de gameover
let gameOver = () => {
	alert(`pontuação: ${score}\ngame over`);
	order = [];
	clickedOrder = [];

	playGame();
}

//inicia jogo
let playGame = () =>{
	alert("bem vindo ao jogo genius");
	score = 0;

	nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
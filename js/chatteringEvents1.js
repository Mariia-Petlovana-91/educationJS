const button = document.querySelector('div[data-value="button"]');
const text = document.querySelector('p[data-value="text"]');
const btnStart = document.querySelector('button[data-value="START"]');
const btnStop = document.querySelector('button[data-value="STOP"]');
const throttle = _.throttle(onMouseMove, 500);
let mouseMove = 0;


button.addEventListener('click',onMouseMoveClick);

function onMouseMoveClick(e) {
	if (e.target.nodeName !== 'BUTTON') {
		return;
	}

	if (e.target === btnStart) {
		onStartBtnClickMouseMove();
		return;
	}
	onStoptBtnClickMouseMove();
}

function onMouseMove(e) {
	mouseMove += 1;
	text.textContent = `
	The number of mouse events : ${mouseMove}-
x:${e.clientX},
y:${e.clientY}
	`;
}

function onStartBtnClickMouseMove() {
	window.addEventListener('mousemove', throttle);
}

function onStoptBtnClickMouseMove() {
	window.removeEventListener('mousemove', throttle);
	text.textContent = `
	The number of mouse events : 0.
	`;
}
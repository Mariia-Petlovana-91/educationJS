const refBtn = document.querySelector('.js-btn');
const refText = document.querySelector('.js-text');

window.addEventListener('keydown', onKeyDown);
refBtn.addEventListener('click', onClearText);

function onKeyDown(event) {
	refText.textContent += event.key;
};

function onClearText() {
	refText.textContent = '';
}

const divOne = document.querySelector('.js-one');
const divTwo = document.querySelector('.js-two');
const divThree = document.querySelector('.js-three');
const text = document.querySelector('.js-text2');

divOne.addEventListener('click', onDivClick);

function onDivClick(event) {
	
	if (event.target === event.currentTarget) {
	return text.textContent='event.target === evrne.currentTarget';
	}

	text.textContent = 'event.target !== evrne.currentTarget';

	if (event.target === divOne) {
	return divOne.style.backgroundColor = 'silver';
	}

	if (event.target === divTwo) {
	return divTwo.style.backgroundColor = 'brown';
	}

	if (event.target === divThree) {
	return divThree.style.backgroundColor = 'pink';
		
	}
}
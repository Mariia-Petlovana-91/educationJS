const list = document.querySelector('ul[data-value="list-several"]');
// const chooseTag = [];

//*-- для примітивів можна використати set-набори
const chooseTag = new Set;

list.addEventListener('click', onFilterBtnClick);


function onFilterBtnClick(evt) {
	if (evt.target.nodeName !== 'BUTTON') {
		return;
	}

	// if (chooseTag.includes(evt.target.dataset.value)) {
	// 	return;
	// }
	// chooseTag.push(evt.target.dataset.value);

	if (evt.target.classList.contains('btn-button--active')){
		chooseTag.delete(evt.target.dataset.value);
	} else {
		chooseTag.add(evt.target.dataset.value);
	}

	
      evt.target.classList.toggle('btn-button--active');
	console.log(chooseTag);
}

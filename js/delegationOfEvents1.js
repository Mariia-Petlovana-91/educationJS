// <!-- CHOOSE ONE OF SEVERAL -->

const list = document.querySelector('ul[data-value="list-one"]');

list.addEventListener('click', onFilterBtnClick);

function onFilterBtnClick(evt) {
	if (evt.target.nodeName !== 'BUTTON') {
		return;
	}

	const activeClass = document.querySelector('.btn-button--active');

	// if (activeClass) {
	// 	activeClass.classList.remove('btn-button--active');
	// 	console.log(evt.target);
	// }

	// новий синтаксис для перевірки if що вище тобто перевірка
	// відбувається так якщо activeClass не null i не undefined 
	// то відбудеться код після ? а якщо null,undefined то код 
	// після ? не відбудеться.
	activeClass?.classList.remove('btn-button--active');

	evt.target.classList.add('btn-button--active');
}
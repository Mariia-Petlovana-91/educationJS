const array =[{
	name: 'red',
	color: '#ff0000',
}, {
	name: 'green',
	color: '#00ff00',
}, {
	name: 'blue',
	color: '#0000ff',
	},
{
	name: 'brown',
	color: '#555222',
	},
{
	name: 'dark green',
	color: '#123412',
	},
{
	name: 'yellow',
	color: '#f4f400',
	},
] 


const divColorizeRef = document.querySelector('.js-colorize');
const btnOpenColorizeRef = document.querySelector('.js-btnOpen');
const btnCloceColorizeRef = document.querySelector('.js-btnCloce');

const createColorize = option => {
	return option.map(({ name, color } = {}) => {
		const colorizeEl = document.createElement('span');
		colorizeEl.textContent = name;
		colorizeEl.style.backgroundColor = color;
		colorizeEl.classList.add('colorize-el');
		return colorizeEl;
	});
}	

const elementsColor = createColorize(array);
const element = document.createElement('span');
element.classList.add('colorize-main')
element.append(...elementsColor);


btnOpenColorizeRef.addEventListener('click', function () {
	divColorizeRef.append(element);
});

btnCloceColorizeRef.addEventListener('click', function () {
	element.remove();
});
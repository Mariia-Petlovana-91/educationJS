const colors = [
	{ hex: '#fa0a0a', rgb: '250,10,10' },
	{ hex: '#3afa0a', rgb: '58,250,10' },
	{ hex: '#0ad6fa', rgb: '10,214,250' },
	{ hex: '#faba0a', rgb: '250,186,10' },
	{ hex: '#391766', rgb: '57,23,102' },
	{ hex: '#661748', rgb: '102,23,72' },
	{ hex: '#ff06ea', rgb: '255,6,234' },
	{ hex: '#ff0606', rgb: '255,6,6' },
	{ hex: '#122705', rgb: '18,395' },
	{ hex: '#0e033d', rgb: '14,3,61' },
];

const palleteColors = document.querySelector('.js-plet');
const createPallet = createPaletteColors(colors);

palleteColors.insertAdjacentHTML('afterbegin', createPallet);

palleteColors.addEventListener('click', onBodyChangeClick);

function createPaletteColors(array) {
	return array.map(({ hex, rgb }) => {
		return `
	<div class='color'>
	<div class='color__el'>
	      <div
	         class="color__background"
	         data-hex="${hex}"
	         data-rgb="${rgb}"
	         style="background-color: ${hex}"
	      >
	      </div>
            <div class="color__text">
               <p>HEX: ${hex}</p>
	         <p>RGB: ${rgb}</p>
           </div>
	 </div>
	</div>`;
	}).join('');
}
 
function onBodyChangeClick(e) {
	if (!e.target.classList.contains('color__background')) {
		return;
	}

	const isActive = document.querySelector('.color--is-active');
	
	removeClassFromActiveCard(isActive);
	addClassFromActiveCard(e);

	palleteColors.style.backgroundColor = e.target.dataset.hex;
	

}

function removeClassFromActiveCard(card) {
	if (card) {
		card.classList.remove('color--is-active');
	}
}

function addClassFromActiveCard(e) {
	e.target.closest('.color').classList.add('color--is-active');
}
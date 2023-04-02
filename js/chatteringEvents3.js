const tech = [
	{ label: 'HTML' },
	{ label: 'VanilaJS' },
	{ label: 'SASS' },
	{ label: 'CSS' },
	{ label: 'SQL' },
	{ label: 'Phyton' },
	{ label: 'React Router' },
	{ label: 'NodeJS' },
	{ label: 'Figma' },
	{ label: 'MySQL' },
	{ label: 'Redux' },
	{ label: 'Java Script' },
	{ label: 'HTML5' },
	{ label: 'React' },
]

const refs = {
	input: document.querySelector('.js-input-filter'),
	listFilter: document.querySelector('.js-list-filter'),

}

refs.input.addEventListener('input', _.debounce(onFilterChange,2000));

function createListItemsStringMarkup(array) {
	return array.map(({ label }) => {
	  return	`<li class="filter__item">${label}</li>`;
	}).join('');
}

function createListItemsMarkup(array,el) {
	el.innerHTML=createListItemsStringMarkup(array);
}

createListItemsMarkup(tech,refs.listFilter);

function onFilterChange(e) {
	const filteredItems = tech.filter(t => t.label.toLowerCase().includes(e.target.value.toLowerCase()),);	
	const createListItemsFilteredMarkup = createListItemsMarkup(filteredItems, refs.listFilter);
	
}

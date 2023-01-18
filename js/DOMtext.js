const array = [{
	title: 'Produkt 1',
	deskription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam ducimus dolorum officia voluptates deleniti tempora aperiam harum, aut voluptatem sit veniam odit, eum voluptate non, quasi exercitationem! Sed, ex ',
      price: 2000,
},{
	title: 'Produkt 2',
	deskription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam ducimus dolorum officia voluptates deleniti tempora aperiam harum, aut voluptatem sit veniam odit, eum voluptate non, quasi exercitationem! Sed, ex ',
      price: 5000,
},{
	title: 'Produkt 3',
	deskription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam ducimus dolorum officia voluptates deleniti tempora aperiam harum, aut voluptatem sit veniam odit, eum voluptate non, quasi exercitationem! Sed, ex ',
      price: 1000,
},{
	title: 'Produkt 4',
	deskription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam ducimus dolorum officia voluptates deleniti tempora aperiam harum, aut voluptatem sit veniam odit, eum voluptate non, quasi exercitationem! Sed, ex ',
      price: 7000,
},{
	title: 'Produkt 5',
	deskription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam ducimus dolorum officia voluptates deleniti tempora aperiam harum, aut voluptatem sit veniam odit, eum voluptate non, quasi exercitationem! Sed, ex ',
      price: 4500,
},{
	title: 'Produkt 6',
	deskription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam ducimus dolorum officia voluptates deleniti tempora aperiam harum, aut voluptatem sit veniam odit, eum voluptate non, quasi exercitationem! Sed, ex ',
      price: 4000,
},{
	title: 'Produkt 7',
	deskription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam ducimus dolorum officia voluptates deleniti tempora aperiam harum, aut voluptatem sit veniam odit, eum voluptate non, quasi exercitationem! Sed, ex ',
      price: 3000,
}]

const textRef = document.querySelector('.js-text');

const createText = ({ title, deskription, price }) => {
	const createArticle = document.createElement('article');
	createArticle.classList.add('text-main');

	const createTitle = document.createElement('h1');
	createTitle.textContent = title;
	createTitle.classList.add('text-title');

	const createDescript = document.createElement('p');
	createDescript.textContent = deskription;
	createDescript.classList.add('text-descript');

	const createText = document.createElement('p');
	createText.textContent = price;
	createText.classList.add('text-price');

	createArticle.append(createTitle, createDescript, createText, );

	return createArticle;
}

textRef.append(...array.map(createText));


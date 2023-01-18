const element =
{
	src: '/img/animals-kotenok-trava-sidet-ozhidanie-malish-138676.jpeg',
	alt: 'kitten',
	width: 150,
	height: 100,
};

const makeElImage =  ({ src, alt, width, height } = {})=> {
	const image = document.createElement('img');
	
		image.src = src;
		image.alt = alt;
	 	image.width = width;
	      image.height = height;
	
            const imgItem = document.createElement('li');
	      imgItem.classList.add('img-item');
	      imgItem.appendChild(image);

	return imgItem;
	
};
	
const createImg = makeElImage(element);
const imgListRef = document.querySelector('.js-img');
const navImgBtnRef = document.querySelectorAll('.js-nav button');

navImgBtnRef[0].addEventListener('click', function () {
	imgListRef.appendChild(createImg);
});

navImgBtnRef[1].addEventListener('click', function () {
	createImg.remove();
});
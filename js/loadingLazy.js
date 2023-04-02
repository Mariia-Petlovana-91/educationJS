const laziImage = document.querySelectorAll('img[loading="lazy"]');

laziImage.forEach(i => {
	i.addEventListener('load', onAddClassList, {once:true});
});

function onAddClassList(e) {
	e.target.classList.add('lazi__img-load');
};

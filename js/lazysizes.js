function onAddClassList(e) {
	e.target.classList.add('lazi__img-load');
};


if ('loading' in HTMLImageElement.prototype) {
 checkIfAttrExists();
    } else {
createElementScript();
    }

const lazyImage=document.querySelectorAll('img[class="lazyload"]');
lazyImage.forEach(i=>{
i.addEventListener('load', onAddClassList, {once:true});
});

function checkIfAttrExists(){
	const lazyImage = document.querySelectorAll( 'img[class="lazyload"]' );
      lazyImage.forEach(img=>{
	img.src=img.dataset.src;
  });	
}

function createElementScript(){
	const createScript=document.createElement('script');
	createScript.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
	createScript.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
	createScript.crossorigin="anonymous";
	createScript.referrerpolicy="no-referrer";
	document.appendChild(createScript);
}

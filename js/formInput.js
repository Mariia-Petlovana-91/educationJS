const refsEl = {
 input:document.querySelector('.js-input'),
 chacebox:document.querySelector('.js-chacebox'),
 btn:document.querySelector('.js-btn'),
 span:document.querySelector('.js-btn > span'),
}

refsEl.input.addEventListener('input' ,onInputChange);
refsEl.chacebox.addEventListener('change' , onChaceboxChange);

function onInputChange(event){
	refsEl.span.textContent= event.currentTarget.value;
};

function onChaceboxChange(event){
refsEl.btn.disabled = !event.currentTarget.checked;

}
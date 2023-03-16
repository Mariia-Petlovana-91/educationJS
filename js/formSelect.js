const selectRef = {
	div: document.querySelector('.js-color'),
	spanText: document.querySelector('.text-output'),
	spanValue: document.querySelector('.value-output'),
	select:document.querySelector('.color-select'),
}

function onContentChange() {
	
	selectRef.spanText.textContent = selectRef.select.options[selectRef.select.selectedIndex].text;
	// selectRef.spanValue.textContent = selectRef.select.options[selectRef.select.selectedIndex].value;
	selectRef.spanValue.textContent = selectRef.select.value;
	selectRef.div.style.backgroundColor = selectRef.select.value;
}

selectRef.select.addEventListener('change', onContentChange);

const formRef = document.querySelector('.js-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formData = new FormData(event.currentTarget);

	console.log(formData);

	formData.forEach((value, name) => {
		console.log(name);
		console.log(value);
	})
	
}
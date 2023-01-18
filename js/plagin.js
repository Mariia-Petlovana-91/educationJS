const Plagin = function({rootselector = undefined, initialValue = 0, step = 1 } = {}){
this._value = initialValue;
this._step = step;

this._refs = this._getRefs(rootselector);
this._bindEvents();
this.initialValue(initialValue);
}

Plagin.prototype._getRefs = function(rootselector){
const refs ={};

refs.container = document.querySelector(rootselector);
refs.increment = refs.container.querySelector('[data-increment]');
refs.decrement = refs.container.querySelector('[data-decrement]');
refs.value = refs.container.querySelector('[data-value ');
	
return refs;
}

Plagin.prototype._bindEvents = function (){
	this._refs.increment.addEventListener('click', () => {
		this.increment();
		this.updateValueUI();
	});

	this._refs.decrement.addEventListener('click' ,() =>{
		this.decrement();
		this.updateValueUI();
	})
}

Plagin.prototype.updateValueUI = function (){
	this._refs.value.textContent = this._value;
}

Plagin.prototype.increment = function (){
	this._value += this._step;
	console.log(this._value)

}

Plagin.prototype.decrement = function (){
	this._value -= this._step;
}

Plagin.prototype.initialValue = function (initialValue) {
	this._refs.value.textContent = initialValue;
}

new Plagin({rootselector : '#counter1', initialValue : 10, step : 100});
new Plagin({rootselector : '#counter2', initialValue : 1, step : 5});
 
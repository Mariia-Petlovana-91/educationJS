




const fnA = function () {
console.log('this in fnA->' , this);
}

fnA()

const book={
	title:'rower',
	sowTitle(){
		console.log('this is',this)
	}
}
const r= book.sowTitle;

r();

const a ={
	x:2,
	y:3,
};

const b ={
	p:5,
	r:8,
}
r.call(a,);
r.apply(b,[3]);
r();

const changeA=r.bind(a);
const changeB=r.bind(b);
changeA();
changeB();


const object = {
	value : 0,
	increment(value){
		console.log('this is',this);
		this.value += 1;
	},
	decrement(value){
		console.log('this is',this);
		this.value -= 1;

	},
}

// function change (value,option){
// 	return option(value);
// }

// change(10,object.increment.bind(object));

const incrementBtn = document.querySelector('.js-increment');
const decrementBtn = document.querySelector('.js-decrement');
const valueBtn = document.querySelector('.js-value');

incrementBtn.addEventListener('click', function (){
object.increment();
valueBtn.textContent = object.value;
});

decrementBtn.addEventListener('click', function (){
object.decrement();
valueBtn.textContent = object.value;
});




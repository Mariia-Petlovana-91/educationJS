const teaDepartment=[
{name:'Viktor Bars',year:33, city:'Lvov', salary:2100, score:1109876134291450,missed:['12.08','25.08'],present:true,},
{name:'Oleg Rapto',year:43, city:'Vynnyky', salary:3350, score:2155326743293421,missed:['11.08'],present:false,},
{name:'Mykola Sporny',year:38,city:'Lvov',salary:2350,score:1827231732909810,missed:['04.08','24.08'],present:true,},
{name:'Pavlo Bersa',year:28,city:'Rudky',salary:3900,score:5427231732924810,missed:[],present:false,},
{name:'Viktor Bebro',year:41,city:'Lvov',salary:2350,score:4877317582609611,missed:['01.08','09.08','16.08','27.08'],present:true,},
];

const refs = {
	el1: document.querySelector('.js-el1'),
	input1: document.querySelector('input[data-value="input1"]'),
	text1: document.querySelector('p[data-value="text1"]'),
	el2: document.querySelector('.js-el2'),
	input2: document.querySelector('input[data-value="input2"]'),
	text2: document.querySelector('p[data-value="text2"]'),
}
let createString = '';

refs.input1.addEventListener('input', onInput1Input);
refs.input2.addEventListener('input', _.debounce(onInput2Input,2000));
	
function onInput1Input(e) {
	refs.text1.textContent =`Entered characters: ${e.target.value}`;
	filter(teaDepartment, e);
	refs.el1.insertAdjacentHTML('beforeend', createEl(createString));
}

function onInput2Input(e) {
	refs.text2.textContent =`Entered characters: ${e.target.value}`;
	filter(teaDepartment, e);
	refs.el2.insertAdjacentHTML('beforeend', createEl(createString));

}

function filter(array, e) {
 return array.find(ar => {
	 if (e.target.value !== ar.name) {
		 return createString = false;
	 }
	 return createString=ar;
 });
}

function createEl(obj) {
	if (!obj) {
		return `<p class="deb__create">Not found!!!</p>`;	
       }
	return `<p class="deb__create">
	name: ${obj.name},<br>
	year: ${obj.year},<br>
	city: ${obj.city},<br>
	salary: ${obj.salary},<br>
	score: ${obj.score}.<br>
   `;
}

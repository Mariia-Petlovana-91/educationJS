const coffeeDepartment=[
{
name:'Zenyk Revin',
 year:49,
 city:'Kalyniv',
 salary:4349,
 score:2857445742130987,
 },{name:'Nazar Bresko',
 year:23,
 city:'Lvov',
 salary:2149,
 score:2567345012341234,
 },{name:'Serhij Nestorko',
 year:29,
 city:'Vyshnia',
 salary:2249,
 score:5081458245304567,
 },{name:'Volodymyr Zyk',
 year:34,
 city:'Dibrova',
 salary:2749,
 score:5098463812345609,
 },{name:'Viktor Bars',
  year:33,
  city:'Lvov',
  salary:2349,
  score:1109876134291450,
  },{name:'Oleg Rapto',
   year:43,
   city:'Vynnyky',
   salary:3349,
   score:2155326743293421,
  },{name:'Mykola Sropny',
   year:38,
   city:'Lvov',
   salary:2949,
   score:1827231732909810,
  }
];

const tableRef=document.querySelector('.js-table')
console.log(tableRef);
const tableBtnRef = document.querySelectorAll('[data-action]');
console.dir(tableBtnRef);
const tableDeleteBtnRef = document.querySelector('.js-titleMain');
console.log(tableDeleteBtnRef)
const newTableBtnRef = Array.from(tableBtnRef);

console.log(newTableBtnRef);



const createTableRowMarkap = ({name,year,city,salary,score}={}) => {
	return ` 
	<tr class="table-row" ><td class="table-data">${name}</td>
	   <td class="table-data">${year}</td>
	   <td class="table-data">${city}</td>
	   <td class="table-data">${salary}</td>
	   <td class="table-data">${score}</td>
	</tr>
	`
}



const createTableRowsMarkap =
	coffeeDepartment.map(createTableRowMarkap).join('');

newTableBtnRef.filter(btn => { 
	if (btn.dataset.action === 'open') {
		btn.addEventListener('click', function () {
			tableRef.insertAdjacentHTML("beforeEnd", createTableRowsMarkap);
		})
	}

	if (btn.dataset.action === 'close') {
		btn.addEventListener('click', function () {
		tableRef.innerHTML = `<caption class="table-head">Перелік працівників</caption>
			<thead class="js-titleMain" >
				<tr class="table-row">
					<th class="table-title"><button type="button" class="table-btn__title" data-action="name">Прізвище та ім'я</button></th>
					<th class="table-title"><button type="button" class="table-btn__title" data-action="year">Вік</button></th>
					<th class="table-title"><button type="button" class="table-btn__title" data-action="city">Місце проживання</button></th>
					<th class="table-title"><button type="button" class="table-btn__title" data-action="salary">Зарплата</button></th>
					<th class="table-title"><button type="button" class="table-btn__title" data-action="score">Номер карти</button></th>
				</tr>
			</thead>`;
		})
	}
}
	);
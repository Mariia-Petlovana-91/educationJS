// // ---------TASK ONE forEach

// const numbers=[1,5,10,20,35];

// numbers.forEach(function(number, index, array) {
//       console.log(number); 
//       console.log(this);
      
//    },{a:'name',b:20,c:false});

// // -----forEach викликається із двома параметрами : 
// // перший -функція-callback,
// // другий -об'єкт в контексті якого викликається цей callback.
// // -----Тобто під капотом буде відбуватися call i першим значенням 
// // цього call буде переданий об'єкт.
// // ------this буде посилатися на даний об'єкт

// numbers.forEach(function(number, index, array) {
//      console.log(number); 
// });

// numbers.forEach(function(number, index, array) {
//       numbers[index]=10;
    
//  });
//  console.log(numbers);

// ----------TASK TWO 'map()'

const teaDepartment=[
{name:'Viktor Bars',year:33, city:'Lvov', salary:2100, score:1109876134291450,missed:['12.08','25.08'],present:true,},
{name:'Oleg Rapto',year:43, city:'Vynnyky', salary:3350, score:2155326743293421,missed:['11.08'],present:false,},
{name:'Mykola Sropny',year:38,city:'Lvov',salary:2350,score:1827231732909810,missed:['04.08','24.08'],present:true,},
{name:'Pavlo Bersa',year:28,city:'Rudky',salary:3900,score:5427231732924810,missed:[],present:false,},
{name:'Viktor Bebro',year:41,city:'Lvov',salary:2350,score:4877317582609611,missed:['01.08','09.08','16.08','27.08'],present:true,},
];

// // -----------LESSON ONE

// const premium=()=>Math.random()*(10-1)+1;

// const newTeaDepartment=teaDepartment.map(employee=>({
//       ...employee,
//     salary:employee.salary+premium(),
// }))

// console.table(newTeaDepartment);

// // ----------LESSON TWO

// const localWorkers=teaDepartment.map(employee=>(employee.city==='Lvov'?
// {
//       ...employee,
//       address:{
//             street:'',
//       },
// }
// :{
//       ...employee,
//       address:false,
// }
// ));

// console.log(localWorkers);

// const type=localWorkers.map(employee=>typeof employee.address);
// console.log(type);

// // ----------LESSON THREE

// const scoreTeaDepartment=teaDepartment.map(({name ,score})=>({name,score}));

// console.log(scoreTeaDepartment);

// // -----------LESSON FOUR

// const  updateEmployeeSalary=teaDepartment.map(employee=>
//       employee.salary<=2400?
//       {...employee,
//         salary:employee.salary+employee.salary/100*15,
//       }:employee
//       );

//       console.log(updateEmployeeSalary);

// // -------- TASK THREE flatMap()

// const daysMissedOfTeaDepartment=teaDepartment.flatMap(employee=>employee.missed);
// console.log(daysMissedOfTeaDepartment.length);
// console.log(daysMissedOfTeaDepartment);

// // ---------TASK FOUR filter()

// const presentTeaDepartment=teaDepartment.filter(employee=>employee.present);
// console.log(presentTeaDepartment);


// const notPresentTeaDepartment=teaDepartment.filter(employee=>{
//       if(!employee.present){
//             return{
//              ...employee, 
//              employee:employee.missed.push('20.08'),
//             }
//       }
//       // return employee;
// });
// console.log(notPresentTeaDepartment);

// // ---------TASK FIVE find()

// const findEmployee='Pavlo Bersa';

// const toFindEmployee=teaDepartment.find(({name})=>name===findEmployee);
// console.log(toFindEmployee);

// const find =(array,element)=>array.find(el=>el.name===element);
// console.log(find(teaDepartment,findEmployee));
// console.log(find(teaDepartment,'Oleg Rapto'));
// console.log(find(teaDepartment,'Ol Rapto'));

// // ----------TASK SEVEN every(),some()

// const salary=(array,test)=>array.every(ar=>ar.salary>test);

// console.log(salary(teaDepartment,2400));
// console.log(salary(teaDepartment,2000));

// const salary1=(array,test)=>array.some(ar=>ar.salary>test);

// console.log(salary1(teaDepartment,2400));
// console.log(salary1(teaDepartment,4000));

// --------TASK EIGHT reduce()

// // -----------LESSON ONE

// const totalSalary=teaDepartment.reduce((total,employee)=>total+employee.salary,0);
// console.log(totalSalary);

// // -----------LESSON TWO

// const ollAge=teaDepartment.reduce((total,employee)=>total+employee.year,0);

// const middleAge=(total,value)=>total/value;

// console.log(ollAge);
// console.log(middleAge(ollAge,teaDepartment.length));

// // -----------LESSON THREE

// const carts=[
//       {name:'lemon', quantity:4, price:20,},
//       {name:'apple', quantity:8, price:12,},
//       {name:'kiwi', quantity:6, price:24,}
// ];

// const totalAmount=carts.reduce((total,{quantity,price})=>
// total+quantity*price,0);

// console.log(totalAmount);

// // -----------LESSON FOUR

// const object={
//       "Anna":100,
//       "Mary":120,
//       "Poly":120,
//       "Barbara":100,
// }

// const salary=Object.values(object).reduce((total,value)=>total+value,0);

// console.log(salary);

// // ----------LESSON FIVE

// const carts=[
//       {name:'lemon', quantity:4,country:['Italy','Ukraine','France','Poland'],},
//       {name:'apple', quantity:8,country:['Poland','Ukraine','Germany'],},
//       {name:'kiwi', quantity:6,country:['Poland','Germany','France','Ukraine'],}
// ];

// const ollCountry=carts.reduce((array,{country})=>
// [...array,...country],[]);

// console.log(ollCountry);

// // // ********FIRST METHOD

// // const statistics=ollCountry.reduce((acc,country)=>{
      
// // if (acc[country]){
// //       acc[country]+=1
// //       return acc;
// // }
// // acc[country]=1
// // return acc;    
// // },{});

// // // ***********SECOND METHOD

// // const statistics=ollCountry.reduce((acc,country)=>{

// // return {
// //       ...acc,
// //       [country]:acc[country]? acc[country]+1:1
// // };
// // },{})

// // console.log(statistics)






    
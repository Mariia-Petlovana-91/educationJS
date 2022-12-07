
const array=['red','blue','yellow'];
const array2=['gold','nice','true','false'];
console.log(array.indexOf('blue'));

array.shift();
console.log(array.indexOf('blue'))
console.log(array);

array.unshift('pink','green');
console.log(array);
console.log(array.indexOf('blue'));

array.unshift(array2);
console.log(array);

// const array=[123,255,647];
// const[red,blue,green,yellow=123]=array;

// console.log(red ,blue,green,yellow);

// const[red,...colors]=array;
// console.log(red,array);

// const[, ,blue]=array;
// console.log(blue);
// console.log(array);



const array1=['red','blue','yellow'];

for(let i=0; i<array1.length; i+=1){
   if(array1[i]==='blue')
   {array1.splice(array1[i]==='blue',1,'gold');
  continue;}
}
array1.splice(array1.indexOf('blue'),1,'gold');

console.log(array1);




const array4=[1,2,3];
const array5=[3,4,1];
const arrayOll=[...array4,0,...array5];
console.log(arrayOll);
console.log(Math.min(...arrayOll));


// const array=[1,2,3,6,5];
// const array1=[3,4,1];
// function oll(number,...args){
//       console.log(args);
//       console.log(number);
// }
// oll(array,array1,[7,8,9,0],1);




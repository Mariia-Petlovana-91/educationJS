

// // ----------------TASK ONE


// // ******FIRST METHOD

// const calculateTotalPrice= function(items){
//  items=Array.from(arguments);

//  let total=0;

//  for(const item of items){
// total+=item;
//  }

//  return total;
// }
// const result=calculateTotalPrice(1,2,2,3);
// console.log(result);

// // *****SECOND METHOD

// function calculateTotalPrice1 (...items){
//        let total=0;

//        for(const item of items){
//       total+=item;
//        }
//        return total;
// }

// console.log(calculateTotalPrice1(1,2,2,3));

// // ------------TASK TWO

// const logItems=function(items){
//       for (const item of items){
//             console.log(item);
//       }
// }
// logItems(['Mango','Poly','Ajax']);
// logItems([1,2,3,4]);

// // -------------TASK THREE

//  const line=['red','blue','green'];
//  const login='green'; 

//  const include=function(logins,loginToFind){

//   return   logins.includes(loginToFind)?
//   `${loginToFind} is find`:
//   `${loginToFind} is not find`;

// }
// console.log(include(line,login));
// console.log(include(line,'gold'));

// // -----------------TASK FOUR

// const findSmallNumber=function(numbers){
//  let small=numbers[0];

//   for(const number of numbers){
//   if(small>number){
//   small=number;
// }
//  }

//  return small;
// }

// console.log(findSmallNumber([1,2,3,4,5,0]));
// console.log(findSmallNumber(['qwe','asd','rtg','axi','abc']));
// console.log(findSmallNumber('abcd'));
// console.log(findSmallNumber('852861'));

// // -------------TASK FIVE

// function stringify(string){
// return string.toLowerCase().split(' ').join('-');}
 
// console.log(stringify('I wont red book'));

// // ----------------TASK SIX

// // ******FIRST METHOD

// const add=function(number){
//  number=Array.from(arguments);
//   let total=0;

//   for (const nr of number){
//   total+=nr;
//   }
  
//   return total;
// }

// console.log(add(1,2,3,4));

// // ******SECOND METHOD

// function add1(...number){
//     let total=0;
  
//     for (const nr of number){
//     total+=nr;
//     }
    
//     return total;
//   }

// console.log(add1(1,2,3,4));

// // -----------TASK SEVEN

// const filterNumber=function(array,...number){
//   const newArray=[];

//   for(const ar of array){
//     if(number.includes(ar)){
//   newArray.push(ar); 
//       }

//   }
//   return newArray;
// }
// console.log(filterNumber([1,2,3,5,6,7,8,9,0], 1,4,8,0));

// // ----------TASK EIGHT

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement=fruits[1];
// const secondElement=fruits[2];
// const lastElement=fruits[fruits.length-1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

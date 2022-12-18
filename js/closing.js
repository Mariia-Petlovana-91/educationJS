const coffeeDepartment=[
{
name:'Zenyk Revin',
 year:49,
 city:'Kalyniv',
 salary:4349,
 score:2857445742130987,
 },
 {name:'Nazar Bresko',
 year:23,
 city:'Lvov',
 salary:2149,
 score:2567345012341234,
 },
 {name:'Serhij Nestorko',
 year:29,
 city:'Vyshnia',
 salary:2249,
 score:5081458245304567,
 },
 {name:'Volodymyr Zyk',
 year:34,
 city:'Dibrova',
 salary:2749,
 score:9098463812345609,
 }
];
const teaDepartment=[
 {
  name:'Viktor Bars',
  year:33,
  city:'Lvov',
  salary:2349,
  score:1109876134291450,
  },
   {name:'Oleg Rapto',
   year:43,
   city:'Vynnyky',
   salary:3349,
   score:2155326743293421,
  },
  {name:'Mykola Sropny',
   year:38,
   city:'Lvov',
   salary:2949,
   score:1827231732909810,
  }];


// //   ------------TASK ONE

// function personSuch(array){
//       const names=[];
//      array.forEach(element => {
//      names.push(element.name);
// });

// const such=function(suchName){
//       for (const name of names){
//            if(name===suchName){
//             return `${name} is at work today.`; 

//         }   
//       } 

//      return 'Not such person was found';
// }
// return such;
// }

// const coffee=personSuch(coffeeDepartment);

// console.log(coffee('Jon Resko'));
// console.log(coffee('Volodymyr Zyk'));

// const tea=personSuch(teaDepartment);

// console.log(tea('Oleg Rapto'));
// console.log(tea('Ranko Blert'));

// // -------------TASK TWO

// function arrayFound(array,name){
//   let object={message:`This ${name} is not found.`};

//   array.forEach(element => {
//     if(element.name===name){
//       object=element;
//     }
//   });

// return object;
// }


// function workWithSalary(person,array,callback){

// const object= callback(array,person);

//   return{
//     getSalary(people){
//       if(people===object.name){

//         return object.salary
//       }
//       return object.message;
//     },

//     increaseSalary(people,quantity){
//       let newSalary=object.salary;

//       if(people===object.name){
//      if(quantity<=2000){
//       return newSalary+=quantity;
//      }else if(quantity>2000){
//       return `We not can increase ${quantity}`;
//      }
//      }
//      return object.message;
//       },
      
//     decreaseSalary(people,quantity){
//       let newSalary=object.salary;

//       if(people===object.name){

//        if(newSalary<=2500){
//         return `We not can decrease ${quantity}`;
//        }else
//         if(newSalary>2500){
//        return newSalary-=quantity;
//        }
//       }
//       return object.message;
//     },
 
//   }
// }

// const first=workWithSalary('Oleg Rapto',teaDepartment,arrayFound);
// console.log(first.getSalary('Oleg Rapto'));
// console.log(first.increaseSalary('Oleg Rapto',100));
// console.log(first.increaseSalary('Oleg Rapto',3000));
// console.log(first.decreaseSalary('Oleg Rapto',100));


// const second=workWithSalary('Oleg Rapto',coffeeDepartment,arrayFound);
// console.log(second.getSalary('Oleg Rapto'));
// console.log(second.increaseSalary('Oleg Rapto',100));






// // ------------TASK ONE

// // *******FIRST METHOD
// const power=function(a){
//       return a*a;
// };
// function doMath(a,callback){
//       console.log(`Підносимо до степеня ${a}-`);
//       console.log(callback(a));
// }

// doMath(4,power);
// doMath(2,power);

// // *******SECOND METHOD

// function doMath(a,callback){
//       console.log(`Підносимо до степеня ${a}-`);
//       console.log(callback(a));
// }

// doMath(4,function(a){
//       return a*a;
// });

// doMath(8,function(a){
//       return a*a;
// });

// // ------------TASK TWO

// const checkHowOld=function(year){
//  return year>=18?'Access is allowed.You are of legal age.':
// 'Access is prohibited.You are a minor.';
// };

// function registrationOnTheWebsite({name,year},callback){
// console.log(`${name}.You are ${year} years old.`);
// const message=callback(year);
// console.log(message);
// }

// const object1={
//       name:'Jon',
//       year:19,
// };
// const object2={
//       name:'Ben',
//       year:6,
// };
// const object3={
//       name:'Patty',
//       year:29,
// };

// registrationOnTheWebsite(object1,checkHowOld);
// registrationOnTheWebsite(object2,checkHowOld);
// registrationOnTheWebsite(object3,checkHowOld);

// // -------------TASK THREE

// const teaDepartment=[
//  {name:'Viktor Bars',
//   year:33,
//   city:'Lvov',
//   salary:2349,
//   experience:11,
//   },
//    {name:'Oleg Rapto',
//    year:43,
//    city:'Vynnyky',
//    salary:3349,
//    experience:21,
//   },
//   {name:'Mykola Sropny',
//    year:38,
//    city:'Lvov',
//    salary:2949,
//    experience:18,
//   }];

//   const coffeeDepartment=[{name:'Zenyk Revin',
//        year:49,
//        city:'Kalyniv',
//        salary:4349,
//        experience:28,
//        },
//        {name:'Nazar Bresko',
//        year:23,
//        city:'Lvov',
//        salary:2149,
//        experience:2,
//        },
//        {name:'Serhij Nestorko',
//        year:29,
//        city:'Vyshnia',
//        salary:2249,
//        experience:5,
//        },
//        {name:'Volodymyr Zyk',
//        year:34,
//        city:'Dibrova',
//        salary:2749,
//        experience:9,
//        }
// ];

// const total=function(elements){
//       let total=0;
//       elements.forEach(element => {
//       total+=element;
// });
// return total;
// }

// function middleAge(object,callback){
//       const totalAge=[];
    
//       object.forEach(element => {
//           totalAge.push(element.year);  
//       });

//       const middleAge=callback(totalAge)/object.length;

//       return Number(middleAge.toFixed(0));
// }
// console.log(middleAge(teaDepartment,total));
// console.log(middleAge(coffeeDepartment,total));



// function totalSalary(object,callback){
//       const array=[];

//        object.forEach(element=> {
//           const {salary}=element;
//           array.push(salary);
//        });
       
//      return callback(array);
//  }

//  console.log(totalSalary(teaDepartment,total));
//  console.log(totalSalary(coffeeDepartment,total));

// // ---------------TASK FOUR

// const makeOnOrder=function(order){
//       let message='';
//       switch(order){
//             case 100:
//                   message='You can order breakfast.';
//                   break;
//             case 200:
//                   message='You can order dinner.';
//                   break;
//             case 300:
//                   message='You can order supper';
//                   break;
//             default:
//                  message='Please contact the manager.';
//       }
//      const greeting=function(name){
//       console.log(`Hello ${name}. ${message}`);
//      }
//      return greeting;
// }
// const dinner=makeOnOrder(200);
// const breakfast=makeOnOrder(100);
// const supper=makeOnOrder(300);
// const eat=makeOnOrder(600);

// dinner('Mari');
// breakfast('Mango');
// supper('Patty');
// eat('Jon');

// // ------------TASK FIVE

// function distanceCheck(city,check,far,near) {
//       const isRecipientAvailable = Math.random()*(10-1)+1 ;
//       check(city);
//       if (isRecipientAvailable>5) {
//        far(city);
//         return;
//       }

//       near(city);
//     }
    
//     function distanceCheckNow(city) {
//       console.log(`We check the distance to ${city}, please wait...`);
    
//     }
    
//     function distanceIsFar(city) {
//       console.log(`Your city ${city} is far away.`);
   
//     }
    
//     function distanceIsNear(city) {
//       console.log(`Your city ${city} is near.`);

//     }
    
//     distanceCheck('Warsaw',distanceCheckNow,distanceIsFar,distanceIsNear);
//     distanceCheck('Lvov',distanceCheckNow,distanceIsFar,distanceIsNear);
// //--------- TASK ONE

// const cart=[54,28,105,70,92,17,120,14];
// let quantity=0;
 
// // *****FIRST METHOD

// for (let i = 0; i <= cart.length-1; i+=1) {
//       quantity+=cart[i];
// }
//  console.log( quantity);


// // *****SECOND METHOD

// for(const car of cart){
//       quantity+=car;
// }
//       console.log(quantity);


// //-------- TASK TWO

// const numbers=[1,5,8,9,12,4,15,27,30,15,11];
// let total=0;

// for (const number of numbers){
//       if(number%2===0){
//             total+=number;
//       }
// }
// console.log(total);

// //-------- TASK THREE

// const logins=["mango4","ki5ds","poly1scute","open2ser"];
// const loginToFind="poly1scute";
// let message='';

// // ****FIRST METHOD

// logins.includes(loginToFind)?
// message=`${loginToFind}-to find`:
// message=`${loginToFind}-not to find`;
// console.log(message);

// // *****SECOND METHOD

// for (let i = 0; i <= logins.length-1; i+=1)
// {
//      if (logins[i]===loginToFind){
     
//        message=`${loginToFind}-to find`;

//       break
//      }

//     message=`${loginToFind}-not to find`;
// }
// console.log(message);

// // *****THIRD METHOD

// for(const login of logins){
//       if(login===loginToFind){
//              message=`${loginToFind}-to find`;
//             break  
//       }
//       message=`${loginToFind}-not to find`;
// }
// console.log(message);

// // --------------TASK FOUR

// const numbers=[51,18,13,24,7,85,19];
// let smallNumber=numbers[0];

// for (const number of numbers){
//       if (number<smallNumber){
//             smallNumber=number
//       }
// }
// console.log(smallNumber);

// // ----------TASK FIVE

// const names=['Mango','Poly','Ajax','Jon','Anna',];
// let line='';

// // *****FIRST METHOD

// for (let i=0; i<names.length; i +=1){
//       if(i!==names.length-1){
//             line=''+names+",";
//       }
//       line=""+names;   
// }
// console.log(line);

// // *****SECOND METHOD

// line=names.join(',');
// console.log(line);

// // ----------TASK SIX

// const string='JavaScript';
// let newString='';
// for (let i=0; i<string.length;i+=1){
//    if(string[i]===string[i].toLowerCase()){
//       newString+= string[i].toLocaleUpperCase();
//       continue
//    }
//      newString+=string[i].toLowerCase()
// }
// console.log(newString);

// // ------------TASK SEVEN

// const title='Top 10 benefits of React framework';
// const newTitle=title.toLocaleLowerCase().split(' ').join('-');
// console.log(newTitle);

// // ----------TASK EIGHT

// const array1=[5,10,15,20];
// const array2=[10,20,30];
// const array=array1.concat(array2);

// let total=0;
// for(const value of array){
//       total+=value;
// }
// console.log(total);

// // --------TASK NINE

// const cards=['card1','card2','card3','card4','card5'];

// const cardToDelete='card3';
// cards.splice(cards.indexOf(cardToDelete),1);   
// console.log(cards);

// const cardToInsert='cards6';
// const index=3;
// cards.splice(index,0,cardToInsert);
// console.log(cards);

// const cardToUpdate='card4';
// cards.splice(cards.indexOf(cardToInsert),1,cardToUpdate);
// console.log(cards);
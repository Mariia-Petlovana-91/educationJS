const balance=8000;
const payment=7000;
const completeMessage='The operation is complete.';
const aboutOrderMessage=`Total purchase amount ${payment}.We check access to funds on the account.`;

console.log(aboutOrderMessage);

// FIRST METHOD

// if(payment<=balance){
//       console.log(`Balance: ${balance-payment}`);
// }else{
//       console.log('There are not enough funds in the account.');
// }

// SECOND METHOD

payment<=balance?
console.log(`Balance: ${balance-payment}`):
console.log('There are not enough funds in the account.');

console.log(completeMessage);


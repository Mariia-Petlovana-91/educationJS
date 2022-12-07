const totalSpent=50000;
const payment=400;
let discount=0;

if(totalSpent<=1000 && totalSpent>=100){
      discount=2
}else if (totalSpent>=1000 && totalSpent<=5000){
      discount=5
}else if (totalSpent<=100){
      discount=0
}else{
      discount=10
}
console.log(`Placed an order for the amount ${payment}.Your discount is ${discount}.`)



// ВИЗНАЧИТИ ЗАЛИШОК ВІД ЦІЛОГО


// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

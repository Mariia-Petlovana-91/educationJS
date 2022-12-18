const fruits=[
      {name:'lemon', quantity:120, price:320,},
      {name:'apple', quantity:820, price:120,},
      {name:'strawberry', quantity:410, price:280,},
      {name:'kiwi', quantity:670, price:420,}
];

const numbers=[23,560,,120,670,934,250,11,74];

const strings=['apple','red','seven','oll','strawberry'];

const filter=(array,callback)=>{
    const filteredArray=[];

  for(const el of array){
const result= callback(el);
      if(result===true){
            filteredArray.push(el);
      }
  }
  return filteredArray;
};

console.log(filter(numbers,value=> value<=300)); 
console.log(filter(numbers,value=> value<=300&&value>=100));    
console.log(filter(numbers,value=> value>300));  

console.log(filter(strings,value=> value==='oll')); 
console.log(filter(strings,value=> value==='hf')); 

console.log(filter(fruits,value=> value.quantity>=300)); 
console.log(filter(fruits,value=> value.price<=300));
console.log(filter(fruits,value=> value.price<=300||value.quantity>=300));





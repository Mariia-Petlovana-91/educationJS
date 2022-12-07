const employees=12;
let totalSalary=0;
for (let i = 1; i <= employees; i += 1) {
      let salary=Math.random()*(1000-500)+500;
      salary=Number(salary.toFixed(0));
      console.log(salary);
      console.log(`Salary of each ${i}-${salary}`);
      totalSalary+=salary;
    }
    console.log(Number(totalSalary.toFixed(0)));

// const min=3;
// const max=10;
// let total=0;
// for (let i = min; i <= max; i += 1) {
//      if(i%2===0){
//       total+=i;
//      }   
//           }
//           console.log(total);





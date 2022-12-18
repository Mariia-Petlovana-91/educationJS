// ---------TASK ONE forEach

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

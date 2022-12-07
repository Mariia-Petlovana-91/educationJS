const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
    isAvailable:true,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
    isAvailable:false,
  },
  {
    title: "Роман номер два",
    author: "Остап Дроздов",
    rating: 7.75,
    isAvailable:true,
  },
];



// // ------------TASK ONE



//   const findTitle=function(array,nameTitle){
//   let message='';

//      for(const ar of array){
    
//      ar.title===nameTitle?message=`${nameTitle}`:message='Not find';
//      }

//      return message;
//   }

// console.log(findTitle(books,"Роман номер два"));
// console.log(findTitle( books,'red'));

// // -------------TASK TWO

// const ollName=function(array){
//  const arrayNew=[];
// for (const ar of array){  
// arrayNew.push(ar.author);
// }
// return arrayNew;
// }
// console.log(ollName(books));

// // ------------TASK THREE

// const getOnlineBooks=function(parameter){
//       let  isAvailable=[];
//       for(const element of parameter){
//         if(element.isAvailable){
//           isAvailable.push(element);
//         }
//       }
//       return  isAvailable;
// }
// console.log(getOnlineBooks(books));

// // -------------TASK FOR

// const book = {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["historical prose", "adventure"],
//       rating: 8.38,
//     };


   
//     const color = Object.create(book);
//     color.pages='white';
//     console.log(Object.keys(color));
//     console.log(Object.values(color));
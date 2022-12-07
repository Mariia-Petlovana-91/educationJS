
// // -----------TASK ONE

// const books = 
//       {
//         title: "ssgrhjncv",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//         inStock:true,
//       };
     

//     const books1 = 
//       {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//         inStock:true,
//       };
// const booksOll={...books,name:'BABY',...books1};
// console.log(booksOll);


// // ------------TASK TWO

      const user={
            name:'Mari',
            year:31,
            country:{
                  city:'Lvov',
                  street:'Jasna',
            },
            isOnline:true,
           
      };
//      const{name,isOnline,year}=user;
//      console.log(`This is ${name}.She hawe ${year} year.She is online-${isOnline}.`);

// // ------------TASK THREE

//       const{name,isOnline=true,year}=user;
//       console.log(`This is ${name}.She hawe ${year} year.She is online-${isOnline}.`);

// // -------------TASK FOR

//       const {name:userName,year,country:{city:firstCity,street,house=12},isOnline}=user;
//       console.log(`This is ${userName}.She ${year}.${userName} live in ${firstCity} on the street ${street} at house ${house}.`);

// // -----------TASK FIVE

// const user1=[{
//       name:'Mari',
//       year:31,
//       country:{
//             sity:'Lvov',
//             street:'Jasna',
//       },
//       isOnline:true,
     
// }];

// let messge='';

// // *******FIRST METHOD
//             // for (const us of user1){
//             //       const {name,year,country:{sity:firsSity,street,hous=12},isOnline}= us;
//             //       messge=(`variable: ${name} ,${year,firsSity},${street}, ${hous}, ${isOnline}`);
//             // }

// // ******SECOND METHOD

//              for ( const {name,year,country:{sity:firsSity,street,hous=12},isOnline} of user1){
//                   messge=(`variable: ${name} ,${year,firsSity},${street}, ${hous}, ${isOnline}`);
//             }

//     console.log(messge);







const books = 
            {
              title: "The Last Kingdom",
              author: "Bernard Cornwell",
              rating: 8.38,
              inStock:true,
            };

// // ----------TASK SIX 
      
//             function thisBooks (book){
//                   console.log(book.title);
//                   console.log(book.inStock);
//                   console.log(book.name);
//             }

//             thisBooks(books);
            
//             thisBooks({
//                   title: "The Last Kingdom",
//                   author: "Bernard Cornwell",
//                   rating: 8.38,
//                   inStock:true,
//                 })


// //-------------TASK SEVEN

//       function thisBooks (book){
//        const {title,author,rating,inStock}=book;

//           console.log(book.title);
//           console.log(book.inStock);
//           console.log(book.name);
//          };


// // TASK EIGHT

//  function thisBooks ( {title,author,rating,inStock}){
 
//       console.log(title);
//       console.log(inStock);
//       };
                         
//       thisBooks(books);



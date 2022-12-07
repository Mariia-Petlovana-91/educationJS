// // *----'BASKET OF ORDERS'----*

// // {name:'apple',price:20,description:'nice green',}
// // {name:'grape',price:30,description:'pink big',}
// // {name:'strawberry',price:40,description:'red small',}
// // {name:'lemon',price:70,description:'yellow ua',}

// const cart={
//       items:[],

//       getItems(){
//             const {items}=this;  

//             return items;
//       },
//       add(product){
//             const{items}=this;

//             for(const item of items){
//                   if(item.name===product.name){

//                       return item.quantity+=1;
//                   }
//             }
            
//             const newProduct={
//                   ...product,
//                   quantity:1,
//             }

//              items.push(newProduct);
//       },
//       remove(productName){

// // FIRST METHOD

//             const {items}=this;

//             for (const item of items){
//                   const {name}=item;
//                   const deleteItem=items.indexOf(item);

//                   if(name===productName){
                       
//                        return  items.splice(deleteItem,1);
//                   }

//             }

// // NEXT METHOD

//       // const {items}=this;
//       // for (let i = 0; i < items.length; i+=1) {
//       //       const element = items[i];
//       //       const deleteElement=items.indexOf(element);
//       //       const {name }=element;
      
//       //       if(name===productName){
                       
//       //             return element.quantity===1?
//       //             items.splice(deleteElement,1):
//       //             element.quantity-=1;
//       //        }       
//       // }

//       },
//       clear(){

// // FIRST METHOD

//       return this.items=[];

// // NEXT METHOD

//       // const {items}=this;

//       // return items.splice(0,items.length);
//       },
//       countTotalPrice(){
//             const {items}=this;
//             let total=0;
//             for(const { price,quantity } of items){
//                   total+=price*quantity;
//             }
//             return total;
//       },
//       increaseQuantity(productName){
//             const {items}=this;

//           for(const item of items){
//             const {name}=item;

//             if(name===productName){
//                   return item.quantity+=1;
//             }
              
//           }
//       },
//       decreaseQuantity(productName){
//             const {items}=this;

//             for (const item of items){
//                   const {name}=item;
//                   const deleteItem=items.indexOf(item);

//                   if(name===productName){
                       
//                        return item.quantity===1?
//                        items.splice(deleteItem,1):
//                        item.quantity-=1;
//                   }
//       }
     
// },
// }

// cart.add({name:'apple',price:20,});
// cart.add({name:'grape',price:30,});
// cart.add({name:'strawberry',price:40,});
// cart.add({name:'lemon',price:70,});
// cart.add({name:'apple',price:20,});
// cart.add({name:'grape',price:30,});
// cart.add({name:'strawberry',price:40,});
// cart.add({name:'lemon',price:70,});
// // console.log(cart.getItems());

// console.log(cart.countTotalPrice());

// cart.remove('strawberry');
// // console.log(cart.getItems());

// console.log(cart.countTotalPrice());

// cart.increaseQuantity('apple');
// cart.increaseQuantity('apple');
// cart.increaseQuantity('apple');
// cart.increaseQuantity('grape');
// cart.increaseQuantity('lemon');
// // console.log(cart.getItems());

// console.log(cart.countTotalPrice());

// cart.add({name:'strawberry',price:40,});
// cart.increaseQuantity('strawberry');
// cart.increaseQuantity('strawberry');
// // console.log(cart.getItems());

// console.log(cart.countTotalPrice());

// cart.decreaseQuantity('apple');
// cart.decreaseQuantity('strawberry');
// cart.decreaseQuantity('lemon');
// // console.log(cart.getItems());

// console.log(cart.countTotalPrice());



// cart.clear();
// // console.log(cart.getItems());





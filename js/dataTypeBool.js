const x1=10;
const x2=20;
const number=12;
console.log(`Число ${number} попадає у відрізок ${x1} i ${x2} ?:`, number>x1 && number<x2);

const isOnline=true;
const isFriend=true;
const isOffline=false;
const openChat= isOnline && isFriend && !isOffline;
console.log("Чи можна відкрити чат?:" ,openChat);

// 1
const vip=false;
const pro=true;
const free=true;
const license=!free;
console.log("Клієнт і віп і про?:" ,license);

// 2
const sub="free";
const license1= sub==="vip" || sub==="pro";
console.log("Клієнт або віп або про ?:" ,license1);
const message1 = "1 followers" + 1 +"followers" +1;
console.log(message1);

const years= 10;
const firstName= "Anna";
const lastName= "Ruman";
const message= `Happy Birthday ${firstName} ${lastName}.You have today ${years} years!`;

console.log(message1);
console.log(message.length);

const number=message.length-1;

console.log(number);

console.log(message.indexOf("."));
console.log(message.toLowerCase());
console.log(message.toUpperCase().endsWith("gr"));
console.log(firstName.includes("n"));
// console.log(years.includes("1"));


const newMessage =message.replace("happy" ,"finish");
console.log(newMessage);
console.log(newMessage.replaceAll(newMessage,"and".toLocaleUpperCase()));
console.log(message.slice(4 ,30).toLocaleUpperCase(), 195050868);

const line= 'i have 24 years!yyy, yyyy, eee!';
console.log(line.endsWith('!'));
console.log(line.endsWith('l'));

let line2=line.replace("y",'5');
let line3= line.slice(line.indexOf('i'), line.indexOf('!'));
console.log(line3);           
console.log(line);

const string='Hello world!';

console.log(string);
console.log(string.at(-1));
console.log(string.at(1));
console.log(string.charAt(-20))


const User = function ({firstName, lastName, password} = {}){
	this.firstName = firstName;
	this.lastName = lastName;
	this.password = password;
};

User.prototype.changePassword = function (newPassword){
	this.password = newPassword;
}

User.prototype.changeLastName = function (newLastName){
	this.lastName = newLastName;
}

User.prototype.addAddress = function (address){
	 this.address=address;

}

User.logAddress = function (obj={}){
return obj.address||'address is not find';
}

const userMari = new User({
	firstName : 'Mari',
	lastName: 'Overt',
	password: 'qwe13r',
});

console.log(userMari);
userMari.changeLastName('Brown');
console.log(userMari);
console.log(User.logAddress(userMari));

const userValeri = new User({
	firstName : 'Valeri',
	lastName: 'Snep',
	password: 'qwe13fjkkr',
});

console.log(userValeri);
userValeri.addAddress({city:'Lvov', street:'Zelena', house:34});
console.log(userValeri);
console.log(User.logAddress(userValeri))

const userRos = new User({
	firstName : 'Ros',
	lastName: 'Braun',
	password: 'tnwc450',
});


userRos.changePassword('fjfr1');
userRos.addAddress({city:'London', house:6});
console.log(userRos);
console.log(User.logAddress(userRos))
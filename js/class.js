class User {
	
     	#message = 'Are you sure you want to change?';

	static changePassword(obj, newPssword) {
		
		obj.pasaaword = newPssword;
	};

	constructor({ name = '', email = '', pasaaword = '' } = {}) {
		this._name = name;
		this.email = email;
		this.pasaaword = pasaaword;
	};
      
	get name() {
		return this._name;
	};

	set name(newName) {
		console.log(this.#message);
		this._name = newName;
	}

	addAddress(address = {}) {
		console.log(this.#message);
		this.address = address;
     }
}

const userNazar = new User({
    rootselector: '#user' , name: 'Nazar', email: 'petNaz2@gmail.com', pasaaword: '12wernv'
});
userNazar.addAddress({ city: 'Lviv', street: 'Zelena', house: 5 });

console.log(userNazar);

User.changePassword(userNazar, 'petlovani');


console.log(userNazar);


class Hero {
	constructor({ name ='hero', xp=0 , range =0}={}) {
		this._name = name;
		this._xp = xp;
		this._range = range;
	};

	 get name() {
		return this._name;
	};

       set name(newName) {
		this._name = newName;
	};

	 get xp() {
		return this._xp;
	};

       set xp(newXp) {
		return this._xp = newXp;
	};

}

class Magick extends Hero {
	constructor({name, xp, range, option = [] } = {}) {
		super(name,xp,range)
		this.option=option;
	}

	addOption(newOption) {
		this.option.push(newOption);
	}
}

const mango = new Magick( []);
mango._name = 'mango';
mango._range = 1000;
mango._xp = 3;
mango.option = ['change'];

mango.addOption('ready');
console.log(mango.xp);
mango.name = 'rass';

console.log(mango);



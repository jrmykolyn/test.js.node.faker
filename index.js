// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const faker = require( 'faker' );

// --------------------------------------------------
// DECLARE CLASSES
// --------------------------------------------------
class Person {
	constructor( data ) {
		this.firstName = data.firstName;
		this.lastName = data.lastName;

		return this;
	}
}

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var people = [];

// --------------------------------------------------
// INIT
// --------------------------------------------------
for ( let i = 0, x = 10; i < x ; i++ ) {
	let p = new Person( {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName()
	} );

	people.push( p );
}

console.log( people );

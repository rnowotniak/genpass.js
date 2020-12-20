
const { genpass } = require('./genpass')

test('by default returns a non-empty password', () => {
	let password = genpass();

	expect(typeof password).toBe('string');
	expect(password.length > 0).toBe(true);
});

test('The parameter "length" allows to specify the password length', () => {
	let lengths = [3, 8, 12]
	for (const length of lengths) {
		let password = genpass({length});
		expect(password.length).toBe(length);
	}
});




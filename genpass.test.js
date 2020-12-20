
const genpass = require('./genpass')

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


test('Single number parameter (instead of hash) is taken as requested length', () => {
	let lengths = [2, 7, 12, 20]
	for (const length of lengths) {
		let password = genpass(length);
		expect(password.length).toBe(length);
	}
});





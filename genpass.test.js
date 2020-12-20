
const genpass = require('./genpass')

test('by default returns a non-empty password', () => {
	let defaultPass = genpass.genpass();

	expect(typeof defaultPass).toBe('string');
	expect(defaultPass.length > 0).toBe(true);
});



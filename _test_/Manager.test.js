const Manager = require('../lib/Manager');

test('Did we get an office number?', () => {
    const person = new Manager('Gunter', 6, 'goonts@adventuretime.com', 5556781234)
    expect(person.getOfficeNumber()).toBe(5556781234)
})

test('Did we get their role(Manager)?', () => {
    const person = new Manager('Gunter', 6, 'goonts@adventuretime.com', 5556781234)
    expect(person.getRole()).toBe('Manager')
})
const Intern = require('../lib/Intern');

test('Did we get the school?', () => {
    const person = new Intern('Marceline', 5, 'MarcelineVQ@adventuretime.com', 'Ooo University')
    expect(person.getSchool()).toBe('Ooo University')
})

test('Did we get their role(Intern)?', () => {
    const person = new Intern('Marceline', 5, 'MarcelineVQ@adventuretime.com', 'Ooo University')
    expect(person.getRole()).toBe('Intern')
})
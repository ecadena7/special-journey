const Engineer = require('../lib/Engineer');

test('Did we get a Github link?', () => {
    const person = new Engineer('Jake', 3, 'jakethedog@adventuretime.com', 'jake12')
    expect(person.getGithub()).toBe('jake12')
})

test('Did we get an employee?', () => {
    const person = new Engineer('Jake', 3, 'jakethedog@adventuretime.com', 'jake12')
    expect(person.getRole()).toBe('Engineer')
})
const Employee = require('../lib/Employee');

test('Did we get a name and an ID?', () => {
    const person = new Employee('Mae', 2, 'mae.thecorgi@email.com')
    expect(person.name).toBe('Mae');
    expect(person.id).toBe(2);
  });

test('Did we get a name?', () => {
    const person = new Employee('Zebra', 1, 'zebra.horse@gmail.com')
    expect(person.getName()).toBe('Zebra')
});

test('Did we get an id?', () => {
    const person = new Employee('Zebra', 1, 'zebra.horse@gmail.com')
    expect(person.getId()).toBe(1)
});

test('Did we get an email?', () => {
    const person = new Employee('Zebra', 1, 'zebra.horse@gmail.com')
    expect(person.getEmail()).toBe('zebra.horse@gmail.com')
});

test('Did we get an employee?', () => {
    const person = new Employee('Zebra', 1, 'zebra.horse@gmail.com')
    expect(person.getRole()).toBe('employee')
})
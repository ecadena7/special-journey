//must have name, id, email (getName), (getId), (getEmail), (getRole)

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`The name is ${this.name}`);
        return this.name;
    }

    getId() {
        console.log(`the ID is ${this.id}`);
        return this.id;
    }

    getEmail() {
        console.log(`The Email is ${this.email}`);
        return this.email;
    }

    getRole() {
        console.log(`Check out the role: ${this.Employee}`)
    }
}

module.exports = Employee;

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,id,email,school, role) {
        super(name,id,email);
        this.school = school;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;
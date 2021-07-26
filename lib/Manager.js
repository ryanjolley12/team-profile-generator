const Employee = require('../lib/Employee')

class Manager extends Employee{
    constructor(user = '', id = '', email = '', number = ''){
        super(user, id, email)
        this.number = number;
    }

    getOfficeNumber(){
        return this.number;
    }

    getRole(){
        return 'Manager'
    }
}

module.exports = Manager;
class Employee {
    constructor{user = '', id = ', email = ''){
        this.user = user;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.user;
    }

    getId(){
        return this.user;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return `Employee`
    }
}

module.exports = Employee; 
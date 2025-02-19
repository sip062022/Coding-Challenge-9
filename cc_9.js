// Task 1: Creating an Employee Class //

class Employee { // Creates class called employee
    constructor (name, id, department, salary) {  // defines the variables in the class
    this.name = name;
    this.id = id;
    this.department = department;
    this.salary = salary;
    }

    getDetails() {  // uses a method to format a string of employee details
        return `Name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`; // string to be displayed
    }

    calculateAnnualSalary() { // uses a method to calculate the salary
        return this.salary * 12; // formula to calculate salary
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // adds employee details to employee class

console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(`Annual Salary: $${emp1.calculateAnnualSalary()}`); // Expected output: $60000

// Task 2: Creating a Manager Class //

class Manager extends Employee { // creates class called manager that inherits from Employee class
    constructor (name, id, department, salary, teamSize) { // adds the teamSize property
    super(name, id, department, salary); // calls on the parent constructor from Employee
    this.teamSize = teamSize; // includes property teamSize in Manager class
    }

    getDetails() {  // overrides previous getDetails in employee class
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`; // string to be displayed
    }

    calculateBonus() { // creates bonus method
        return this.calculateAnnualSalary() * .10; // gives formula for calculating annual salary based off previous employee salary
    }
}

const mgr1 = new Manager ("John Smith", 201, "IT", 8000, 5); // adds manager details

console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary, $8000, Team Size, 5"
console.log(`Manager Bonus: $${mgr1.calculateBonus()}`); // Expected output: $9600

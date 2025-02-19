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
        return `Annual Salary: $${this.salary * 12}`; // formula to calculate salary
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // adds employee details to employee class

console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); // Expected output: $60000
// Task 1: Creating an Employee Class //

class Employee { // Creates class called employee
    constructor (name, id, department, salary) {  // defines the variables in the class
    this.name = name;
    this.id = id;
    this.department = department;
    this.salary = salary;
    }

    getDetails() {  // uses a method to format a string of employee details
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`; // string to be displayed
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
        return super.calculateAnnualSalary() * .10; // gives formula for calculating annual salary based off previous employee salary
    }

    calculateAnnualSalary() { // Task 4 
        return super.calculateAnnualSalary() + this.calculateBonus(); // adds annual salary method to managers as well
    }
}
const mgr1 = new Manager ("John Smith", 201, "IT", 8000, 5); // adds manager details

console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary, $8000, Team Size, 5"
console.log(`Manager Bonus: $${mgr1.calculateBonus()}`); // Expected output: $9600

// Task 3: Creating a Company Class //

class Company { // creates company class
    constructor (name) { // creates constructor for name
        this.name = name; // classifies name as this.name
        this.employees = []; // creates array for employees
    }

    addEmployee(employee) { // adds methods addEmployee
        this.employees.push(employee); // adds new employee to the array
    }

    listEmployees() { // adds method listEmployees
        this.employees.forEach(employee => {  // for each employee
            console.log(employee.getDetails()); // list details using getDetails method
        });
    }

    calculateTotalPayroll() { // Task 4, adding payroll method
        return this.employees.reduce((total, employee) => {  // Add all employee salaries 
            return total + employee.calculateAnnualSalary(); // Summation logic
        }, 0);
    }

    promoteToManager(employee, teamSize) { // Task 5, implementing promotions
        const promotedManager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); // Defines properties of new instance
        const index = this.employees.indexOf(employee);  // Replaces employee information with manager information
        if (index !== -1) {
            this.employees[index] = promotedManager;
        }
    }
}

const company = new Company("TechCorp"); // adds new company
company.addEmployee(emp1); // adds emp1 to the company
company.addEmployee(mgr1); // adds mgr1 to the company
company.listEmployees(); // lists all employees
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"


// Task 4: Implementing a Payroll System (See in task 3 for the code) //

console.log(`Total Payroll: $${company.calculateTotalPayroll()}`); // Expected output: "Total Payroll: 172800"

// Task 5: Implementing Promotions (See task 3 for the code) //

company.promoteToManager(emp1, 3);  // Gives employee 1 a 3 person team
company.listEmployees(); // Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"

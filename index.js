const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

// Code Here

class Employee {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }

  idBage() {
    console.log(`${this.name}:${this.name}`);
  }

  logManagerInfo(workingYears) {
    return;
  }
}

class Manager extends Employee {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super(name, position, yearJoined, salary);
    this.bonusPercentage = bonusPercentage;
  }
  salaryIncrease(increaseAmount) {
    this.salary = this.salary + increaseAmount;
  }
}

//let emp = new Employee();

let employees = employeesJSON.map(
  (i) => new Employee(i.name, i.position, i.yearJoined.salary)
);
let managers = managersJSON.map(
  (i) =>
    new Manager(i.name, i.position, i.yearJoined, i.salary, i.bonusPercentage)
);

// employees.forEach((i) => {
//   i.introduce();
// });

// managers.forEach((i) => {
//   i.introduce();
// });
console.log(employees);

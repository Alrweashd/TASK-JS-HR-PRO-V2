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
    console.log(`${this.position} : ${this.name}`);
  }

  logManagerInfo() {
    console.log(
      `${this.name} \n since ${this.getWorkingYears()} \nBouns % ${
        this.bonusPercentage
      }`
    );
  }

  getWorkingYears() {
    let year = new Date().getFullYear();
    let working = year - this.yearJoined;
    console.log(working);
    return working;
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
  (obj) => new Employee(obj.name, obj.position, obj.yearJoined, obj.salary)
);
//employees[0].idBage();
let managers = managersJSON.map(
  (i) =>
    new Manager(i.name, i.position, i.yearJoined, i.salary, i.bonusPercentage)
);
// Log the names of all employees using the forEach method using `idBadge` method.
employees.forEach((i) => {
  //   i.introduce();
  i.idBage();
});

let superHeroes = employees.filter((i) => i.position == "Developer");

//Loop through all the managers and increase their salaries by 1000 using the `increaseAmount` method if they have been working for more than 11 years.
console.log(managers[4].salary);
managers.forEach((i) => {
  if (i.getWorkingYears() > 11) {
    i.salaryIncrease(1000);
  }
});
console.log(managers[4].salary);
// managers.forEach((i) => {
//   i.introduce();
// });
//console.log(employees[0].idBage());

/*
4. Display iterate over all the managers and invoke the `logManagerInfo` method.
5. Create a new array containing the names of managers whose yearJoined 
is before 2012 and store in into a variable called `seniorExecutives`.
6. Return one manager with a bonusPercentage of 0.1 
and save it to a variable called `lowestBonus`.
7. Get the first employee with a salary greater than 8000 using 
the find method into a variable called `promotionCandidate`.
*/

managers.forEach((i) => i.logManagerInfo());

let seniorExecutives = managers
  .filter((i) => {
    if (i.yearJoined < 2012) {
      return i.name;
    }
  })
  .map((j) => j.name);
console.log(seniorExecutives);

let lowestBonus = managers.filter((i) => i.bonusPercentage == 0.1);
console.log("lowestBonus", lowestBonus);

//7. Get the first employee with a salary greater than 8000 using
//the find method into a variable called `promotionCandidate`.

let promotionCandidate = employees.find((i) => i.salary > 8000);
console.log("promotionCandidate", promotionCandidate);

/* 1. Find the employee with the highest salary and save it in 
a variable called `mostPaidEmployee`.
2. Calculate the total salary of all employees and store 
it into a variable called `totalSalaries`.
3. Sort the employees array based on their yearJoined in 
ascending order into a variable called `employeesSorted`. */
let maxSalay = employees[0].salary;
let obj = {};
let mostPaidEmployee = employees.forEach((i) => {
  if (i.salary > maxSalay) {
    maxSalay = i.salary;
    obj = i;
  }
});
console.log("maxSalay", maxSalay, obj);

let total = 0;
let totalSalaries = employees.forEach((i) => (total = total + i.salary));

let employeesSorted = employees.sort((i, j) => j.yearJoined - i.yearJoined);
console.log("employeesSorted", employeesSorted);

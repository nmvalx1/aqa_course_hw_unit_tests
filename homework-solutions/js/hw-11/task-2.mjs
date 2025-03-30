class Employee {
  #salary;
  constructor(firstName,lastName,profession,salary){
  this._firstName = firstName;
  this._lastName = lastName;
  this._profession = profession;
  this.#salary = salary;
  }
  get firstName(){
    return this._firstName;  
  }
  get lastName(){
    return this._lastName;
  }
  get profession(){
    return this._profession;
  }
  get salary(){
    return this.#salary
  }
  set firstName(value){
    if(!value || typeof value !== 'string' || value.length < 2 || value.length > 50 || value.match(/([^a-zA-Z])/) ){
      throw new Error(`Type of ${this.value} must be a "string" or length can be only from 2 to 50 symbols, also words can only contains latinskie letters`)
  }; 
    this._firstName = value;
  }
  set lastName(value){
    if(!value || typeof value !== 'string' || value.length < 2 || value.length > 50 || value.match(/([^a-zA-Z])/)){
      throw new Error(`Type of ${this.value} must be a "string" or length can be only from 2 to 50 symbols, also words can only contains latinskie letters`)
    };
    this._lastName = value;
  }
  set profession(value){
    if(!value || typeof value !== 'string' || value.match(/([^a-zA-Z ])/) || value === ' '){
      throw new Error(`Type of ${value} must be a "string" and can't be empty string and includes only latinskie lettres and space`)
    };
    this._profession = value;
  }
  set salary(value){
    if(!value || typeof value !== 'number' || value < 0 || value >= 10000){
      throw new Error(`Type of ${this.value} must be a "number" or ${this.value} < or = 0`)
    };
    this.#salary = value;
  }
  
  getFullName(){
  return `${this.firstName} ${this.lastName}`  
  };

}

class Company {
#employees
constructor(title,phone,address,employees){
this._title = title
this._phone = phone
this._address = address
this.#employees= []
}
get title(){
  return this._title
};
set title(value){
  if(!value || typeof value !== 'string'){
    throw new Error(`Type of ${value} must be a string`)
  }
  this._title = value;
}

get phone(){
  return this._phone
};
set phone(value){
  if(!value || typeof value !== 'number'){
    throw new Error(`Type of ${value} must be a number`)
  }
  this._phone = value;
}

get address(){
  return this._address
};
set address(value){
  if(!value || typeof value !== 'stirng'){
    throw new Error(`Type of ${value} must be a string`)
  }
  this._address = value;
}
get employees() {
  return this.#employees;
}

addEmployee(employee) {
  if (!(employee instanceof Employee)) {
      throw new Error(`${employee} должен быть из класса Employee`);
  }
  this.#employees.push(employee);
}

getEmployees() {
  return this.#employees;
}

getInfo() {
  return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.getEmployees().length}`;
}

findEmployeeByName(firstName) {
  const result = this.#employees.find(val => val.firstName === firstName);
  if (result) {
      return result;
  } else {
      throw new Error('Employee not found');
  }
}

#getEmployeeIndex(firstName) {
  const result = this.#employees.findIndex(val => val.firstName === firstName); 
  if (result === -1) {
      throw new Error('Employee not found');
  }
  return result;
}

removeEmployee(firstName) {
  this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
}

getTotalSalary() {
let result = this.#employees.reduce( (accum,value) => accum + value.salary, 0 );
return result;
}


}
// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
// const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

// const company = new Company('Tech Corp', '123-456', 'Main Street');
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// company.addEmployee(emp3);

// console.log(company.getTotalSalary());
// console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
// company.removeEmployee('John');
// console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };

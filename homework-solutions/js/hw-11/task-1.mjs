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
  if(!value || typeof value !== 'string'){
    throw new Error(`Type of ${this.value} must be a "string"`)
  };
  this._firstName = value;
}
set lastName(value){
  if(!value || typeof value !== 'string'){
    throw new Error(`Type of ${this.value} must be a "string"`)
  };
  this._lastName = value;
}
set profession(value){
  if(!value || typeof value !== 'string'){
    throw new Error(`Type of ${this.value} must be a "string"`)
  };
  this._profession = value;
}
set salary(value){
  if(!value || typeof value !== 'number' || value <= 0 ){
    throw new Error(`Type of ${this.value} must be a "number" or ${this.value} < or = 0`)
  };
  this.#salary = value;
}

getFullName(){
return `${this.firstName} ${this.lastName}`  
};
}

// const emp1 = new Employee('Aleksey', 'Doe', 'Developer', 3000);
// console.log(emp1.firstName); // "John"
// emp1.salary = 1000;
// console.log(emp1.salary); // 3100

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

get employees(){
  return this._employees
};
set address(value){
  if(!value || typeof value !== 'object'){
    throw new Error(`Type of ${value} must be a object`)
  }
  this._address = value;
}
addEmployee(employee){
  if(!(employee instanceof Employee)){
    throw new Error (`${employee} должен быть из класса Employee`)
  }
  this.#employees.push(employee);
};
  getEmployees(){
    return this.#employees
  };
  getInfo(){
  return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.getEmployees().length}`  
  }
};
// const company = new Company('Tech Corp', 123456, 'Main Street');
// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// console.log(company.getEmployees());

export { Employee, Company };

// Создайте интерфейс IPerson, абстрактный класс Employee, который реализует интерфейс IPerson, и конкретные классы Manager и Developer.
//   - Интерфейс IPerson должен содержать:
//       Стринговые поля: name, surname
//       Намберовые поля: experienceYears
//       Метод, возвращающий строку: getDetails().

//   - Абстрактный класс Employee должен:
//       Имплементировать интерфейс IPerson.
//       Содержать защищенное (protected) поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный (protected) абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
//       Метод calculateSalary() должен быть использован в конструкторе

//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)

interface IPerson {
    name: string;
    surname: string;
    experienceYears: number;
    getDetails(): string;
  };
  
  abstract class Employee implements IPerson {
    protected salary: number = 0;
    constructor(
      public name: string,
      public surname: string,
      public experienceYears: number,
    ) {}
    protected abstract calculateSalary(): number;
    getDetails(): string {
      return `The name of Employee is ${this.name}`;
    }
  };
  
  class Manager extends Employee {
  
   constructor (public name:string,public surname:string,public experienceYears:number, protected salary:number,public prefered:'scrum'|'kanban'){
      super(name,surname,experienceYears)
   } 
   public getDetails(): string {
      return `My name is ${this.name} ${this.surname}, I am Manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary` 
   }
   protected calculateSalary(): number {
       return this.experienceYears * 500
   }
  };
  
  // const mng = new Manager('Aleksey','Naumov',3,3000,'scrum')
  // console.log(mng.getDetails())
  
  class Developer extends Employee { 
      constructor (public name:string,public surname:string,public experienceYears:number, protected salary:number,public programmigLanguage:'js'|'ts'|'java'|'python'){
          super(name,surname,experienceYears)
       }
       public getDetails(): string {
          return `My name is ${this.name} ${this.surname}, I am Developer with ${this.experienceYears} years of experience in ${this.programmigLanguage} and ${this.salary}$ salary` 
       }
       protected calculateSalary(): number {
          return this.experienceYears * 1000
      }
  };
  // const mng = new Developer('Aleksey','Naumov',3,3000,'js')
  // console.log(mng.getDetails())
  
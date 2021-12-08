class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeesInformations() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class itDepartment extends Department{
    constructor(id:string, public admins:string[]){
        super(id, "IT")
    }
    printAdmins(){
        console.log(`admins: ${this.admins}`)
    }
    addEmployee(employee:string){
        if(employee === "max"){
            return
        }
        this.employees.push(employee)
    }
}


const accounting = new Department("d1", "accounting");

const itDep = new itDepartment("i1", ['max', 'fred'])



itDep.addEmployee("max");
itDep.addEmployee("Fred");
itDep.printEmployeesInformations();
itDep.printAdmins()
// const accountingCopy = { name:"Max",describe:accounting.describe}

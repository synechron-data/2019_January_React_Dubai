// class Employee {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }

//     setname(name) {
//         this.name = name;
//     }
// }

class Employee {
    constructor(name) {
        this.name = name;
        this.getName = () => {
            return this.name;
        }

        this.setname = (name) => {
            this.name = name;
        }
    }
}

var e1 = new Employee("Hello");
console.log(e1.getName());
e1.setname("Changed");
console.log(e1.getName());

var e2 = new Employee("Ram");
console.log(e2.getName());
e2.setname("Abhijeet");
console.log(e2.getName());
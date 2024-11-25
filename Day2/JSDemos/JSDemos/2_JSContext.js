// function Display() {
//     console.log(this);
// }

// // Display();
// Display.call();
// // Display.apply();

// var p = { id: 1 };
// Display.call(p);

class Person {
    constructor(age) {
        this.age = age;
    }

    growOld() {
        console.log(this);
        this.age += 1;
    }
}

// var p = new Person(20);
// console.log(p.age);
// p.growOld();
// console.log(p.age);

var p = new Person(20);

setInterval(p.growOld.bind(p), 1000);

setInterval(function () {
    console.log(p.age);
}, 1000);
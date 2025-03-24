// var x = 5

// function outer(){
//     function inner(){
//         console.log(x);
        
//     }
//     var x=10;
//     inner();

// }
// outer()

// var counter = (function() {
//     var count = 0;
//     return function(){
//         return ++count;
//     }
// })();

// console.log(counter());
// console.log(counter());

// console.log('start');
// setTimeout(function(){
//     console.log("Ass")
// }, 2000)
// console.log("End")

// var arr = [1, 2, 3];
// console.log(arr.push(1000));

// console.log(typeof 42);

// var x=10;
// function foo(){
//     console.log(x);
// }
// (function(){
//     var x= 20;
//     foo();
// })();


// function Person(name){
//     this.name = name;
// }

// Person.prototype.greet = function(){
//     console.log("Hello ", this.name);
    
// }

// var p1 = new Person('Alice');
// var p2 = Object.create(Person.prototype)
// p2.name = "bob";
// p1.greet();
// p2.greet()


// function greet(){
//     console.log("hello");
    
// }
// setTimeout(greet, 1000)

// function add(x, y){
//     return x+y;
// }
// console.log(add(2, 3, 4));


var x = 10;
function foo(){
    console.log(x);
    var x = 20;
}
foo()

# OOP in JavaScript

Object-Oriented Programming is a programming paradigm that uses "objects" to model real-world things. Each object contains data (properties) and behavior (methods).

It’s a style or way of writing programs using objects. These objects represent real-world things (like a car, a person, or a bank account) and contain data (called properties) and actions (called methods or functions).

We need OOP because,
- It makes code organized and easier to manage.
- Helps with reusing code.
- Makes your code more like the real world – easy to understand.
- It’s used in almost every modern programming language like Python, Java, C++, C#, etc.

Class:

A class is a blueprint or template used to create objects.
It defines the properties (data) and behaviors (functions) that the objects will have.

Think of it like a design for a house — it tells you how the house will look, but it's not the house itself.

Object:

An object is a real-world instance of a class.
It has actual values for the properties defined in the class and can perform the behaviors.

Like a real house built from the design — you can live in it!

How to Create a Class
```
class ClassName {
  // Constructor and methods go here
}
```
example 1. Creating a Person class
```
// Step 1: Create a class
class Person {
  // Step 2: Constructor is a special method used to initialize objects
  constructor(name, age) {
    // 'this' refers to the current object being created
    this.name = name; // Property: name
    this.age = age;   // Property: age
  }

  // Step 3: Method inside class
  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Another method
  isAdult() {
    return this.age >= 18;
  }
}

// Step 4: Create an object (instance) of the class
const person1 = new Person("Alice", 25); // Passing name and age to constructor
const person2 = new Person("Bob", 15);

// Step 5: Use methods
person1.greet();         // Output: Hi, my name is Alice and I am 25 years old.
console.log(person1.isAdult()); // true

person2.greet();         // Output: Hi, my name is Bob and I am 15 years old.
console.log(person2.isAdult()); // false
```

1. class

A class is a blueprint or template to create objects with the same structure and behavior.

Think of a cookie cutter 🍪. It shapes multiple cookies in the same form — that’s what a class does for objects.
```
class Person {
  // code here
}
```

2. object

An instance of a class. It's the actual thing created using the blueprint.

Class = Plan 🧾 → Object = Real Product 🧍
```
const person1 = new Person("Alice", 25); // Object created from Person class
```

3. constructor()

A special method inside the class that is automatically called when a new object is created. It sets initial values.

Like the setup wizard you get when you install a program.
```
constructor(name, age) {
  this.name = name;
  this.age = age;
}
```

4. this

The this keyword refers to the current object being worked on inside the class.

Think: “This particular object.”
```
this.name = name; // Assigning value to current object's name 
property
```

5. property

A variable attached to the object. Stores data about the object.

Properties = Data | Methods = Actions
```
this.name = name; // name is a property
```

6. method

A function inside a class that defines some behavior or action.

Think of it as a verb. "What can the object do?"
```
greet() {
  console.log("Hello!");
}
```

7. new

The keyword used to create an object from a class.

new = "make a new object"
```
const person1 = new Person("Alice", 25);
```

8. instance

A specific object created from a class.

Instance = Object made from a class, just like one car made from a car design.
```
// person1 is an instance of Person
```

9. get and set

Special keywords to define getters and setters for controlled access to properties.

Use when you want to protect or modify data access.
```
get details() {
  return `${this.name} is ${this.age} years old`;
}

set updateAge(age) {
  this.age = age;
}
```

10. static method

A method that belongs to the class itself, not to any object.

You call it directly using the class name, not an object.
```
static species() {
  return "Human";
}

Person.species(); // Correct
```

11. extends

Used when a class inherits from another class (for reusability of code).

"Child class extends the parent class"
```
class Dog extends Animal {
  // inherits Animal's properties and methods
}
```

12. super()

Used inside a constructor to call the constructor of the parent class.

It’s like calling your parent’s setup code.
```
constructor(name, age) {
  super(name); // call parent constructor
  this.age = age;
}
```

There are 4 pillors in OOPS as given below, 

#### **Encapsulation**
Encapsulation is the concept of bundling data (properties) and the methods (functions) that operate on that data into a single unit (object) and restricting direct access to some of the object's internal details.

In simpler words:

“Encapsulation = Protecting & organizing your code like a box 📦 where only the allowed stuff can be accessed.”

Why Do We Need Encapsulation?
- Security: Prevent direct modification of sensitive data
- Control: Let the object manage how its data is accessed or updated
- Maintainability: Easier to manage and debug complex systems
- Cleaner code: Organizes logic clearly within objects
- Abstraction: Hide internal complexity from the user

Tips to Remember

Think of private vs public. Private: Only for internal use (hidden). Public: Exposed to the outside world. Use # to declare private fields in ES6+. Access private data only through getter/setter methods

Object = data + methods = encapsulation box

example 1. Simple bank account example
```
class BankAccount {
  // Private property (cannot be accessed directly from outside)
  #balance = 0;

  constructor(owner) {
    this.owner = owner; // public property
  }

  // Public method to deposit money (controlled access)
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${this.owner} deposited $${amount}`);
    } else {
      console.log("Invalid deposit amount!");
    }
  }

  // Public method to get current balance (read-only access)
  getBalance() {
    return this.#balance;
  }
}

// Create object
const account1 = new BankAccount("Alice");

// Try interacting with the object
account1.deposit(100);              // ✅ Allowed
console.log(account1.getBalance()); // ✅ Output: 100

// Direct access is not allowed
// console.log(account1.#balance);  ❌ Syntax Error: Private field

// So #balance is fully encapsulated 🔐
```

Real-Life Analogy

🔐 ATM Machine
- You press buttons (public methods)
- You can't access the wiring or money box directly (private data)
- The system decides what you can do and how

Summary

Feature	Encapsulation in JavaScript

Core Idea	Wrap data + methods, hide sensitive parts

Private Syntax	#property (introduced in ES6)

Access Control	Use public methods like getBalance()

Key Benefit	Data security, organized structure, better control
Let me know if you want:

example 2. create a Student class where we: Keep some data private (e.g., grades), Allow updates only through controlled methods, And expose only safe, filtered information to the outside.
```
class Student {
  // Private property to store grades (can't access directly)
  #grades = [];

  constructor(name, rollNumber) {
    // Public properties
    this.name = name;
    this.rollNumber = rollNumber;
  }

  // Public method to add a grade
  addGrade(grade) {
    // Only allow grades between 0 and 100
    if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
      this.#grades.push(grade); // Safe update
      console.log(`Grade ${grade} added for ${this.name}`);
    } else {
      console.log("Invalid grade. Must be a number between 0 and 100.");
    }
  }

  // Public method to calculate average grade
  getAverageGrade() {
    if (this.#grades.length === 0) {
      return 0;
    }
    const total = this.#grades.reduce((sum, grade) => sum + grade, 0); // Sum of grades
    return (total / this.#grades.length).toFixed(2); // Average with 2 decimals
  }

  // Public method to display student info (without exposing raw grades)
  displayInfo() {
    console.log(`Student: ${this.name}, Roll No: ${this.rollNumber}`);
    console.log(`Average Grade: ${this.getAverageGrade()}`);
  }
}

// Using the Student class
const student1 = new Student("Rahul", 101);

// Adding grades
student1.addGrade(85); // Valid
student1.addGrade(92); // Valid
student1.addGrade(110); // Invalid
student1.addGrade("A"); // Invalid

// Displaying student info
student1.displayInfo();

// ❌ Trying to access private grades directly will throw an error
// console.log(student1.#grades); // ❌ SyntaxError: Private field
```

example 3. TemperatureSensor in a Weather App. Create a class to represent a temperature sensor that: Stores private temperature data. Allows safe access & conversion between Celsius and Fahrenheit
```
Define a class called TemperatureSensor

Make temperature a private field using #temperature

Create public methods:
    setTemperature(celsius) → updates temperature safely
    getCelsius() → returns Celsius
    getFahrenheit() → returns Fahrenheit
    display() → prints a summary

Create an object and test by calling methods
```

example 4. Employee Salary System in a Company. Manage employee salaries safely — users should:
- Not access or change salary directly
- Use methods for promotions and bonuses

```
Create class Employee

Make salary private using #salary

Use public methods:
- setSalary(amount)
- addBonus(amount)
- getSalary()
Protect against invalid changes
```

#### **Abstraction**
Abstraction means hiding complex internal logic and showing only the necessary details to the outside world.

Think of it as: “Don’t show the full machinery, just the buttons to use it.”

Abstraction = Hide the "How", show only the "What".

We need Abstraction because
- Makes code cleaner & simpler for users
- Hides complex or sensitive logic
- Increases security and control
- Reduces impact of internal changes on outside code
- Helps in maintaining and updating large codebases

example 1. create a class that hides the details of a printer's operation, and only exposes a simple way to print a document.
```
class Printer {
  // Private internal process (hidden logic)
  #checkInkLevel() {
    console.log("Checking ink level...");
    return true; // Always returns true for demo
  }

  #startPrintJob(document) {
    console.log(`Printing document: ${document}`);
  }

  // Public method - only one method exposed to the user
  print(document) {
    if (this.#checkInkLevel()) {
      this.#startPrintJob(document); // internal logic
      console.log("Print complete ✅");
    } else {
      console.log("Low ink ❌");
    }
  }
}

// Usage
const myPrinter = new Printer();
myPrinter.print("Project Report");

// ❌ Internal methods are hidden
// myPrinter.#checkInkLevel(); // Error: Private field
```

example 2. Online Payment System. Create a class called PaymentProcessor that handles payment logic. The user can:

Make payments

Check payment status

But all the complex internal logic like connecting to a payment gateway, logging, or calculating fees is abstracted away.
```
class PaymentProcessor {
  constructor(user) {
    this.user = user;
  }

  // 🔒 Private method to simulate connecting to a payment gateway
  #connectToGateway() {
    console.log("Connecting to secure payment gateway...");
  }

  // 🔒 Private method to simulate fee calculation
  #calculateTransactionFee(amount) {
    const fee = amount * 0.02; // 2% fee
    console.log(`Transaction fee: $${fee.toFixed(2)}`);
    return fee;
  }

  // 🔒 Private method to simulate logging
  #logTransaction(details) {
    console.log("Logging transaction:", details);
  }

  // Public method – exposed to the user
  makePayment(amount) {
    if (amount <= 0) {
      console.log("❌ Invalid amount. Payment failed.");
      return;
    }

    // 🔒 Internal complex logic (abstracted)
    this.#connectToGateway();
    const fee = this.#calculateTransactionFee(amount);
    const finalAmount = amount + fee;

    console.log(`Payment of $${amount.toFixed(2)} successful! Total charged: $${finalAmount.toFixed(2)}`);

    this.#logTransaction({ user: this.user, amount, fee, status: "Success" });
  }

  // Public method – another simple interface
  getPaymentStatus() {
    console.log("✔️ Your last payment was successful.");
  }
}

// Usage
const customer1 = new PaymentProcessor("John Doe");

customer1.makePayment(150);  // Uses the simple public method
customer1.getPaymentStatus(); // Only shows summary info

// ❌ Cannot access internal logic directly (abstraction works)
// customer1.#connectToGateway(); // Error: Private field
// customer1.#calculateTransactionFee(100); // Error
```

#### **Inheritance**
Inheritance is a key concept in Object-Oriented Programming (OOP) where one class (child) can inherit the properties and methods of another class (parent).

It helps you reuse code, extend functionality, and build a hierarchical structure of classes.

Child gets features from Parent — like family inheritance.

Types of Inheritance
| Type         | Description                                            | JavaScript Support |
|--------------|--------------------------------------------------------|--------------------|
| Single       | One child inherits from one parent                     | ✅ Yes             |
| Multilevel   | Child inherits from Parent, and Grandchild from Child  | ✅ Yes             |
| Hierarchical | Multiple children inherit from one parent              | ✅ Yes             |
| Multiple     | One child inherits from more than one parent           | ❌ Not directly    |

1. Single Inheritance

A child class inherits from one parent class.
"Single parent, single child — like one father, one son."
```
class Animal {
  eat() {
    console.log("Animal is eating 🍽️");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking 🐶");
  }
}

const myDog = new Dog();
myDog.eat();  // Inherited from Animal
myDog.bark(); // Own method
```

2. Multilevel Inheritance

A class inherits from a class that itself inherits from another class — a chain.

"Grandfather → Father → Son"
```
class LivingBeing {
  breathe() {
    console.log("Breathing... 💨");
  }
}

class Animal extends LivingBeing {
  eat() {
    console.log("Animal is eating 🍎");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking 🐶");
  }
}

const puppy = new Dog();
puppy.breathe(); // From LivingBeing
puppy.eat();     // From Animal
puppy.bark();    // From Dog
```

3. Hierarchical Inheritance

Multiple child classes inherit from the same parent class.

One parent, many children — like a parent with multiple kids.
```
class Vehicle {
  startEngine() {
    console.log("Engine started 🔑");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Driving a car 🚗");
  }
}

class Bike extends Vehicle {
  ride() {
    console.log("Riding a bike 🏍️");
  }
}

const myCar = new Car();
myCar.startEngine(); // From Vehicle
myCar.drive();       // From Car

const myBike = new Bike();
myBike.startEngine(); // From Vehicle
myBike.ride();        // From Bike
```

4. Multiple Inheritance (NOT directly supported in JS)

Not directly supported in ES6 classes. But we can simulate it using mixins.

Child with multiple parents — complex family 
```
const canFly = {
  fly() {
    console.log("Flying ✈️");
  }
};

const canSwim = {
  swim() {
    console.log("Swimming 🏊");
  }
};

class Creature {}

Object.assign(Creature.prototype, canFly, canSwim);

const duck = new Creature();
duck.fly();  // From mixin
duck.swim(); // From mixin
```

example 1. Transport Management System. Build a system where: All Vehicles share common features (like startEngine), Cars and Bikes have specific features, Use Single, Multilevel, and Hierarchical inheritance
```
// Base Class (Grandparent)
class Transport {
  constructor(type) {
    this.type = type;
  }

  info() {
    console.log(`This is a ${this.type} 🚙`);
  }
}

// Inherited by Vehicle (Multilevel Inheritance)
class Vehicle extends Transport {
  constructor(type, brand) {
    super(type); // Call parent constructor
    this.brand = brand;
  }

  startEngine() {
    console.log(`${this.brand} engine started 🔑`);
  }
}

// Inherited by Car (Multilevel: Transport → Vehicle → Car)
class Car extends Vehicle {
  constructor(brand, doors) {
    super("Car", brand); // 'type' passed as "Car"
    this.doors = doors;
  }

  drive() {
    console.log(`${this.brand} car is driving with ${this.doors} doors 🚗`);
  }
}

// Inherited by Bike (Hierarchical: Transport → Vehicle → Bike)
class Bike extends Vehicle {
  constructor(brand, hasHelmet) {
    super("Bike", brand);
    this.hasHelmet = hasHelmet;
  }

  ride() {
    console.log(`${this.brand} bike is riding 🏍️ Helmet: ${this.hasHelmet ? "Yes" : "No"}`);
  }
}

// Create Objects
const myCar = new Car("Toyota", 4);
myCar.info();         // From Transport
myCar.startEngine();  // From Vehicle
myCar.drive();        // From Car

console.log("-----------");

const myBike = new Bike("Yamaha", true);
myBike.info();         // From Transport
myBike.startEngine();  // From Vehicle
myBike.ride();         // From Bike
```

#### **Polymorphism**
Polymorphism means "many forms".
In Object-Oriented Programming, it allows different classes to define the same method differently.

Same method name, different behavior based on object type. One method, many meanings – it adapts to its object.

Just like how the word "run" can mean:
- A person runs 👟
- A program runs 💻
- A car engine runs 🚗

example 1. Shape Drawing System
```
// Base Class
class Shape {
  draw() {
    console.log("Drawing a generic shape 🎨");
  }
}

// Derived Class 1
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle ⭕");
  }
}

// Derived Class 2
class Square extends Shape {
  draw() {
    console.log("Drawing a square 🔲");
  }
}

// Derived Class 3
class Triangle extends Shape {
  draw() {
    console.log("Drawing a triangle 🔺");
  }
}

// Function that uses polymorphism
function renderShape(shape) {
  shape.draw(); // Calls correct draw() based on object type
}

// Create different shapes
const circle = new Circle();
const square = new Square();
const triangle = new Triangle();

// Same method name, different behavior
renderShape(circle);    // Output: Drawing a circle ⭕
renderShape(square);    // Output: Drawing a square 🔲
renderShape(triangle);  // Output: Drawing a triangle 🔺
```

example 2. Notification System. We want to send notifications through different channels:
- Email ✉️
- SMS 📱
- Push Notification 🔔

Each notification type should have a method send() — same method name, but different behavior.
That's Polymorphism in action! 
```
// Base class
class Notification {
  send(message) {
    console.log("Sending generic notification: " + message);
  }
}

// Subclass for Email
class EmailNotification extends Notification {
  send(message) {
    console.log(`📧 Sending Email: ${message}`);
  }
}

// Subclass for SMS
class SMSNotification extends Notification {
  send(message) {
    console.log(`📱 Sending SMS: ${message}`);
  }
}

// Subclass for Push Notification
class PushNotification extends Notification {
  send(message) {
    console.log(`🔔 Sending Push Notification: ${message}`);
  }
}

// Function that accepts any type of notification
function notifyUser(notificationChannel, message) {
  notificationChannel.send(message); // Polymorphic behavior
}

// Creating different notification objects
const email = new EmailNotification();
const sms = new SMSNotification();
const push = new PushNotification();

// Using polymorphism - same method, different results
notifyUser(email, "Welcome to our platform!");
notifyUser(sms, "Your OTP is 123456");
notifyUser(push, "You have a new message!");
```

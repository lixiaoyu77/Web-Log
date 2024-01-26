# JS的继承

在 JavaScript 中，除了使用 ES6 的类继承之外，还可以通过原型链、构造函数和组合继承等方式来实现继承。以下是几种常见的继承方式：

1. 原型链继承：
通过将子类的原型指向父类的实例，从而实现继承。但这种方式有一个缺点，即子类共享父类的属性，对父类属性的修改会影响到所有子类的实例。

javascript
Copy code
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  this.breed = breed;
}

Dog.prototype = new Animal('Dog');

Dog.prototype.bark = function() {
  console.log(`${this.name} is barking.`);
};

const myDog = new Dog('Buddy', 'Labrador');
myDog.eat();  // 输出: Buddy is eating.
myDog.bark(); // 输出: Buddy is barking.
2. 构造函数继承（借用构造函数）：
通过在子类的构造函数中调用父类的构造函数，实现对父类属性的继承。这种方式解决了原型链继承的缺点，但没有继承父类原型上的方法。

javascript
Copy code
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // 借用构造函数
  this.breed = breed;
}

const myDog = new Dog('Buddy', 'Labrador');
myDog.eat(); // TypeError: myDog.eat is not a function
3. 组合继承：
结合原型链继承和构造函数继承的方式，既继承了父类原型上的方法，又避免了原型链继承的缺点。

javascript
Copy code
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // 借用构造函数
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // 继承父类原型上的方法
Dog.prototype.constructor = Dog; // 修复构造函数指向

const myDog = new Dog('Buddy', 'Labrador');
myDog.eat();  // 输出: Buddy is eating.
以上是几种常见的 JavaScript 继承方式。在实际开发中，可以根据需要选择适合的继承方式。 ES6 的类继承在语法上更加简洁，但在某些情况下，传统的继承方式仍然是有效的。



# ES6 继承
引入了一种更方便的继承方式，即类继承
在ES6中，可以通过 class 关键字定义类，使用 extends 关键字实现类之间的继承

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 调用父类的构造函数
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// 创建实例
const myDog = new Dog('Buddy', 'Labrador');

// 调用方法
myDog.eat();  // 输出: Buddy is eating.
myDog.bark(); // 输出: Buddy is barking.
```
Dog 类继承了 Animal 类
关键点有几个：

使用 extends 实现继承。
在 constructor 中使用 super 调用父类的构造函数。
子类可以新增自己的方法，也可以覆盖父类的方法。
需要注意的是，在类继承中，子类会继承父类的实例属性和方法。ES6 的继承是基于原型链的，因此子类实例的原型链上会包含父类的原型。

另外，ES6 的类继承还引入了 static 关键字，用于定义类的静态方法，这些方法属于类而不是实例。

javascript
Copy code
class MathOperation {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }
}

console.log(MathOperation.add(5, 3));      // 输出: 8
console.log(MathOperation.subtract(10, 4)); // 输出: 6
这是一个简单的 ES6 类继承的介绍。ES6 的类机制更加清晰和面向对象，使得 JavaScript 中的继承更加易于理解和使用。




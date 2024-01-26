# JS的继承
1. **原型链继承**
通过将子类的原型指向父类的实例，从而实现继承  
但这种方式有一个缺点，即子类共享父类的属性，对父类属性的修改会影响到所有子类的实例  

```javascript
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
```

2. **构造函数继承**：
通过在子类的构造函数中调用父类的构造函数，实现对父类属性的继承  
这种方式解决了原型链继承的缺点，但没有继承父类原型上的方法  
```javascript
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
```

3. **组合继承**：
结合原型链继承和构造函数继承的方式，既继承了父类原型上的方法，又避免了原型链继承的缺点。
```javascript
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
```
4. 原型式继承
5. 寄生式继承
6. 寄生组合式继承

#

# ES6 继承
ES6引入了一种更方便,更简洁的继承方式，即**类继承**
通过 class 关键字定义类，使用 extends 关键字实现类之间的继承
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal { //Dog 类继承了 Animal 类
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

关键点有几个：
1. 使用 extends 实现继承。
2. 在 constructor 中使用 super 调用父类的构造函数。
3. 子类可以新增自己的方法，也可以覆盖父类的方法。
**需要注意的是**，在类继承中，子类会继承父类的实例属性和方法。ES6 的继承是基于原型链的，因此子类实例的原型链上会包含父类的原型

### ES6 的类继承还引入了 static 关键字，用于定义类的静态方法，这些方法属于类而不是实例。
```javascript
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
```

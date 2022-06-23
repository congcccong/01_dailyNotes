# Symbol

symbol

## Symbol

**Symbol 使用场景介绍\_86**

Symbol 用于防止属性名冲突而产生的，比如向第三方对象中添加属性时。

Symbol 的值是唯一的，独一无二的不会重复的

## 基础知识

**声明定义 Symbol 的几种方式\_87**

### Symbol

```js
let hd = Symbol();
let edu = Symbol();
console.log(hd); //Symbol()
console.log(hd == edu); //false
```

Symbol 不可以添加属性

```js
let hd = Symbol();
hd.name = '后盾人';
console.log(hd.name); //undefined，严格模式报错
```

> 学习备注： 给数值类型添加属性也是返回 undefined

### 描述参数

可传入字符串用于描述 Symbol，方便在控制台分辨 Symbol

```js
let hd = Symbol('is name');
let edu = Symbol('这是一个测试');

console.log(hd); //Symbol(is name)
console.log(edu.toString()); //Symbol(这是一个测试)
```

传入相同参数 Symbol 也是独立唯一的，因为参数只是描述而已，但使用 `Symbol.for`则不会

```js
let hd = Symbol('后盾人');
let edu = Symbol('后盾人');
console.log(hd == edu); //false
```

使用`description`可以获取传入的描述参数

```js
let hd = Symbol('后盾人');
console.log(hd.description); //后盾人
```

### Symbol.for

根据描述获取 Symbol，如果不存在则新建一个 Symbol

- 使用 Symbol.for 会在系统中将 Symbol 登记
- 使用 Symbol 则不会登记

> Symbol.for 声明的 symbol 是全局定义的，而普通 symbol 则没有这个特性。

```js
let hd = Symbol.for('后盾人');
let edu = Symbol.for('后盾人');
console.log(hd == edu); //true
```

### Symbol.keyFor

`Symbol.keyFor` 根据使用`Symbol.for`登记的 Symbol 返回描述，如果找不到返回 undefined 。

```js
let hd = Symbol.for('后盾人');
console.log(Symbol.keyFor(hd)); //后盾人

let edu = Symbol('houdunren');
console.log(Symbol.keyFor(edu)); //undefined

// 关于 description 和 toString()
console.log(hd.description); //后盾人
console.log(edu.description); //houdunren
console.log(edu.toString()); //Symbol(houdunren)
```

**使用 Symbol 解决字符串耦合问题\_88**

### 对象属性

Symbol 是独一无二的所以可以保证对象属性的唯一。

- Symbol 声明和访问使用 `[]`（变量）形式操作
- 也不能使用 `.` 语法因为 `.`语法是操作字符串属性的。

下面写法是错误的，会将`symbol` 当成字符串`"symbol"`处理

```js
let symbol = Symbol('后盾人');
let obj = {
  symbol: 'hdcms.com',
};
console.log(obj); //{symbol: 'hdcms.com'}
```

正确写法是以`[]` 变量形式声明和访问

```js
let symbol = Symbol('后盾人');
let obj = {
  [symbol]: 'houdunren.com',
};
console.log(obj[symbol]); //houdunren.com
```

```js
let user1 = { name: 'lisi', key: Symbol() };
let user2 = { name: 'lisi', key: Symbol() };
let grade = {
  [user1.key]: { js: 100, css: 89 },
  [user2.key]: { js: 35, css: 55 },
};
console.log(grade); //{Symbol(): {…}, Symbol(): {…}}
```

> 学习备注： 对象的属性名用`[变量]`表示时，如果里面变量是引用数据类型，会调用 toString 方法赋值给属性名，因此如果上面例子中 grade 的属性写[user1]、[user2]时，他们的实际属性名都变成了`[object Object]` ，所以还是会产生覆盖。

> 学习备注： 对象属性名的方括号 `[]` 里面也可以写表达式，于是对象的属性也可以这样使用
>
> ```js
> let obj = {
>   [Symbol.for('site')]: 'houdunren.com',
> };
> console.log(obj[Symbol.for('site')]); //houdunren.com
> ```

## 实例操作

**Symbol 在缓存容器中的使用\_89**

### 缓存操作

使用`Symbol`可以解决在保存数据时由于名称相同造成的耦合覆盖问题。

```js
class Cache {
  static data = {};
  static set(name, value) {
    this.data[name] = value;
  }
  static get(name) {
    return this.data[name];
  }
}

let user = {
  name: '后盾人',
  key: Symbol('缓存'),
};

let cart = {
  name: '购物车',
  key: Symbol('购物车'),
};

Cache.set(user.key, user);
Cache.set(cart.key, cart);
console.log(Cache.get(user.key));
```

**扩展特性与对象属性保护\_90**

### 遍历属性

Symbol 不能使用 `for/in`、`for/of` 遍历操作

```js
let symbol = Symbol('后盾人');
let obj = {
  name: 'hdcms.com',
  [symbol]: 'houdunren.com',
};

for (const key in obj) {
  console.log(key); //name
}

for (const key of Object.keys(obj)) {
  console.log(key); //name
}
```

可以使用 `Object.getOwnPropertySymbols` 获取所有`Symbol`属性

```js
...
for (const key of Object.getOwnPropertySymbols(obj)) {
 console.log(key); //Symbol(后盾人)
}
```

也可以使用 `Reflect.ownKeys(obj)` 获取所有属性包括`Symbol`

```js
...
for (const key of Reflect.ownKeys(obj)) {
 console.log(key);
}
//name
//Symbol(后盾人)
```

如果对象属性不想被遍历，可以使用`Symbol`保护

```js
const site = Symbol('网站名称');
class User {
  constructor(name) {
    this[site] = '后盾人';
    this.name = name;
  }
  getName() {
    return `${this[site]}-${this.name}`;
  }
}
const hd = new User('向军大叔'); //后盾人-向军大叔
console.log(hd.getName());
for (const key in hd) {
  console.log(key); //name
}
```

# Set

## Set

**Set类型与Array与Object对比分析_91**

> Set 类似于值不能重复的数组。

用于存储任何类型的唯一值，无论是基本类型还是对象引用。

- 只能保存值没有键名
- 严格类型检测，如字符串数字不等于数值型数字
- 值是唯一的
- 遍历顺序是添加的顺序，方便保存回调函数

### 基本使用

Set和对象比较：对象的属性名，最终都会转为字符串

```js
let obj = { 1: 'hdcms', "1": 'houdunren' };
console.table(obj); //{1:"houdunren"}
```

使用对象做为键名时，会将对象转为字符串后使用

```js
let hd = { [obj]: '后盾人' };
console.table(hd); //{[object Object]: '后盾人'}

console.log(hd[obj.toString()]); //后盾人
console.log(hd['[object Object]']); //后盾人
```

**Set元素检测与管理_92**

使用数组做初始数据

```js
let hd = new Set(['后盾人', 'hdcms']);
console.log(hd.values()); //{SetIterator {'后盾人', 'hdcms'}
```

也可以使用字符串作为初始数据

```js
let set = new Set('houdunren');
console.log(set); //Set(7) {'h', 'o', 'u', 'd', 'n', …}
```

Set 中是严格类型约束的，下面的数值`1`与字符串`"1"`属于两个不同的值

```js
let set = new Set();
set.add(1);
set.add('1');
console.log(set); //Set(2) {1, "1"}
```

使用 `add` 添加元素，不允许重复添加`hdcms`值 （add函数返回值是这个set对象）0

```js
let hd = new Set();

hd.add('houdunren');
hd.add('hdcms');
hd.add('hdcms');

console.log(hd.values()); //SetIterator {"houdunren", "hdcms"}
```

### 获取数量

获取元素数量 set.size

```js
let hd = new Set(['后盾人', 'hdcms']);
console.log(hd.size); //2
```

### 元素检测

检测元素是否存在 set.has()

```js
let hd = new Set();
hd.add('hdcms');
console.log(hd.has('hdcms')); //true
```

### 删除元素

使用 `delete` 方法删除单个元素，返回值为`boolean`类型

```js
let hd = new Set();
hd.add('hdcms');
hd.add('houdunren');

console.log(hd.delete('hdcms')); //true

console.log(hd.values()); //SetIterator {'houdunren'}
console.log(hd.has('hdcms')); //false
console.log(hd.delete('hdcms')); //false
```

使用 `clear` 删除所有元素(备注：没有返回值)

```js
let hd = new Set();
hd.add('hdcms');
hd.add('houdunren');
hd.clear();
console.log(hd.values()); //SetIterator {}
```

**类型之间互相帮助才是好兄弟_93**

### 数组转换

可以使用`点语法` 或 `Array.form` 静态方法将 Set 类型转为数组，这样就可以使用数组处理函数了

```js
const set = new Set(['hdcms', 'houdunren']);
console.log([...set]); //["hdcms", "houdunren"]
console.log(Array.from(set)); //["hdcms", "houdunren"]
```

移除 Set 中大于 5 的数值

```js
let hd = new Set('123456789');
hd = new Set([...hd].filter((item) => item < 5));
console.log(hd); //Set(4) {'1', '2', '3', '4'}
```

### 去除重复

去除字符串重复

```js
console.log([...new Set('houdunren')].join('')); //houdnre
```

去除数组重复

```js
const arr = [1, 2, 3, 5, 2, 3];
console.log(...new Set(arr)); // 1,2,4,5
```

**遍历Set类型的方式_94**

### 遍历数据

使用 `keys()/values()/entries()` 都可以返回迭代对象，因为`set`类型只有值所以 `keys与values` 方法结果一致。

```js
const hd = new Set(['hdcms', 'houdunren']);
console.log(hd.values()); //SetIterator {"hdcms", "houdunren"}
console.log(hd.keys()); //SetIterator {"hdcms", "houdunren"}
console.log(hd.entries()); //SetIterator {"hdcms" => "hdcms", "houdunren" => "houdunren"}
```

> 学习备注： 
>
> 对数组执行这三个方法返回的都是Array Iterator {}。 使用for of 遍历 Iterator 对象，分别返回key，value，[key,value]。其中Set的key和value相同。
>
> 如果set对象里是引用类型的，返回的key和value也都是引用类型的。
>
> ```js
> const hd = new Set(['hdcms', [4, 5, 6]]);
> for (const ele of hd.entries()) {
>     console.log(ele);
> }
> // (2) ['hdcms', 'hdcms']
> // (2) [Array(3), Array(3)]
> ```

可以使用 `forEach` 遍历 Set 数据。

为了保持和遍历数组参数统一，函数中的 value 与 key 是一样的。

```js
let arr = [7, 6, 2, 8, 2, 6];
let set = new Set(arr);
//使用forEach遍历
set.forEach((item, key) => console.log(item, key));
```

也可以使用 `forof` 遍历 Set 数据，默认使用 `values` 方法创建迭代器

```js
//使用for/of遍历
let set = new Set([7, 6, 2, 8, 2, 6]);

for (const iterator of set) {
  console.log(iterator); //7 6 2 8
}
```

> 学习备注：
>
> 在 for/of 或者 forEach 遍历 Set 的过程中，我尝试在遍历中可不可以单独更改set的value，这样就会使key和value值不通。尝试过成功，发现set是不能通过set[keys]访问到元素的，所以在遍历的时候不能对set的值更改。使用set[key]添加的属性将set作为了对象，添加了额外的属性。在使用for/in遍历对象时，只能访问到添加的属性，而不能访问到作为set中存放的元素。
>
> ```js
> let arr = [7, 6, 2, 8, 2, 6];
> let set = new Set(arr);
> for (let iterator of set.keys()) {
>     set[iterator] = 'ww';
>     console.log(iterator); //7 6 2 8
> }
> console.log(set); 
> //Set(4) {7, 6, 2, 8}
> 
> for (const key in set) {
>     console.log(key, set[key]);
> }
> // '2' 'ww'
> // '6' 'ww'
> // '7' 'ww'
> // '8' 'ww'
> ```
>
> 而数组则可以通过arr[index]来对元素值进行更改。
>
> for/of 循环遍历数组/Set对象，默认使用的values方法。即直接遍历对象是遍历 values() 方法返回的迭代器的简写形式。for/of 其实是遍历迭代器的。



**使用Set处理网站关键词_95**

### 搜索实例

下面通过历史搜索的示例体验`Set` 类型

![Untitled](https://doc.houdunren.com/assets/img/Untitled-0727351.f2e8978f.gif)

```html
<style>
  body {
    padding: 200px;
  }

  * {
    padding: 0;
    margin: 0;
  }

  input {
    width: 200px;
    border: solid 1px #d63031;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    width: 200px;
    padding-top: 20px;
  }

  ul li {
    border: solid 1px #ddd;
    padding: 10px;
    margin-bottom: -1px;
  }

  ul li:nth-of-type(odd) {
    background: #00b894;
  }
</style>

<body>
  <input type="text" />
  <ul></ul>
</body>
<script>
  let obj = {
    words: new Set(),
    set keyword(word) {
      this.words.add(word);
    },
    show() {
      let ul = document.querySelector('ul');
      ul.innerHTML = '';
      this.words.forEach((item) => {
        ul.innerHTML += '<li>' + item + '</li>';
      });
    },
  };

  document.querySelector('input').addEventListener('blur', function () {
    obj.keyword = this.value;
    obj.show();
  });
</script>
```

**并集-交集-差集算法实现_96**

### 交集

获取两个集合中共同存在的元素

```js
let hd = new Set(['hdcms', 'houdunren']);
let cms = new Set(['后盾人', 'hdcms']);
let newSet = new Set([...hd].filter((item) => cms.has(item)));
console.log(newSet); //{"hdcms"}
```

### 差集

在集合 a 中出现但不在集合 b 中出现元素集合

```js
let hd = new Set(['hdcms', 'houdunren']);
let cms = new Set(['后盾人', 'hdcms']);
let newSet = new Set([...hd].filter((item) => !cms.has(item)));
console.log(newSet); //{"houdunren"}
```

### 并集

将两个集合合并成一个新的集合，由于 Set 特性当然也不会产生重复元素。

```js
let hd = new Set(['hdcms', 'houdunren']);
let cms = new Set(['后盾人', 'hdcms']);
let newSet = new Set([...hd, ...cms]);
console.log(newSet);
```

## WeakSet

**WeakSet语法介绍_97**

WeakSet 结构同样不会存储重复的值，它的成员必须只能是对象类型的值。

- 垃圾回收不考虑 WeakSet，即被 WeakSet 引用时引用计数器不加一，所以对象不被引用时不管 WeakSet 是否在使用都将删除
- 因为 WeakSet 是弱引用，由于其他地方操作成员可能会不存在，所以不可以进行`forEach( )`遍历等操作
- 也是因为弱引用，WeakSet 结构没有 keys( )，values( )，entries( )等方法和 size 属性
- 因为是弱引用所以当外部引用删除时，希望自动删除数据时使用 `WeakSet`

### 声明定义

以下操作由于数据不是对象类型将产生错误

```js
new WeakSet(['hdcms', 'houdunren']); //Invalid value used in weak set

new WeakSet('hdcms'); //Invalid value used in weak set
```

WeakSet 的值必须为对象类型

```js
new WeakSet([['hdcms'], ['houdunren']]);
new WeakSet([['hdcms', 'houdunren']]);
```

将 DOM 节点保存到`WeakSet`

```js
document.querySelectorAll('button').forEach((item) => Wset.add(item));
```

### 基本操作

下面是 WeakSet 的常用指令

```js
const hd = new WeakSet();
const arr = ['hdcms'];
//添加操作
hd.add(arr);
console.log(hd.has(arr));

//删除操作
hd.delete(arr);

//检索判断
console.log(hd.has(arr));
```

**引用类型的垃圾回收原理_98**

**WeakSet弱引用特性_99**

### 垃圾回收

WeaSet 保存的对象不会增加引用计数器，如果一个对象不被引用了会自动删除。

- 下例中的数组被 `arr` 引用了，引用计数器+1
- 数据又添加到了 hd 的 WeaSet 中，引用计数还是 1
- 当 `arr` 设置为 null 时，引用计数-1 此时对象引用为 0
- 当垃圾回收时对象被删除，这时 WakeSet 也就没有记录了

```js
const hd = new WeakSet();
let arr = ['hdcms'];
hd.add(arr);
console.log(hd.has(arr));

arr = null;
console.log(hd); //WeakSet {Array(1)}

setTimeout(() => {
  console.log(hd); //WeakSet {}
}, 1000);
```

**TODO任务列表中使用WeakSet_100**

### 案例操作

![Untitled](https://doc.houdunren.com/assets/img/Untitled-1382986.b76dd97f.gif)

```html
<style>
  * {
    padding: 0;
    margin: 0;
  }
  body {
    padding: 200px;
  }
  ul {
    list-style: none;
    display: flex;
    width: 200px;
    flex-direction: column;
  }
  li {
    height: 30px;
    border: solid 2px #e67e22;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    color: #333;
    transition: 1s;
  }
  a {
    border-radius: 3px;
    width: 20px;
    height: 20px;
    text-decoration: none;
    text-align: center;
    background: #16a085;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
  .remove {
    border: solid 2px #eee;
    opacity: 0.8;
    color: #eee;
  }
  .remove a {
    background: #eee;
  }
</style>

<body>
  <ul>
    <li>houdunren.com <a href="javascript:;">x</a></li>
    <li>hdcms.com <a href="javascript:;">x</a></li>
    <li>houdunwang.com <a href="javascript:;">x</a></li>
  </ul>
</body>

<script>
  class Todos {
    constructor() {}
    run() {
      this.items = document.querySelectorAll('ul>li');
      this.lists = new WeakSet();
      this.record();
      this.addEvent();
    }
    addEvent() {
      this.items.forEach((item) => {
        item.querySelector('a').addEventListener('click', (event) => {
          //检测WakeSet中是否存在Li元素
          const parentElement = event.target.parentElement;
          if (!this.lists.has(parentElement)) {
            alert('已经删除此TODO');
          } else {
            //删除后从记录的WakeSet中移除
            parentElement.classList.add('remove');
            this.lists.delete(parentElement);
          }
        });
      });
    }
    record() {
      this.items.forEach((item) => this.lists.add(item));
    }
  }
  new Todos().run();
</script>
```

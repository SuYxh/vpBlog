# 对象类型
在 ES5 时存在三种：

native object（原生对象），指语义完全由规范定义且不掺杂任何宿主环境定义的对象。
built-in object （内置对象），如 Math、Date 等。
host object （宿主对象），由执行环境提供，如浏览器的 window 和 V8 的 global。
而 ES6 时划分更细，更新为四种：

ordinary object （普通对象），需要具备了对象的所有基本内置方法。
exotic object （外来对象），与“普通对象”相反，所以一个对象不是“普通对象”，就是“外来对象”。
standard object （标准对象），规范定义的对象（？）。
built-in object （内置对象），同 ES5。
#Object.is
#1. 语法
WARNING

Object.is(obj1, obj2)

参数：

obj1：第一个需要比较的值；
obj2：第二个需要比较的值。
返回值：

返回两个参数是否相等的布尔值。

#2. 描述
is 方法判断两个值是否相等，== 运算符会做隐式类型转换，而该方法不会；=== 会将数字 +0 和 -0 视为相等，并认为 NaN 不等于 NaN。

个人在日常开发中常用场景：

尚未使用过。
#3. 示例
normal

```js
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// Special Cases
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```
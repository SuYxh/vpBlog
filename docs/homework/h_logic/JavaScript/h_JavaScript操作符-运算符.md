# JavaScript操作符-运算符

### JavaScript 算术运算符

y=5，下面的表格解释了这些算术运算符：



| 运算符 | 描述         | 例子  | x 运算结果                                                   | y 运算结果 | 在线实例                                                     |
| :----- | :----------- | :---- | :----------------------------------------------------------- | :--------- | :----------------------------------------------------------- |
| +      | 加法         | x=y+2 | 7                                                            | 5          | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_add) |
| -      | 减法         | x=y-2 | 3                                                            | 5          | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_sub) |
| *      | 乘法         | x=y*2 | 10                                                           | 5          | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_mult) |
| /      | 除法         | x=y/2 | 2.5                                                          | 5          | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_div) |
| %      | 取模（余数） | x=y%2 | 1                                                            | 5          | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_mod) |
| ++     | 自增         | x=++y | 6                                                            | 6          | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_incr) |
| x=y++  | 5            | 6     | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_incr2) |            |                                                              |
| --     | 自减         | x=--y | 4                                                            | 4          | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_decr) |
| x=y--  | 5            | 4     | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_decr2) |            |                                                              |



------

### JavaScript 赋值运算符

赋值运算符用于给 JavaScript 变量赋值。

给定 **x=10** 和 **y=5**，下面的表格解释了赋值运算符：

| 运算符 | 例子 | 等同于 | 运算结果 | 在线实例                                                     |
| :----- | :--- | :----- | :------- | :----------------------------------------------------------- |
| =      | x=y  |        | x=5      | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_equal) |
| +=     | x+=y | x=x+y  | x=15     | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_plusequal) |
| -=     | x-=y | x=x-y  | x=5      | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_minequal) |
| *=     | x*=y | x=x*y  | x=50     | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_multequal) |
| /=     | x/=y | x=x/y  | x=2      | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_divequal) |
| %=     | x%=y | x=x%y  | x=0      | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_modequal) |

>  操作符在变量前面，先进行自身运算，在进行其他运算

### JavaScript逻辑运算符

逻辑运算符用于测定变量或值之间的逻辑。

给定 x=6 以及 y=3，下表解释了逻辑运算符：

| 运算符 | 描述 | 例子                      |
| :----- | :--- | :------------------------ |
| &&     | and  | (x < 10 && y > 1) 为 true |
| \|\|   | or   | (x==5 \|\| y==5) 为 false |
| !      | not  | !(x==y) 为 true           |

**提示：**JavaScript逻辑运算符的优先级是：！、&& 、||。

- 1、只要 || 前面为 false,不管 || 后面是 true 还是 false，都返回 || 后面的值。
- 2、只要 || 前面为 true,不管 || 后面是 true 还是 false，都返回 || 前面的值。
- 3、只要 && 前面是 false，无论 && 后面是 true 还是 false，结果都将返 && 前面的值;
- 4、只要 && 前面是 true，无论 && 后面是 true 还是 false，结果都将返 && 后面的值;

### JavaScript运算符的优先级

```
1、() 优先级最高
2、一元运算符 ++  -- ！
3、算数运算符(与数学一致，先乘除后加减) * / % + -
4、关系运算符 > < = >= <= 
5、相等运算符 == === != !==(不全等)
6、逻辑运算符 先 && 后 ||
7、赋值运算符 =
```


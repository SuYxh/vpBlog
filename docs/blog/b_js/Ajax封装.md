# Ajax的封装

当在用户注册系统的场景使用是，用户名、手机号、邮箱等每次验证都要写一次Ajax的几个步骤，这样代码量会很大，然后想到了封装Ajax，让其使用方便！进行初步封装后如下：

```javascript
function myAjax(type,url, params, dataType, callback,async) {}
```

这样封装后，虽然可以减少代码，但是需要记忆6个参数，而且参数都是必须的，顺序还不能错，不然程序就会出问题，这样就有不少瑕疵。看一下微信小程序的  `wx.request(Object object)` 方法：

 ```javascript
wx.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success (res) {
    console.log(res.data)
  }
})
 ```

在  `wx.request(Object object)` 方法：传入的是对象，这样就解决了需要记忆参数的顺序，也可以解决参数是不是必须要传入，如果以后需要可以直接拿出去用，使用更加方便，等到以后技术到位了，在进行优化总结！然后按照小程序的文档，写了优化后的使用文档，如下。



代码：  https://github.com/SuYxh/Web-Study-Record/tree/master/code/ajax 



#### myAjax(obj)

##### 参数

| 属性     | 类型     | 默认值 | 必填 | 说明                   |
| :------- | :------- | :----- | :--- | :--------------------- |
| url      | string   |        | 是   | 开发者服务器接口地址   |
| data     | object   |        | 是   | 请求的参数             |
| type     | string   | GET    | 否   | HTTP请求方法           |
| dataType | string   | json   | 否   | 返回的数据格式         |
| async    | boolean  | true   | 否   | 同步还是异步请求       |
| success  | function |        | 否   | 接口调用成功的回调函数 |
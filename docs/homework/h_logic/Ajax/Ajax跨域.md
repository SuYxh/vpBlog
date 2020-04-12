# Ajax跨域

**同源策略：** 同一个 **协议** 、同一个 **域名** 、同一个 **端口**

跨域的本质：其实就是服务器返回了一个方法调用，这个方法是我们事先定义好的，而方法中的参数就是我们想要的数据



api接口：

![](http://qn.huat.xyz/content/1586000811877_08AFEF51-479E-4ed4-9AF5-12C38526C9F6.png)

> 淘宝： https://suggest.taobao.com/sug?q=web&callback=look  
>
> 参数： q 关键字      callback 回调方法名称  

> 百度： http://suggestion.baidu.com/su?wd=Java&cb=baidu 
>
> 或者   https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=java&cb=lookfor 
>
> 参数： wd 关键字  cb 回调方法名称

> 谷歌： [ http://suggestqueries.google.com/complete/search?client=youtube&q=#content#&jsonp=window.google.ac.h](http://suggestqueries.google.com/complete/search?client=youtube&q=#content%23&jsonp=window.google.ac.h) 

> Bing： https://api.bing.com/qsonhs.aspx?type=cb&q=java&cb=xhr 

> 360：  https://sug.so.360.cn/suggest?encodein=utf-8&encodeout=utf-8&format=json&word=Java&callback=lookfor 

> 搜狗：  [https://www.sogou.com/suggnew/ajajjson?type=web&key=#content#](https://www.sogou.com/suggnew/ajajjson?type=web&key=#content%23) 
>
> callback：window.sogou.sug 

跨域请求决定方案一： 动态创建 script 标签

```html
<body>
请输入：<input  id="content" type="text" />
</body>

<script type="text/javascript">
            window.onload = function() {
                
                //组装查询地址
                var sugurl = "http://suggestion.baidu.com/su?wd=#content#&cb=window.baidu.sug";
                var content = "新闻";
                sugurl = sugurl.replace("#content#", content);
 
                //定义回调函数
                window.baidu = {
                    sug: function(json) {
                        console.log(json)
                    }
                }
 
                //动态添加JS脚本
                var script = document.createElement("script");
                script.src = sugurl;
                document.getElementsByTagName("head")[0].appendChild(script);
 
            }
        </script>
```









 用jsonp的跨域方式 :  https://www.runoob.com/json/json-jsonp.html 

```html
注意引入jQuery
<script src="https://cdn.static.runoob.com/libs/jquery/1.8.3/jquery.js"></script>    
<body>  
请输入：<input list="languageList" id="value" type="text" />  
<datalist id="languageList" >  
</datalist>  
</body>


<script>  
    /*设置监听事件，向输入框中输入内容，当键盘按键弹起的时候，将输入的内容作为参数传入到函数info中*/  
    $("#value").bind("keyup",function(event){  
        /*当键盘按下上下键的时候，不进行监听，否则会与keyup事件起冲突*/  
        if(event.keyCode == 38 || event.keyCode == 40){  
            return false;  
        }  
        var value = $("#value").val();  
            info(value);  
    })  
    /*将ajax封装到函数中*/  
    function info(value){  
        /*百度搜索框智能提示的接口*/  
        var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";  
        /*需要传入的参数，cb是callback的缩写*/  
        var data = {  
            wd : value,  
            cb : "helloword"  
        }  
        /*因为涉及跨域，这里使用jsonp*/  
        $.ajax({  
            url : url,  
            data : data,  
            type : "GET",  
            dataType : "jsonp",  
            jsonpCallback : "helloword",  
            /*跨域成功的时候返回的数据*/  
            success : function (result){  
                /*返回成功之后可以在开发者工具里的Console打印看一下*/  
                console.log(result);  
                /*将获取的数据整理后返回到页面*/  
                var a = result.s;  
                var list = "";  
                for(var i in a ){  
                    var l = a[i];  
                    list += "<option>"+l+"</option>";  
                }  
                $("#languageList").html(list);  
            },  
            /*跨域失败的时候返回的数据*/  
            error : function(){  
                console.log("error");  
            }  
        })  
    }  
</script>

```









相关博客： https://blog.csdn.net/weixin_38362146/article/details/77834445?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2 





[说说AJAX（同源策略与CORS跨域）]( https://www.jianshu.com/p/f41457aa19a2 )
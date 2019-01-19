# TIPS

### GET

>* GET 从指定的资源请求数据
>* GET 请求可被缓存
>* GET 请求保留在浏览器历史记录中
>* GET 请求可被收藏为书签
>* GET 请求不应在处理敏感数据时使用
>* GET 请求有长度限制
>* GET 请求只应当用于取回数据
>* GET 请求对服务器没有修改

### POST

>* POST 向指定的资源提交要被处理的数据
>* POST 请求不会被缓存
>* POST 请求不会保留在浏览器历史记录中
>* POST 不能被收藏为书签
>* POST 请求对数据长度没有要求   
>* POST 请求对服务器进行了修改  

### 关于跨域

说明 | 是否允许通信
------------------- | ------------- 
同一域名,不同文件/路径   |     允许
同一域名,不同端口       |     不允许
同一域名,不同协议       |     不允许
域名和域名对应相同ip    |     不允许
主域相同,子域不同       |     不允许
不同域名                |     不允许

#### 跨域处理

>* jsonp(只能实现Get一种方式)
>* document.domain + iframe(仅限主域相同，子域不同的跨域应用场景)
>* location.hash + iframe(通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。)
>* window.name + iframe
>* postMessage
>* 跨域资源共享(CORS)
>* 服务器代理


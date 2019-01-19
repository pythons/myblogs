# tips

## GET

> * GET
    GET 从指定的资源请求数据
    GET 请求可被缓存
    GET 请求保留在浏览器历史记录中
    GET 请求可被收藏为书签
    GET 请求不应在处理敏感数据时使用
    GET 请求有长度限制
    GET 请求只应当用于取回数据
    GET 请求对服务器没有修改

> * POST
    POST 向指定的资源提交要被处理的数据
    POST 请求不会被缓存
    POST 请求不会保留在浏览器历史记录中
    POST 不能被收藏为书签
    POST 请求对数据长度没有要求   
    GET  请求对服务器进行了修改  

## 关于跨域处理

URL | 说明 | 是否允许通信
------------------- | ------------- | ---------- 
http://www.domain.com/a.js
http://www.domain.com/b.js        | 同一域名，不同文件或路径   |     允许
http://www.domain.com/lab/c.js

http://www.domain.com:8000/a.js
http://www.domain.com/b.js        | 同一域名，不同端口      |          不允许
 
http://www.domain.com/a.js
https://www.domain.com/b.js       | 同一域名，不同协议      |          不允许
 
http://www.domain.com/a.js
http://192.168.4.12/b.js          |  域名和域名对应相同ip   |           不允许
 
http://www.domain.com/a.js
http://x.domain.com/b.js        |   主域相同，子域不同       |         不允许
http://domain.com/c.js
 
http://www.domain1.com/a.js
http://www.domain2.com/b.js     |   不同域名               |          不允许
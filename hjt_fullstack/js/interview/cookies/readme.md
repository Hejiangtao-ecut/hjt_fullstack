# cookies
1. cookies 是服务器种在客户端的存储数据，每次发送请求的时候都会带上
    - 比较小 4kb
    - 记录登陆状态
2. node 设置cookies
    - cookies有哪些选项
        - domain:端口
        - path：路径
        - maxage：生命周期
        - expires：过期时间
3. 讶羽
    - cookies 安全问题
    - cookies 由服务器端种下，写在用户端，是一段比较小的文本
    - 每次都要传递给服务器端，有些攻击可以得到cookies
    - 得到cookies 就可以伪装成用户去下单
    - httpOnly: true(默认)  防止XSS攻击
        - 设置为true 时dom.cookies 无法得到
        - 设置为fales时，可以得到，前端也可以操作，但是容易被攻击
        - 如果cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击，窃取cookie内容，这样就增加了cookie的安全性，即便是这样，也不要将重要信息存入cookie。XSS全称Cross SiteScript，跨站脚本攻击，是Web程序中常见的漏洞，XSS属于被动式且用于客户端的攻击方式，所以容易被忽略其危害性。其原理是攻击者向有XSS漏洞的网站中输入(传入)恶意的HTML代码，当其它用户浏览该网站时，这段HTML代码会自动执行，从而达到攻击的目的。如，盗取用户Cookie、破坏页面结构、重定向到其它网站等。
        - 但是前端也有必要操作一些简单不重要的cookies，比如开启夜间模式，用户选择等低安全性的cookies，但是部分高安全性的如uid等则设置为fales
    - cookie 与locastorage都是用来做存储的，区别
        - cookies 4KB
        - locastorage 5MB 还有lokijs数据库 可以多存一些，用户的地址等
        - cookies 性能不好，每次http请求都会带上他，开销大
            - http是无状态的网络协议，没有cookies无法登录，只能成为内容展示
            - localstorage 只存在于客户端，性能好
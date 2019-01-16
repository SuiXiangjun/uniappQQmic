# uniappQQmic
用uni app 框架兼容三端[H5端、小程序端、app端]仿照QQ音乐界面 记录使用uniapp
***
- 效果
![效果](https://github.com/SuiXiangjun/uniappQQmic/blob/master/myUniApp/static/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg?raw=true)

***
- 支持es6、下载less即可使用
- 小程序不支持本地引入iconfont————解决办法换为远程引入字体库或者用image代替 —— 用的第二种
- 页底固定导航跳转页面只跳转中间部分，uinapp暂时不支持，因为优先兼容微信小程序
- 组件使用方法跟vue一样，开发过程中命名为list的组件在h5中是可以出来的在小程序中就是不出来后来排查了一下list是关键字所以在小程序中出不来，还有引入组件文件的时候不可以带.vue的后缀
- 因为没有过滤器所以提取了js的公共方法挂载在全局当做过滤器‘./publicjs/common’ 收听人数格式化
- 小程序模板内不支持函数调用
	``` {{$pubFuc.peoNum(val.count)}} ```
- 钩子函数要用vue的钩子函数不要单用小程序的钩子函数否则只有小程序会生效


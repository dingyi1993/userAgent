# userAgent

轻量级的检测ua，只判断了常用的设备和应对绝大部分的开发需求。

支持amd、cmd，如果都你的项目中都不支持，则会导出到全局变量UA。

##用法

1. UA.isXXX

    返回布尔值，获得当前环境是否是XXX，可以是浏览器、操作系统、app等，比如safari、Android、wechat（首字母都需大写）等。

    具体支持哪些检测可以查看useragent.js或者查看UA对象的值。

2. UA.is(value)

    参数value为string，返回布尔值，获得当前ua是否包含特定的字符串，通常用于是否在app内的检测。

3. UA.detail

    返回一个对象，包含当前环境的详细信息，比如：

        * 如果是IOS，则 UA.detail.os.version 会返回IOS的版本号

        * 如果是chrome浏览器，则 UA.detail.browser.version 会返回chrome的版本号

    这个对象支持的非常少，只是根据开发需求写了一部分。

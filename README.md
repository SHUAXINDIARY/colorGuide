##说明
仅支持less实时编译的小小小小小的脚手架环境！！！

## 关于该脚手架功能:
    *.gulp搭建 
    1.编译less
    2.预装了reset.css和animate.css
---------------------------------------
    3.ES6----------------待支持，因为觉得常用的浏览器都适配的差不多了。。。
    4.压缩代码和资源------待支持，因为这个脚手架几乎都是拿来做练习
## 项目目录
    1. src---存放你的代码和资源
        1.assets/---存放css库(reset.css和animate.css)
        2.css/------less编译输出目录
        3.font/-----存放你的icon和字体
        4.img/------存放你的图片
        5.js/-------编写你的js代码
        6.less/-----编写你的less代码
        7.*.html----创建你的html文件并编写
    2. .gitignore---git配置
    3. gulpfile.js--gulp配置文件
    4. *.json-------初始化文件
    5. README.md----帮助文档(本文档)
    

## git clone 项目后
    1.npm i 安装依赖
    2.在项目根目录中执行gulp start
        然后开始愉快的敲代码吧！！！
    3.所有都做完后可以执行 gulp build打包整个项目输出到build目录


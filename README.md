# colorGuide
参考设计师Mehdi Khodamoradi的搭配，做的色彩搭配指南网站

# [在线演示](https://shuaxindiary.github.io/colorGuide/)

# 总结

```javascript
    1.通过flex布局
    2.每一页显示颜色的容器通过存储颜色数组的数组数量动态生成

        // 存储颜色数据的数组
        colorList= [
            ["#fef3d3", "#eccfbf", "#c4d3d6", "#d4dbe5"],
            ["#80beaf", "#b3ddd1", "#d1dce2", "#f5b994", "#ee9c6c"],
            ...
        ],
        // 根据颜色数组动态生成li
        renderDom(domName) {
            let lis = [];
            for (let i in globalVal.colorList[globalVal.pages]) {
                lis.push(document.createElement('li'));
            };
            lis.forEach(
                (item, index) => {
                    domName.appendChild(item);
                }
            );
        },
    3.然后再去填充颜色
```

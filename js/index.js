// 获取操作dom
const dom = {
    conOneLis: document.querySelectorAll('#conOne>li'),
    conTwoLis: document.querySelectorAll('#conTwo>li'),
    colorNameLis: document.querySelectorAll('#colorName>li'),
    left: document.querySelector('#left'),
    right: document.querySelector('#right'),
    footer: document.querySelector('#footer')
};
// 颜色列表
const globalVal = {
    pages: 0,
    colorList: [
        ["#E1E6E6", "#C4DAE6", "#92C8E0", "#67ABD6", "#C3B0D6"],
        ["#eff1fe", "#bcc2d7", "#8895b1", "#546c8c", "#194568"],
        ["#b4babe", "#8a8e9c", "#706073", "#593440", "#371005#"],
        ["#9fbcc2", "#afc7bf", "#c7cfc0", "#ddd6ca", "#eedfda"],
        ["#eff1fe", "#fef278", "#f8d849", "#377ab1", "#194568"],
        ["#e68fe6", "#ff7e9d", "#fc8e56", "#c0a92d", "#61bc52"],
        ["#223553", "#6e819f", "#d0aebc", "#cfcaa2", "#718c3f"],
        ["#d2edff", "#9fdff8", "#84c5e1", "#84c5e1", "#6db9af"],
        ["#ed3b79", "#fc5d48", "#ef8e0b", "#c4b800", "#80de42"]
    ],
}
// 业务方法
const features = {
    init() {
        this.fillColor(dom.conOneLis);
        this.fillColor(dom.conTwoLis);
        this.fillColorName(dom.colorNameLis);
        this.currentPage();
    },
    next() {
        if (globalVal.pages + 1 == globalVal.colorList.length) {
            alert('最后一张了');
        } else {
            globalVal.pages++;
            this.init();
        };
    },
    last() {
        if (globalVal.pages == 0) {
            alert('这是第一张了');
        } else {
            globalVal.pages--;
            this.init();
        };

    },
    // 填充颜色
    fillColor(domName) {
        domName.forEach(
            (item, index) => {
                item.style.backgroundColor = globalVal.colorList[globalVal.pages][index];
            }
        );
    },
    // 填充颜色名字
    fillColorName(domName) {
        domName.forEach(
            (item, index) => {
                item.innerHTML = globalVal.colorList[globalVal.pages][index];
                item.style.color = globalVal.colorList[globalVal.pages][index];
            }
        );
    },
    // 渲染当前页
    currentPage() {
        dom.footer.innerHTML = `第${globalVal.pages + 1}页`;
    }
};

features.init();

dom.left.onclick = function () {
    features.last();
};
dom.right.onclick = function () {
    features.next();
};



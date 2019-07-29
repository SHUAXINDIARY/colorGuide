let nums = [1, 2, 3, 4, 5];

let lisCon = document.querySelector('#lisCon');

let lis = [];
for (let i in nums) {
    lis.push(document.createElement('li'));
};

lis.forEach(
    (item, index) => {
        // 创建文本节点
        let text = document.createTextNode(nums[index]);
        // 给li插入文本节点
        item.appendChild(text);
        // 给ul插入li节点
        lisCon.append(item);
    }
);
let two=function(str){
    console.log(str);
};
let name="wade";
function test(callback){
    callback(name);
};

test(two);

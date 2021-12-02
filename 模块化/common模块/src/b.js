console.log('我是b模块')
let a = require('./a.js');
module.exports = {
    b: function b() {
        console.log('我是b模块的函数')
        return 11111;
    }
}
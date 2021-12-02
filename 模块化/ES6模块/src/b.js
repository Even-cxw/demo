import a from './a.js'
console.log('我是b模块')
export default {
    b: function b() {
        console.log('我是b模块的函数')
        return 11111;
    }
}
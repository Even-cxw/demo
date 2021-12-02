let a = require('./src/a.js');
// let c = require('./src/a.js');
// let d = require('./src/a.js');
// let b = require('./src/b.js');
let b = require('module');
// d = 'Even'
// console.log(d)

// console.log('a', a.a());

console.log('module',module);
console.log('require',require);
// console.log('arguments', arguments);
// console.log('require',require.cache['/Users/even/Even/continue/demo/common模块/src/a.js'].exports);
let name = require.cache['/Users/even/Even/continue/demo/模块化/common模块/src/a.js'].exports.a;

console.log(name)

// let sss = Module._cache['/Users/even/Even/continue/demo/模块化/common模块/src/a.js'];
let sss = b.findSourceMap('/Users/even/Even/continue/demo/模块化/common模块/src/a.js')
console.log('sss', b._cache);

// console.log(global._cache)